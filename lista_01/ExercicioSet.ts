import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

let numeroEncontrado;

numeroEncontrado = readlinesync.questionFloat("Digite o numero que voce deseja encontrar: ")

if(numeros.has(numeroEncontrado)){
    console.log(`O número ${numeroEncontrado} foi encontrado! `)
}else{
    console.log(`O número ${numeroEncontrado} não foi encontrado! `)
}

  
