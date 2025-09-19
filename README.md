Calculadora CLI - Atividade RI6
Projeto desenvolvido para a disciplina de Técnicas de Programação do curso de Desenvolvimento de Software Multiplataforma (DSM) da FATEC (2º Semestre), sob orientação do Prof. Gerson.

📖 Descrição do Projeto
Este projeto consiste no desenvolvimento de uma calculadora funcional via interface de linha de comando (CLI), utilizando TypeScript e Node.js. O objetivo principal da atividade é aplicar e solidificar os 4 pilares da Programação Orientada a Objetos: Encapsulamento, Herança, Polimorfismo e Abstração.

A aplicação apresenta um menu interativo ao usuário, permitindo a escolha de diversas operações matemáticas básicas, além de funcionalidades especiais como o cálculo de raízes de uma equação de segundo grau.

✨ Funcionalidades
Menu interativo para seleção de operações.

Operações básicas: Soma, Subtração, Multiplicação e Divisão.

Operações adicionais: Potenciação e Radiciação.

Cálculo de raízes de equação de 2º grau pela fórmula de Bhaskara.

Interface de linha de comando clara e de fácil utilização.

🚀 Tecnologias Utilizadas
TypeScript: Superset do JavaScript que adiciona tipagem estática e funcionalidades de orientação a objetos mais robustas.

Node.js: Ambiente de execução que permite rodar o código TypeScript (após compilado) no lado do servidor.

TS-Node (Desenvolvimento): Ferramenta para executar o TypeScript diretamente sem a necessidade de compilação manual a cada alteração.

⚙️ Como Executar o Projeto
Para executar este projeto em sua máquina local, siga os passos abaixo:

Bash

# 1. Clone o repositório para a sua máquina
git clone https://github.com/JoaooMoura/RI6

# 2. Navegue até o diretório do projeto
cd RI6

# 3. Instale as dependências necessárias
npm install

# 4. Compile o código TypeScript para JavaScript
npx tsc

# 5. Execute a aplicação
node out/index.js
Após executar o comando, a calculadora será iniciada no seu terminal.

📂 Estrutura do Projeto
A estrutura de pastas foi organizada para promover a separação de responsabilidades e a manutenibilidade do código:

src/: Contém todo o código-fonte da aplicação.

src/Calculo.ts: Classe abstrata que serve como "contrato" (interface) para todas as operações, definindo o método calcular.

src/operacoes/: Diretório onde cada arquivo representa uma operação matemática específica (Soma.ts, Bhaskara.ts, etc.), herdando da classe Calculo.

src/index.ts: Ponto de entrada da aplicação. Responsável pela lógica da interface com o usuário (menu) e pela orquestração das chamadas às classes de operação.

🧠 Conceitos Aplicados
Este projeto foi uma oportunidade para praticar os seguintes conceitos fundamentais:


Herança e Abstração: Todas as classes de operação herdam da classe abstrata Calculo, que define um contrato comum (o método calcular) a ser implementado por todas as classes filhas.



Polimorfismo: A aplicação utiliza uma variável do tipo Calculo para instanciar diferentes operações (new Soma(), new Divisao(), etc.), chamando o método calcular de forma uniforme, mas obtendo comportamentos diferentes dependendo do objeto real com o qual se está interagindo.


Encapsulamento: Cada classe de operação encapsula sua própria lógica de cálculo, expondo apenas o método calcular como interface pública, escondendo os detalhes de implementação.

Separação de Responsabilidades: A lógica de interface do usuário (index.ts), as regras de negócio (operacoes/) e a exibição de textos (mensagens.ts) foram separadas em módulos distintos.

Conceitos Adicionais Aplicados
Para a resolução da atividade RI6, além do material base, foram pesquisados e aplicados conceitos de TypeScript/JavaScript modernos que não eram explicitamente citados no documento de referência.

1. Parâmetros Rest (...numeros)

O documento de referência sugeria uma assinatura de método fixa com dois parâmetros. No entanto, a necessidade de suportar a fórmula de Bhaskara (com 3 parâmetros) exigiu uma solução mais flexível. O uso de Rest Parameters permitiu criar um "contrato" na classe abstrata capaz de aceitar um número variável de argumentos, unificando a chamada para todas as operações.

Referência: Parâmetros Rest (MDN Web Docs)

👤 Autor
BY João Moura.
