const fs = require('fs');
const GrandiloquenciaTranspiler = require('./transpiler');

const [,, inputFile, outputFile] = process.argv;

if (!inputFile) {
  console.error('Uso: node cli.js <arquivo-de-entrada.grand> [arquivo-de-saida.js]');
  process.exit(1);
}

const source = fs.readFileSync(inputFile, 'utf-8');
const transpiler = new GrandiloquenciaTranspiler();
const jsCode = transpiler.transpile(source);

if (outputFile) {
  fs.writeFileSync(outputFile, jsCode);
  console.log(`Arquivo ${outputFile} gerado com sucesso!`);
} else {
  console.log(jsCode);
}