/*
partiendo de un modelo real de datos, p.ej. un libro
'solo se pueden guardar datos en una variable'
para este tipo de datos múltiples, la variable indicada es el objeto

libro
    - titulo
    - autor 
    - editorial
    - fecha 
    - generos
*/


// Modelo de datos para un libro
{
    let libro = {
        titulo : '',
        autor : '',
        editorial : '',
        fecha : 0,
        generos : [] // creamos un array para guardar diversos valores en la misma propiedad
    }   //dejando los valores a cero constituye una plantilla
    
    let libro3 = Object.create(libro) // crea un objeto nuevo a partir de la plantilla libro con las consiguientes propiedades
    
    libro3.titulo = 'Die unendliche Geschichte'
    libro3.autor = 'Michael Ende'
    libro3.editorial = 'Thienemann-Esslinger Verlag'
    libro3.fecha = '1979'
    libro3.generos = ['Fantasia']
    
    console.log(libro3)
}
{
    let libro1 = {
        titulo : 'Die unendliche Geschichte',
        autor : 'Michael Ende',
        editorial : 'Thienemann-Esslinger Verlag ',
        fecha : 1979,
        generos : ['Fantasia']
    
    }
    
    let libro2 = {
        titulo : 'Nigromante',
        autor : 'William Gibson',
        editorial : 'Minotauro',
        fecha : 1982,
        primera_edicion : { // objeto dentro de un objeto
            editorial : 'Acme',
            fecha : 1980
            },
        generos : ['SciFi', 'CyberPunk']
    
    }
    
    libro1.personajes = [] // se puede añadir en cualquier momento nuevos atributos de cualquier tipo: string, number, objet, array

    // mas adelante conoceremos maneras de limitar esta plasticidad para no reescribir atributos y valores.

  /*   console.log(libro2)
    console.log(`El autor es ${libro2.autor}`) // el punto tras el nombre del objeto me referencia a uno de sus atributos
    console.log(typeof libro2.autor)
    console.log(libro2.fecha)
    console.log(typeof libro2.fecha)
    console.log(libro2.generos)
    console.log(typeof libro2.generos)
    console.log(libro2.generos[0]) // para hacer referencia a una posición cocreta del array
    console.log(typeof libro2.generos[0])
    console.log(libro2.primera_edicion.editorial)
    console.log(typeof libro2.primera_edicion.editorial) // hace ref. a un atributo del objeto primera_deicion que es un atributo del objeto libro2
    console.log(libro1) */
    
    // Procesar datos: recorrer los datos y hacer algo con ellos

    // para recorrer un array se usa el bucle 'for'; no recomendable para recorrer un objeto, para ello se utiliza el bucle 'for in'

    for (const key in libro1) { // que recorra el objeto libro1 y guarde en la variable key las diferentes propiedades
        console.log(`La atributo clave "${key}" del libro 1 es igual a`, libro1[key]);
        
    }
}




