const fs = require('fs');
const GrandiloquenciaTranspiler = require('./transpiler');
const chalk = require('chalk');

const [,, command, ...args] = process.argv;

const transpiler = new GrandiloquenciaTranspiler();

function printHelp() {
  console.log(chalk.yellow(`
🧾 Uso da Grandiloquência CLI:

  ${chalk.cyan('node cli.js run <arquivo.grand>')}          → Transpila e executa com eval
  ${chalk.cyan('node cli.js transpile <origem> <destino>')} → Transpila e salva como .js
  ${chalk.cyan('node cli.js show <arquivo.grand>')}         → Mostra o JS no terminal
`));
}

if (!command) {
  printHelp();
  process.exit(1);
}

if (command === 'run') {
  const [inputFile] = args;
  if (!inputFile || !fs.existsSync(inputFile)) {
    console.error(chalk.red('⚠ Arquivo de entrada não especificado ou não encontrado.'));
    process.exit(1);
  }

  const source = fs.readFileSync(inputFile, 'utf-8');
  const jsCode = transpiler.transpile(source);

  console.log(chalk.green('\n🚀 Executando:\n'));
  eval(jsCode);

} else if (command === 'transpile') {
  const [inputFile, outputFile] = args;
  if (!inputFile || !outputFile) {
    console.error(chalk.red('⚠ Uso: node cli.js transpile <arquivo.grand> <saida.js>'));
    process.exit(1);
  }

  const source = fs.readFileSync(inputFile, 'utf-8');
  const jsCode = transpiler.transpile(source);
  fs.writeFileSync(outputFile, jsCode);
  console.log(chalk.green(`✅ Arquivo "${outputFile}" gerado com sucesso.`));

} else if (command === 'show') {
  const [inputFile] = args;
  if (!inputFile) {
    console.error(chalk.red('⚠ Uso: node cli.js show <arquivo.grand>'));
    process.exit(1);
  }

  const source = fs.readFileSync(inputFile, 'utf-8');
  const jsCode = transpiler.transpile(source);
  console.log(chalk.cyan('\n📄 Código Transpilado:\n'));
  console.log(jsCode);

} else {
  console.error(chalk.red('⚠ Comando desconhecido.'));
  printHelp();
  process.exit(1);
}
