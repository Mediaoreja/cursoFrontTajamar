// Funciones en ES6


// Función clasica asignada a una variable
let calcularCubo = function(a) {
    return a * a * a
}

// En ES6 tenemos las funciones 'arrow functions' asignadas a variables
// usando el simbolo 'fat-arrow' =>

let calcularCuboES6Ext = (a) => { return a * a * a } // formato extenso

let calcularCuboES6 = a => a * a * a  // abreviado si es un solo parámetro y si es solo una línea

// no pueden ser funciones construsctoras

let a = 12

setTimeout( function() {a = 12; a = a*a*a; console.log(a); return a }, 2000) // utilizando una funcion anonima
setTimeout( () => {a= 12; console.log(a * a * a)}, 3000) // utilizando un arrow
console.log(a) // se escribe esta linea antes de que se ejecute las dos anteriores, esto es la asincronia