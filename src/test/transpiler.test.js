const GrandiloquenciaTranspiler = require('../transpiler');

const transpiler = new GrandiloquenciaTranspiler();

const casosDeTeste = [
  {
    descricao: 'Declaração de variável',
    entrada: 'DEFINIR DE MANEIRA EXPLÍCITA E IRREVOGÁVEL A VARIÁVEL DE NOME [x] COM O VALOR [5]',
    esperado: 'let x = 5;'
  },
  {
    descricao: 'Atribuição simples',
    entrada: 'REDEFINA, COM O PODER QUE ME CONFERE A LÓGICA, O VALOR DE [x] PARA [10]',
    esperado: 'x = 10;'
  },
  {
    descricao: 'Condicional if',
    entrada: 'NO CASO EM QUE A CONDIÇÃO [x > 5] SE MOSTRAR VERDADEIRA, EXECUTAR O SEGUINTE BLOCO:\n    IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO: [x]',
    esperado: 'if (x > 5) {\n    console.log(x);\n}'
  },
  {
    descricao: 'Condicional else if',
    entrada: 'CASO CONTRÁRIO, SE A CONDIÇÃO [x < 5] FOR VERDADEIRA, PROCEDER COM:\n    IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO: [x]',
    esperado: 'else if (x < 5) {\n    console.log(x);\n}'
  },
  {
    descricao: 'Condicional else',
    entrada: 'CASO CONTRÁRIO, PROCEDER COM:\n    IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO: ["fim"]',
    esperado: 'else {\n    console.log("fim");\n}'
  },
  {
    descricao: 'Laço for',
    entrada: 'PARA CADA ITERAÇÃO NUMERADA DE [0] ATÉ [5], INCREMENTANDO DE [1] EM [1], PROCEDER COM:\n    IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO: [i]',
    esperado: 'for (let i = 0; i <= 5; i += 1) {\n    console.log(i);\n}'
  },
  {
    descricao: 'Laço while',
    entrada: 'PERSEVERE NA AÇÃO ENQUANTO A CONDIÇÃO [x < 10] FOR VERDADEIRA, PROSSIGA COM:\n    IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO: [x]',
    esperado: 'while (x < 10) {\n    console.log(x);\n}'
  },
  {
    descricao: 'Função - definição',
    entrada: 'PROCLAMO, SOB A LUZ DA LÓGICA, A EXISTÊNCIA DA FUNÇÃO INTITULADA [somar], DOTADA DOS ARGUMENTOS [a, b], CUJA FINALIDADE SE SEGUE:\n    IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO: [a + b]',
    esperado: 'function somar(a, b) {\n    console.log(a + b);\n}'
  },
  {
    descricao: 'Função - chamada',
    entrada: 'CLAMO PELO PODER DA FUNÇÃO [somar], SUPLICANDO SUA EXECUÇÃO COM OS VALORES [2, 3]',
    esperado: 'somar(2, 3);'
  },
  {
    descricao: 'Criação de array',
    entrada: 'PROMULGO A FORMAÇÃO DA LISTA DENOMINADA [numeros], COM OS ELEMENTOS [1, 2, 3]',
    esperado: 'let numeros = [1, 2, 3];'
  },
  {
    descricao: 'Atribuição a array',
    entrada: 'DETERMINO QUE O ELEMENTO DE ORDEM [1] EM [numeros] RECEBA O VALOR [99]',
    esperado: 'numeros[1] = 99;'
  },
  {
    descricao: 'Acesso a array',
    entrada: 'IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO: [numeros[1]]',
    esperado: 'console.log(numeros[1]);'
  },
  {
    descricao: 'Criação de objeto',
    entrada: 'RECONHEÇO A CONSTITUIÇÃO DO OBJETO [usuario], COM OS ATRIBUTOS {"nome": "Ana", "idade": 30}',
    esperado: 'let usuario = {"nome": "Ana", "idade": 30};'
  },
  {
    descricao: 'Acesso a propriedade de objeto',
    entrada: 'IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO: [usuario["nome"]]',
    esperado: 'console.log(usuario["nome"]);'
  },
  {
    descricao: 'Atribuição a propriedade de objeto',
    entrada: 'ESTABELEÇO QUE O ATRIBUTO ["idade"] DE [usuario] DEVE TER O VALOR [31]',
    esperado: 'usuario["idade"] = 31;'
  }
];

describe('Transpilador Grandiloquente', () => {
  casosDeTeste.forEach(({ descricao, entrada, esperado }) => {
    test(descricao, () => {
      const resultado = transpiler.transpile(entrada);
      expect(resultado.trim()).toBe(esperado.trim());
    });
  });
});
