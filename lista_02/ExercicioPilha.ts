import { Stack } from "../interface/Stack";
import readlinesycn = require("readline-sync");

const pilha = new Stack<string>();

let opcaoMenu: number;
let nome: string;

do {
    console.log("\n *********** Livraria Generation **********")
    console.log("\n 1- Adicionar Livro na pilha ")
    console.log("\n 2- Listar todos os Livros ")
    console.log("\n 3- Retirar Livro da pilha ")
    console.log("\n 0- Sair \n ")

    opcaoMenu = readlinesycn.questionFloat("Entre com a opcao desejada: ")
    switch (opcaoMenu) {
        case 1:
            nome = readlinesycn.question("\n Digite o nome do livro: ")
            pilha.push(nome)
            pilha.printStack();
            console.log("\n Livro adicionado!")
            break;
        case 2:
            console.log("\n Lista de Livros na Pilha: \n")
            pilha.printStack();
            break;
            case 3:
                if (pilha.isEmpty()) {
                    console.log("\n A Pilha está vazia!")
                } else {
                    console.log("\n Pilha: \n")
                    pilha.pop();
                    pilha.printStack();
                    console.log("\n Um Livro foi retirado da pilha! \n")
                }
                break;
            case 0:
                console.log("\n Progama Finalizado!")
                break;
    }

} while (opcaoMenu !== 0)
