'use strict'

/*
function mostrar() {
    var x = 23      // variable local, solo del ambito de la funcion
	console.log(x)
}

var x = 12      //variable de ámbito global
mostrar()
*/

function mostrar() {
    let x = 2 // variable let de uso local de la funcion
    {
        let x = 23 //variable let (solo en el ambito entre comillas) aqui las llaves simplemente definen un bloque
    }
    console.log(x)
}      // en ES6 existen variables 'let' y 'const' con ámbito (scope) el definido entre {}

let x = 12 // variable let global
mostrar()