// Función: un objeto que puede contener un bloque de código comprendido entre llaves que se ejecuta cuando se la invoca
// Maneras de crearlas: mediante 'declaración' o por 'asignación'
// Por 'declaración' tiene 'hiting', por asignación NO
// hiting: 'alzamiento' de funciones, que se ejecutan aunque estén declaradas despues de invocarlas

// declaración de la función
// tienen hiting
function mostrar(n) {
    console.log(`Me han pasado ${n}`)
}

//invocación de la función
mostrar('Pepe')

// crear función a partir del constructor aunque no se suele hacer así en la practica

/* var suma = new Function('a', 'b', 'return a+b')
var x = new Object()
var aDatos = new Array() */

// Función === Objeto
// función anónima
// Assignación de la función a una variable
// la función es una variable y ha de estar definida antes de invocarlas
let mostrarVariable = function(n) { console.log(`Me han pasado ${n}`)}

// invocar función
mostrarVariable('Juan')