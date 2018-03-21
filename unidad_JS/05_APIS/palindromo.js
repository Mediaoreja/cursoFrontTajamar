// definir una función que determine si la cadena de texto que se le pase es un palíndromo

let cadena = ''

function comprobarPalindromo(cadena) {
    cadena = cadena.toUpperCase() // pasa todas a mayusculas
    let aCadena = cadena.split(' ') // convierte en array separando valores donde había antes espacios en blanco
    aCadena = aCadena.join('') // elimina espacios y convierte a cadena string
    aCadena = aCadena.split('')
    let aCadenaReves = aCadena.reverse() // aqui hay un error
    console.log(aCadenaReves.join(''))
    console.log(aCadena.join(''))
    let r = (aCadena.join('') == aCadenaReves.join('')) ? 0 : 1
    console.log(r)
    return r
}
console.log(comprobarPalindromo(cadena))

function mostarResultado(r) {
    let mensaje = [
        'Es un palíndromo',
        'No es un palíndromo'
    ]
    console.log(mensaje[r])
}
mostarResultado(comprobarPalindromo('En un lugar de la Mancha')) // no es palíndromo
mostarResultado(comprobarPalindromo('Dabale arroz a la zorra el abad'))
