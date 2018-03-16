let user = {
    nombre : 'Pepe',
    apellido : 'Perez',
    edad : 23,
    direccion : {
        calle : 'Calle Benavente, 30',
        ciudad : 'Madrid',
        c_postal : '28006'
    } ,
    isCasado : false
} 

console.log(typeof user)
console.log(user) // muestra el contenido de la var tipo object
console.log(user.nombre) // muestra el valor de la variable nombre del objeto
user.cargo = 'CEO' // incorpora en el objeto una propiedad nueva en el objeto
console.log(user) // muestra el contenido de la var tipo object

// una forma de proteger el objeto para que no se redefina como una variable tipo let es mejor guardar el objeto en una const
const user2 = {
    nombre : 'Pepe',
    apellido : 'Perez',
    edad : 23,
    direccion : {
        calle : 'Calle Benavente, 30',
        ciudad : 'Madrid',
        c_postal : '28006'
    } ,
    isCasado : false
} 

console.log(typeof user2)
console.log(user2) // muestra el contenido de la var tipo object
console.log(user2.nombre) // muestra el valor de la variable nombre del objeto
user2.cargo = 'CEO' // incorpora en el objeto una propiedad nueva en el objeto
user2.nombre = 'Victor' // incorpora en el objeto una propiedad nueva en el objeto
console.log(user2) // muestra el contenido de la var tipo object

/*

// si intentas reasignar un valor al objeto constante de deja definir y redefinir sus atributos pero no eliminar el objeto por un valor elemental
user = 2
user2 = 2 // da un error que user2 no puede ser 2 porque es un objeto constante
console.log(typeof user)
console.log(user)
console.log(typeof user2)
console.log(user2)

*/

// Otros objetos

// Array

let m = [] // con solo escribir x = [] estamos diciendo que la variable es un objeto array
let n = {}  // con solo indicar llaver estamos marcando a la var con el tipo objeto

let aDatos = [12, 23, 45, 45, 87] 
let aDatosChungo = [12, 'pepe', true, null, undefined] // solo como ejemplo, esto no es normal tener un array de elementos combinados pero se puede. tambien se puede añadir un objeto en JSON
console.log(aDatos)
console.log(aDatos[1]) // para que muestre el dato en la posición 1 del array (siempre empieza en 0)
aDatos[15] = 30 // se añade el nuevo valor en la posición 30 aunque del 10 al 29 aparecen como perdidos
console.log(aDatos)

let aUsuarios = [
    {nombre : 'Pepe',
    apellido : 'Perez',
    edad : 23,
    direccion : {
        calle : 'Calle Benavente, 30',
        ciudad : 'Madrid',
        c_postal : '28006'
    } ,
    isCasado : false},
    {nombre : 'federico',
    apellido : 'Suarez',
    edad : 53,
    direccion : {
        calle : '',
        ciudad : '',
        c_postal : ''
    } ,
    isCasado : true,
    aficiones : ['deporte', 'papiroflexia'] }//array dentro de un objeto,
   
]       // notación JSON de un array de objetos

console.log(typeof aUsuarios) // solo dice que es un objeto pero no podemos saber si es un array
console.log(Array.isArray(aUsuarios)) // funcion para saber si es un array devuelve true porque es un array

// String
// Number
// Boolean

// Function, Method, Constructor

// Date
let fecha = new Date() // para guardar fechas
let exp = new RegExp() // para guardar expresiones regulares
let error = new Error() // para guardar objetos de tipo error


// Objetos estáticos 

// Math familia de objetos que no se puede instanciar
Math.cos(90)

// JSON familia de objetos JSON
/* JSON.parse() */