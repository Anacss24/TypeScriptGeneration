import readlinesync = require("readline-sync");

// Alterar os dados da constante, por meio de metodos de um objeto.
const numeros: Array<number> = new Array<number>();

numeros.push(7);
numeros.push(5);
numeros.push(1);
numeros.push(7);

// push somente um número por vez
numeros.push(readlinesync.questionFloat("Digite um numero: "));

// unshift inserir varios dados de uma vez no inicio do array  
numeros.unshift(2.5, 3.6, 8)

console.log(numeros);
// somente um instrução não precisa da chave
// for-of é exclusivo para estrutura de dados 
for(let numero of numeros)
    console.log(numero);

// indexOf retorna a posição 
console.log(`\n A posicao do elemento 5 é ${numeros.indexOf(5)}`);
console.log(`\n A posicao do elemento 50 é ${numeros.indexOf(50)}`);
//Para os números repetidos, traz somente o primeiro elemento 
console.log(`\n A posicao do elemento 7 é ${numeros.indexOf(7)}`);

// includes = metodo para para verificar se o elemento existe
console.log(`\n Existe no Array o elemento 5? ${numeros.includes(5)}`);

// Alterar o numero 5 por numero 10
numeros[numeros.indexOf(5)] = 10

console.table(numeros)

// Excluir elemento
numeros.splice(numeros.indexOf(10), 1);

console.table(numeros)