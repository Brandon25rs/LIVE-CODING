// Escribe tu código aquí.

console.log("hola");
const myArray = ["León",
 "Perro",
 "Gato", 
 "Delfín",
"Pájaro", 
"Coyote", 
"Mariposa",
"Orangutan",
"Pez",
"Mono"];
const bigWords=("Elmo");

ComparaPalabras();

function ComparaPalabras() {

const newArray = myArray.filter(palabra=> palabra.length > bigWords.length);

console.log(newArray);

}