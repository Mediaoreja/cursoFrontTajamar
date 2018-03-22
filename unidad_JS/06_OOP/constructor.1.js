
function Libro( titulo, autor, editorial, fecha, generos) { 
    this.titulo = titulo,
    this.autor = autor,
    this.editorial = editorial,
    this.fecha = fecha,
    this.generos = generos,
    this.mostrarReferencia = function() {
                                        let ref = this.autor +'. '
                                        ref += '"' + this.titulo + '" '
                                        ref += this.editorial + ', ' + this.fecha + '. '
                                        ref += this.generos + '.'
                                        console.log(ref)
                                    }
}

let libro1 = new Libro(
    'Die unendliche Geschichte',
    'Michael Ende',
    'Thienemann-Esslinger Verlag',
    new Date('1979'),
    ['Fantasia'])
    
console.log(libro1)

 let libro2 = new Libro(
                        'El Señor de los Anillos',
                        'J. R. R. Tolkien', 
                        'Minotauro', 
                        new Date('1954'), 
                        '[Fantasia]')

 console.log(libro2)
 console.log(libro2.constructor.name) // devuelve el nombre de la función constructora, en este caso 'Libro'

 // insertar métodos en un objeto se puede insertar en el constructor VER ARRIBA

libro2.mostrarReferencia()
