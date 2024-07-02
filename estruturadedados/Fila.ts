import { Queue } from "../interface/Queue";


const fila = new Queue<number>();

for (let i = 1; i <= 10; i++){
   fila.enqueue(i)
}

console.log("\n Exibir todos os elementos da fila: ")

fila.printQueue();

console.log("\n Remover Elementos da fila: " + fila.dequeue())

fila.printQueue();

console.log("\n Exibir o Primeiro Elemento da fila: " + fila.peek())

console.log("\n Checar se o Elemento 1 existe na fila? " + fila.contains(1))

console.log("\n A fila está vazia? " + fila.isEmpty());
