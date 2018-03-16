let nombre = 'Pepe' //variable tipo string
let edad = 23 // var tipo number
let isCasado = false // tipo boolean
let algo // tipo undefined
let nulo = null // tipo object pero undefined

let user = {
    nombre : 'Pepe',
    apellido : 'Perez',
    edad : 23,
    direccion : {
        calle : '',
        ciudad : '',
        c_postal : ''
    }, // objeto literal JSON dentro como porpiedad de otro objeto literal JSON
    isCasado : false
} // declaración de una variable objeto en JSON (JavaScript Object Notation)


//con typeof (operador que devuelve el tipo de la variable)

console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof isCasado)
console.log(typeof algo)
console.log(typeof nulo)
console.log(typeof user)

console.log(user) // muestra el contenido de la var tipo object

console.log(user.nombre) // muestra el valor de la variable nombre del objeto

user.cargo = 'CEO' // incorpora en el objeto una propiedad nueva en el objeto

console.log(user) // muestra el contenido de la var tipo object