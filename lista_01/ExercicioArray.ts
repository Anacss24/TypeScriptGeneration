import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>();

cores.push(readlinesync.question("Digite a primeira cor: "))
cores.push(readlinesync.question("Digite a segunda cor: "))
cores.push(readlinesync.question("Digite a terceira cor: "))
cores.push(readlinesync.question("Digite a quarta cor: "))
cores.push(readlinesync.question("Digite a quinta cor: "))

cores.sort();

for( let cor of cores){
    console.log(cor)
   
}    
   