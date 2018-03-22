// crear un constructor

function Libro( titulo, autor, editorial, fecha, generos) { // esta función crea variables en el entorno 'this'
    this.titulo = titulo, // como son variables van con = ; 'this' hace referencia al ambito donde se encuentre la funcion
    this.autor = autor,
    this.editorial = editorial,
    this.fecha = fecha,
    this.generos = generos
}

// creamos un objeto nuevo, donde 'this' ya es el ámbito del objeto, en este caso libro1 y crea las diferentes variables o métodos que tenga la funcion constructora Libro
let libro1 = new Libro(
    'Die unendliche Geschichte',
    'Michael Ende',
    'Thienemann-Esslinger Verlag',
    new Date('1979'),
    ['Fantasia']) // -> variable objeto array
    
console.log(libro1)
let libro_b = new Libro() // si no ponemos parámetros asigna undefined como valor a las variables del objeto creado
console.log(libro_b)

// como solucion a los undefined anteriores se le puede asignar al constructor un valor por defecto
/* function Libro( titulo = '', // asignando un valor por defecto
                    autor = '', 
                    editorial= '', 
                    fecha = new Date(0), 
                    generos = [] ) { // esta función crea variables en el entorno 'this'
    this.titulo = titulo, 
    this.autor = autor,
    this.editorial = editorial,
    this.fecha = fecha,
    this.generos = generos
} */
 let libro2 = new Libro(
                        'El Señor de los Anillos',
                        'J. R. R. Tolkien', 
                        'Minotauro', 
                        new Date('1954'), 
                        '[Fantasia]')
 console.log(libro2)

 // podemos asignar nuevas porpiedades al objeto nuevo
 libro2.propietario = 'Pepe'
 console.log(libro2)

