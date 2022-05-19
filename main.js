// function saludar (nombre){
//     console.log(nombre);
// }

// saludar("jonathan")

//Declaracion de la funcion.
//Donde describes lo que hace la funcion, como se llama y que recibe.

function saludar(nombre){
    return `hola ${nombre}, saludos`;
}

//Invocacion de la funcion (madandar llamar, ejecutar, usar)
const saludo = saludar("Jonathan");
console.log(saludo);

//Solo se cambia el parametro de la funcion

const saludo2 = saludar("Nancy");
console.log(saludo2);
//El tipo de hola es funcion y el tipo  de hola ("") es el valor de retorno
console.log(typeof saludar ("oscar"));
console.log(typeof saludar);

// funcion guarda referencia de la funcion hola
const funcion = saludar;
console.log(funcion("jose"));
console.log(funcion("juan"));
