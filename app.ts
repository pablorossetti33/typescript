// Inferencia:
// como a y b infieren que son number sin decir nada
const a = 1;
const b = 2;
const c = a + b
// c tambien sera number.

//functions

function saludar ({name , age}: {name: string, age: number}) {
    console.log(`Hola ${name} tienes ${age} años`)
}

saludar({name: "Pepe", age: 25})
