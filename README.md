# GLANG

![image](https://github.com/user-attachments/assets/161f4dc5-a2e5-4dc7-a6a0-1e8efffb8ba0)

## DISPOSIÇÕES INICIAIS

Linguagem formalizada, intrinsecamente orientada à confecção, codificação e hermenêutica de atas jurídicas, concebida para promover a exata transcrição documental, em estrita observância aos preceitos legais vigentes, garantindo-se a irretocável integridade, autenticidade e validade probatória dos atos formais nele consignados.

### Exemplo elucidativo de código

Resolução da fórmula de Bhaskara

```
PROCLAMO, SOB A LUZ DA LÓGICA, A EXISTÊNCIA DA FUNÇÃO INTITULADA [resolvaBhaskara],
DOTADA DOS ARGUMENTOS [a, b, c], CUJA FINALIDADE SE SEGUE:
    DEFINIR DE MANEIRA EXPLÍCITA E IRREVOGÁVEL A VARIÁVEL DE NOME [delta] COM O VALOR [b * b - 4 * a * c]
    
    NO CASO EM QUE A CONDIÇÃO [delta < 0] SE MOSTRAR VERDADEIRA, EXECUTAR O SEGUINTE BLOCO:
        IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO: ["Não existem raízes reais."]
    CASO CONTRÁRIO, PROCEDER COM:
        DEFINIR DE MANEIRA EXPLÍCITA E IRREVOGÁVEL A VARIÁVEL DE NOME [raiz1] COM O VALOR [(-b + Math.sqrt(delta)) / (2 * a)]
        DEFINIR DE MANEIRA EXPLÍCITA E IRREVOGÁVEL A VARIÁVEL DE NOME [raiz2] COM O VALOR [(-b - Math.sqrt(delta)) / (2 * a)]
        IMPRIMIR NA SAÍDA PADRÃO O SEGUINTE TEXTO: ["As raízes são: " + raiz1 + " e " + raiz2]

CLAMO PELO PODER DA FUNÇÃO [resolvaBhaskara], SUPLICANDO SUA EXECUÇÃO COM OS VALORES [1, -3, -4]

```


---

## 📂 Seção de Documentação

Para leitura aprofundada sobre os comandos, estruturas sintáticas e orientações de uso da linguagem, consulte o compêndio oficial em [grandiloquencia-handbook.md](./grandiloquencia-handbook.md).

---

## ⚖️ Execução da CLI

Você pode interagir com a linguagem Grandiloquência através da linha de comando. Veja abaixo os comandos disponíveis:

### Transpilar e Executar

```bash
npm run cli:run arquivo.grand
```

### Transpilar e Salvar Arquivo `.js`

```bash
npm run cli:transpile arquivo.grand arquivo.js
```

### Exibir Código Transpilado no Console

```bash
npm run cli:show arquivo.grand
```

---

📌 *As palavras têm poder, e em Grandiloquência, elas programam.*