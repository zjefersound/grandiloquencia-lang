function grandiloquenciaParaJS(codigoGrandiloquente) {
    let linhasOriginais = codigoGrandiloquente
        // Declaração de variáveis
        .replace(/DEFINIR DE MANEIRA EXPLÍCITA E IRREVOGÁVEL A VARIÁVEL DE NOME\s+\[(.*?)\]\s+COM O VALOR\s+\[(.*?)\]/g, 'let $1 = $2;')

        // Condicionais
        .replace(/NO CASO EM QUE A CONDIÇÃO\s+\[(.*?)\]\s+SE MOSTRAR VERDADEIRA, EXECUTAR O SEGUINTE BLOCO:/g, 'if ($1):')
        .replace(/CASO CONTRÁRIO, SE A CONDIÇÃO\s+\[(.*?)\]\s+FOR VERDADEIRA, PROCEDER COM:/g, 'else if ($1):')
        .replace(/CASO CONTRÁRIO, PROCEDER COM:/g, 'else:')

        // Impressão
        .replace(/IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO:\s+\[(.*?)\]/g, 'console.log($1);')

        // Laço tipo for
        .replace(
            /PARA CADA ITERAÇÃO NUMERADA DE\s+\[(.*?)\]\s+ATÉ\s+\[(.*?)\],\s+INCREMENTANDO DE\s+\[(.*?)\]\s+EM\s+\[(.*?)\],\s+PROCEDER COM:/g,
            'for (let i = $1; i <= $2; i += $4):'
        )

        // Definição de função
        .replace(
            /PROCLAMO, SOB A LUZ DA LÓGICA, A EXISTÊNCIA DA FUNÇÃO INTITULADA \[(.*?)\],\s*DOTADA DOS ARGUMENTOS \[(.*?)\],\s*CUJA FINALIDADE SE SEGUE:/g,
            'function $1($2):'
        )

        .replace(
            /CLAMO PELO PODER DA FUNÇÃO \[(.*?)\],\s*SUPLICANDO SUA EXECUÇÃO COM OS VALORES \[(.*?)\]/g,
            '$1($2);'
        )

        .split('\n');

    const transpiled = [];
    const indentStack = [0];

    for (let i = 0; i < linhasOriginais.length; i++) {
        const linha = linhasOriginais[i];
        const indent = linha.match(/^\s*/)[0].length;
        const trimmed = linha.trim();

        if (!trimmed) continue;

        while (indent < indentStack[indentStack.length - 1]) {
            indentStack.pop();
            transpiled.push('    '.repeat(indentStack.length - 1) + '}');
        }

        if (trimmed.endsWith(':')) {
            const declaracao = trimmed.slice(0, -1);
            transpiled.push('    '.repeat(indentStack.length - 1) + declaracao + ' {');
            indentStack.push(indent + 1);
        } else {
            transpiled.push('    '.repeat(indentStack.length - 1) + trimmed);
        }
    }

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