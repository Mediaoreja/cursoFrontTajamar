// asignación =

let x = 25 // expresión de asignación
console.log(x)  // instrucción que implica que tiene un efecto colateral (side effect)



// incremento
x++ // esto es igual a 'x = x + 1'
console.log(x)

// decremento

x-- // esto es 'x = x - 1'
console.log(x)

// diferencia de funcionamiento si ++x o x++

let z = x++ // se aplica la igualación y luego se incrementa 
console.log(z)
console.log(x)

z = ++x // se aplica el incremento y luego la igualación
console.log(z)
console.log(x)

// operadores aritméticos

x = 27
y = parseInt ( x / 5 ) // numero entero de dividir 27 entre 5
console.log(y)

let r = x % 5 // modulo '%' es decir el resto de dividir 27 entre 5
console.log(r)

y = x / 5   // división
console.log(y)

// operadores de asignación aritmética
x = 12
x += 4 // esto es igual a 'x = x + 4' tambien vale para '*=' o' -='
console.log(x)

y = 12
y *= 3 // 'y = y * 3'
console.log(y)

// operadores relacionales: siempre nos dan un valor booleano
x = 12
y = '12'
console.log(x == y) // expesion relacional de igualdad 'devil' como el sistema puede hacer un casting auto la igualdad se cumple por tanto devuyelve 'true'
console.log(x === y) // identicos o igualdad fuerte, devuelve 'false' porque no se cumple. ¡¡¡ recomendable!!!! cuando se desea conocer igualdad, identicidad
console.log(x != y) // '!' significa 'not', no es igual a'
console.log(x !== y) // 'no es identico a'

if (x) {
    console.log( 'estoy dentro del if')
} // con solo poner if se hace una validación booleana: si la variable es 0 o diferente a 0
// Como x = 12, cualquier valor que no sea 0 devuelve siempre true, por tanto para saber si un numero es mayor de cero se suele poner solo if(x)

console.log(!x) // devuelve false por que sería como decir 'not 12', 'not true'; 12 es true porque no es cero.
console.log(!!x) // devuelve true porque es 'not false'

x = 'abc'
y = 'def'
console.log(x < y) // devuelve true porque a es menor alfabéticamente
console.log(x.length === y.length) // true porque ambas variables tienen el mismo numero de caracteres


// operador ternario

// expresión ? true : false
let edad = 12
console.log(edad > 30 ? 'Buenos días' : 'Hola chaval') // si es true escribe 'buenos dias'; si es false 'hola chaval' es como un if else sencillo