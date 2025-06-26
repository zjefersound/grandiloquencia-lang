function grandiloquenciaParaJS(codigoGrandiloquente) {
    let linhasOriginais = codigoGrandiloquente
        .replace(/DEFINIR DE MANEIRA EXPLÍCITA E IRREVOGÁVEL A VARIÁVEL DE NOME\s+\[(.*?)\]\s+COM O VALOR\s+\[(.*?)\]/g, 'let $1 = $2;')
        .replace(/NO CASO EM QUE A CONDIÇÃO\s+\[(.*?)\]\s+SE MOSTRAR VERDADEIRA, EXECUTAR O SEGUINTE BLOCO:/g, 'if ($1):')
        .replace(/CASO CONTRÁRIO, SE A CONDIÇÃO\s+\[(.*?)\]\s+FOR VERDADEIRA, PROCEDER COM:/g, 'else if ($1):')
        .replace(/CASO CONTRÁRIO, PROCEDER COM:/g, 'else:')
        .replace(/IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO:\s+\[(.*?)\]/g, 'console.log($1);')
        .split('\n');

    const transpiled = [];
    const indentStack = [0];

    for (let i = 0; i < linhasOriginais.length; i++) {
        const linha = linhasOriginais[i];
        const indent = linha.match(/^\s*/)[0].length;
        const trimmed = linha.trim();

        if (!trimmed) continue;

        // Fecha blocos se a indentação diminuiu
        while (indent < indentStack[indentStack.length - 1]) {
            indentStack.pop();
            transpiled.push('    '.repeat(indentStack.length - 1) + '}');
        }

        if (trimmed.endsWith(':')) {
            // Remove ":" e abre bloco
            const declaracao = trimmed.slice(0, -1);
            transpiled.push('    '.repeat(indentStack.length - 1) + declaracao + ' {');
            indentStack.push(indent + 1);
        } else {
            // Linha comum
            transpiled.push('    '.repeat(indentStack.length - 1) + trimmed);
        }
    }

    // Fecha blocos restantes
    while (indentStack.length > 1) {
        indentStack.pop();
        transpiled.push('    '.repeat(indentStack.length - 1) + '}');
    }

    return transpiled.join('\n');
}


class GrandiloquenciaTranspiler {
    transpile(source) {
        return grandiloquenciaParaJS(source);
    }
}
module.exports = GrandiloquenciaTranspiler