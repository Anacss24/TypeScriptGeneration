import readlinesync = require("readline-sync");

 let numero1: number;
 let numero2: number;

 numero1 = readlinesync.questionFloat("Digite o primeiro numero: ");
 numero2 = readlinesync.questionFloat("Digite o segundo numero: ");


 console.log(`\n Soma: ${numero1} + ${numero2} = ${numero1 + numero2} `);
 console.log(`\n Subtração: ${numero1} - ${numero2} = ${numero1 - numero2} `);
 console.log(`\n Multiplicação: ${numero1} * ${numero2} = ${numero1  * numero2} `);
 console.log(`\n Divisão: ${numero1} / ${numero2} = ${numero1 / numero2}`);