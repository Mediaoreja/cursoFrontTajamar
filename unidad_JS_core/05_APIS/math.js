// x.algo es una INSTANCIA de String
let x = 'Pepe'
x = x.toUpperCase() // es este momento x se convierte en una instancia del objeto String

// aDatos es uan INSTANCIA de Array
let aDatos = [1, 12, 67]

// Mayh no se puede INSTANCIAR

// let z = new Math() -- esto no realiza nada Math es on objeto global

Math.floor(34.98) // lo convierte a su suelo: 34
Math.ceil(34.98) // lo convierte en su techo: 35
Math.round(34.98) // redondea a partir de 0.5 a su techo, por debajo, su suelo

parseInt(34.98) // funcion global, transforma al suelo: 34

Math.random() // genera un número al azar, entre 0 y 1
parseInt(Math.random()*10) // devuelve números del 0 al 10
Math.pow(n,3) // potencia a cubo

