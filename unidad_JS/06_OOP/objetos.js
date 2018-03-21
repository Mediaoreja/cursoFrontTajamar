// OOP (programacion orientada a objetos)

let oDatos = new Object() // funcion de constructor de objetos

let libro1 = {
    titulo : 'Die unendliche Geschichte',
    autor : 'Michael Ende',
    editorial : 'Thienemann-Esslinger Verlag',
    fecha : new Date('1979'),
    generos : ['Fantasia'],
    mostrarRef: function() {
        let ref = this.autor +'. '
        ref += '"' + this.titulo + '" '
        ref += this.editorial + ', ' + this.fecha + '. '
        ref += this.generos + '.'
    }
}

// los objetos son 100% dinamicos de asignacion de nuevas propiedades o modificaciones

// son siempre referencias
let libro2 = libro1
libro2.autor = 'Pepe'
// no son dos objetos, sino dos referencias a un mismo objeto, si modificamos uno cambia el otro
console.log(libro1)
libro1.autor = 'Michael Ende'
console.log(libro2)

libro1.mostrarRef()

///////////////////////////////////

// Patrones de invocacion de funciones

let miFuncion = function() {
    console.log('yo soy una función')
    console.log(this)
}

// Patrón de invocación Function
    // this indica 'el propio contexto de la funcion', por tanto es el objeto global del programa

// miFuncion() // al ejecutar, muestra el objeto global de node...


// Patrón de invocación Method
let o = {head: 'Soy un objeto',
        metodo: miFuncion} // ahora la funcion está en el ambito del objeto, por tanto this es el objeto donde reside la funcion

// o.metodo()

// Patrón de invocación Constructor
let MiFuncion = miFuncion
let oNuevoObjeto = new MiFuncion // genera un objeto nuevo a partir de una funcion, sirve para construir funciones constructoras de objetos
// las funciones constructoras comienzan por mayusculas


// Patrón de invocación Apply
// permite definir el valor de this

let obj = {head: 'Soy un objeto'}
miFuncion.call(obj) // la funcion llama a un objeto para que ejecute un afuncion cediendole su contexto
