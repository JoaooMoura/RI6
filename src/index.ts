import * as readline from 'readline';
import Calculo from './Calculo';
import Soma from './operacoes/Soma';
import Subtracao from './operacoes/Subtracao';
import Multiplicacao from './operacoes/Multiplicacao';
import Divisao from './operacoes/Divisao';
import Potenciacao from './operacoes/Potenciacao';
import Radiciacao from './operacoes/Radiciacao';
import Bhaskara from './operacoes/Bhaskara';

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta: string): Promise<string> {
  return new Promise(resolve => {
    leitor.question(pergunta, resolve);
  });
}

async function iniciarCalculadora() {
  console.clear(); 
  console.log('--- Calculadora - RI6 ---');


  while (true) {
    console.log(`
      Escolha a operação digitando o número:
      1 = Soma
      2 = Subtração
      3 = Multiplicação
      4 = Divisão
      5 = Potência (o 1º número elevado ao 2º)
      6 = Raiz (o 1º número é o índice, o 2º é o radicando)
      7 = Bhaskara (ax² + bx + c = 0)
      
      Digite 'sair' a qualquer momento para fechar.
    `);

    const escolhaOperacao = await perguntar('Qual operação você deseja? ');
    if (escolhaOperacao.toLowerCase() === 'sair') break;

    let calculo: Calculo;

    switch (escolhaOperacao) {
      case '1': calculo = new Soma(); break;
      case '2': calculo = new Subtracao(); break;
      case '3': calculo = new Multiplicacao(); break;
      case '4': calculo = new Divisao(); break;
      case '5': calculo = new Potenciacao(); break;
      case '6': calculo = new Radiciacao(); break;
      case '7': calculo = new Bhaskara(); break;
      default:
        console.log('Opção inválida, meu bem. Tente de novo.');
        continue; 
    }
    
  
    const numeros: number[] = [];
    if (escolhaOperacao === '7') { 
        console.log('Para Bhaskara (ax² + bx + c = 0), digite os valores de a, b e c.');
        const a = await perguntar('Digite o primeiro número (a): ');
        numeros.push(Number(a));
        const b = await perguntar('Digite o segundo número (b): ');
        numeros.push(Number(b));
        const c = await perguntar('Digite o terceiro número (c): ');
        numeros.push(Number(c));
    } else { 
        const num1 = await perguntar('Digite o primeiro número: ');
        numeros.push(Number(num1));
        const num2 = await perguntar('Digite o segundo número: ');
        numeros.push(Number(num2));
    }
    
    const resultado = calculo.calcular(...numeros);
    const resultadoFormatado = Array.isArray(resultado) ? `x1 e x2 são: [${resultado.join(', ')}]` : resultado;

    console.log('\n-----------------------------------');
    console.log(`O resultado é: ${resultadoFormatado}`);
    console.log('-----------------------------------\n');

    await perguntar('Para continuar dgite enter....');
  }
  leitor.close();
}

iniciarCalculadora();