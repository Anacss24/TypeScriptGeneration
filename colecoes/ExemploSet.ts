// Set não aceita elementos repetidos 
// Set não possui indice 

const frutas: Set<string> = new Set<string>();

frutas.add("Kiwi");
frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Caqui");

console.table(frutas);

// has = verifica se o elemento existe 
console.log(`\n A fruta Caqui existe? ${frutas.has("Caqui")}`);

// delete = deletar o elemento
frutas.delete("Caqui")

console.table(frutas)