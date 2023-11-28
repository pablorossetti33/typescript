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

// functions type
const sayHiFromFunction = (fn: (name: string) => void) => {
   fn ("miguel")
}

const sayHi = (name: string) => {
   console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)


// Never
function throwError(message: string): never {
   throw new Error(message);
}

//Objetos
// let hero = {
//     name: "Thor",
//     age: 1500
// }

//Type alias

type Hero = {
    id?: number,
    name: string,
    age: number
}


 let hero: Hero = {
     name: "Thor",
     age: 1500
 }

 function createHero(name: string, age: number) : Hero {
       return {name, age}
 }

 const thor = createHero("Thor", 1500)

 //optional properties
 type Hero2 = {
    name: string,
    age: number,
    isActive? : boolean

}