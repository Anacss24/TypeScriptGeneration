import { Queue } from "../interface/Queue";
import readlinesync = require("readline-sync");

let opcaoMenu: number;
let nome: string;

const fila = new Queue<string>();

do {
    console.log("\n ******** Banco Generation **********")
    console.log("\n 1 - Adicionar Cliente na Fila: ")
    console.log("\n 2 - Listar todos os Clientes: ")
    console.log("\n 3 - Retirar Cliente da Fila: ")
    console.log("\n 0 - Sair \n")

    opcaoMenu = readlinesync.questionFloat("\n Entre com a opcao desejada: ")

    switch (opcaoMenu) {
        case 1:
            nome = readlinesync.question("\n Digite o nome: ")
            fila.enqueue(nome)
            fila.printQueue();
            console.log("\n Cliente Adicionado! \n")
            break;
        case 2:
            console.log("\n Lista de Clientes na Fila: \n")
            fila.printQueue();
            break;
        case 3:
            if (fila.isEmpty()) {
                console.log("\n A Fila está vazia!")
            } else {
                console.log("\n Fila: \n")
                fila.dequeue();
                fila.printQueue();
                console.log("\n O cliente foi Chamado! \n")
            }
            break;
        case 0:
            console.log("\n Progama Finalizado!")
            break;
        default:
            console.log("\n Opção inválida!")
    }

} while (opcaoMenu !== 0);
