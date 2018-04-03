// Ej 12a de los apuntes

// comentario tipo JSDoc
/** @function : comprobar si la cadena es :
 *  - todo mayúsculas (1)
 *  - todo minúsculas (2)
 *  - mezcla de ambas (0)
 * @param : string
 * @returns : number 
 */

function comprobarMayusculas(cadena = '') { // novedad de ES6 dando un valor por defecto al parametro y lo tipifica como string
    let r = 0
    if (cadena.toUpperCase() === cadena){
         // si true es que todo esta en mayusculas
         r = 1
    } else if (cadena.toLowerCase() === cadena) {
        // si true es que todo esta en minuscula
        r = 2
    } // la opcion mezcla no hace falta añadir con un else porque si no cumple 1 ni 2 es que es mexcla, 0
    return r
}

// faltaría la parte del control de errores


function mostrarComparacionmayusculas(cadena){
    let aMensajes = [
        'se mezclan mayúsculas y minúsculas',
        'todas las letras son mayúsculas',
        'todas las letras son minúsculas'
    ]
    let sMensaje = `En la frase "${cadena}" ${aMensajes[comprobarMayusculas(cadena)]}`
    console.log(sMensaje)
}

mostrarComparacionmayusculas('HOLA PEPE')
mostrarComparacionmayusculas('hola pepe')
mostrarComparacionmayusculas('Hola Pepe')