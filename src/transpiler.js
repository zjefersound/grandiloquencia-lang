// Transpilador: Grandiloquência++ → JavaScript
function grandiloquenciaParaJS(codigoGrandiloquente) {
    // Substituições de sintaxe rebuscada para JS padrão
    let jsCode = codigoGrandiloquente
        // Declaração de variável
        .replace(/DEFINIR DE MANEIRA EXPLÍCITA E IRREVOGÁVEL A VARIÁVEL DE NOME \[(.*?)\] COM O VALOR \[(.*?)\]/g, 'let $1 = $2;')
        
        // Condicional (if)
        .replace(/NO CASO EM QUE A CONDIÇÃO \[(.*?)\] SE MOSTRAR VERDADEIRA, EXECUTAR O SEGUINTE BLOCO:/g, 'if ($1) {')
        
        // Else if
        .replace(/CASO CONTRÁRIO, SE A CONDIÇÃO \[(.*?)\] FOR VERDADEIRA, PROCEDER COM:/g, '} else if ($1) {')
        
        // Else
        .replace(/CASO CONTRÁRIO, PROCEDER COM:/g, '} else {')
        
        // Loop for
        .replace(/PARA CADA ITERAÇÃO NUMERADA DE \[(.*?)\] ATÉ \[(.*?)\], INCREMENTANDO DE \[(.*?)\] EM \[(.*?)\], PROCEDER COM:/g, 'for (let i = $1; i <= $2; i += $4) {')
        
        // Função
        .replace(/UMA SUBROTINA DENOMINADA \[(.*?)\] QUE, AO RECEBER \[(.*?)\] E \[(.*?)\], RETORNA A SUA ADIÇÃO/g, 'function $1($2, $3) { return $2 + $3; }')
        
        // Try/Catch
        .replace(/TENTATIVA DE EXECUÇÃO DO BLOCO\. EM CASO DE MALOGRO, REALIZAR A CONDUTA DE CONTINGÊNCIA/g, 'try {')
        .replace(/FIM DA TENTATIVA/g, '} catch (e) {')
        
        // Console.log
        .replace(/IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO: \[(.*?)\]/g, 'console.log($1);')
        
        // Return
        .replace(/DEVOLVER AO CHAMADOR O SEGUINTE VALOR: \[(.*?)\]/g, 'return $1;')
        
        // Fechamento de blocos
        .replace(/FIM DO BLOCO/g, '}');

    return jsCode;
}

class GrandiloquenciaTranspiler {
    transpile(source) {
        return grandiloquenciaParaJS(source);
    }
}
module.exports = GrandiloquenciaTranspiler