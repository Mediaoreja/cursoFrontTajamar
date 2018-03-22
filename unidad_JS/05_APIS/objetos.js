// Definición de objeto en JS: TODO
// Agrupación de un conjunto de propiedades

let libro1 = {
    titulo : 'Die unendliche Geschichte',
    autor : 'Michael Ende',
    editorial : 'Thienemann-Esslinger Verlag',
    fecha : 1979,
    generos : ['Fantasia']
}

let mostrarReferencia = function(obj){ 
    let ref = obj.autor + '. '
    ref += '"' + obj.titulo + '". '
    ref += obj.editorial + ', ' + obj.fecha + '. '
    console.log(ref)
}
//mostrarReferencia(libro1)


// Método: funcion anonima que se añade a una propiedad de un objeto determinado
// atributos serían las propiedades de los objetos y métodos, las propiedades que son funciones
let libro2 = {
    titulo : 'El Señor de los Anillos',
    autor : 'J. R. R. Tolkien',
    editorial : 'Minotauro',
    fecha : 1954,
    generos : ['Fantasia'],
    mostrarReferencia:  function(){  // esta linea se puede escribir en ES6 mostrarReferencia() {...}
                        let ref = this.autor + '. '
                        ref += '"' + this.titulo + '". '
                        ref += this.editorial + ', ' + this.fecha + '. '
                        console.log(ref)
                        }
}

libro2.mostrarReferencia() // enfoque orientado a objetos aplicado a JS

let x = 'Pepe'

console.log(isNaN(x)) // devuelve true porque 'pepe' es un NaN

// Wraper objects o 'objetos envolventes': Métodos de objetos'
console.log(x.toUpperCase()) // convierte temporalmente la variable tipo string para manipularlos como objetos de manera que se revierte una vez finalizada la funcion sobre ellos
console.log(x.length) // es el unico que no es un metodo, sino un calculo de un atributo y no necesita de los ()

let sFrase = 'Un anillo, para gobernarlos, a todos'

aDatos = sFrase.split(', ') // corta una cadena separando los elementos de la cadena que estan separados por los caracteres indicados como atributo del método y lo convierte en los valores de un array
console.log(aDatos)

let nuevaFrase = aDatos.join(' ') // recompone en una sola cadena los valores de un array separando por lo indicado en su argumento
console.log(nuevaFrase)