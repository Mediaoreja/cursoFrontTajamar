'user strict'

/* Ejercicio: 
hacer una función que calcule si un numero dado es par o impar */

/* 
function comprobarPar(dato) {
    if (isNaN(dato)) {
        console.log(dato,'no es un numero')
    }
    else if ( dato % 2 == 0){
        console.log('el numero '+ dato +' es par')
    } else {
        console.log('el numero '+ dato +' es impar')
    }
}  
*/


// otra manera de hacer más profesional y con funciones puras

/* Función comprimida con un operador ternario que comprueba si el argumento es par o impar; devuelve -1 si el resultado isNaN es true; si es false devuelve el módulo de 2, es decir o 0 si es par o 1 si es impar. */
function comprobarPar(n) {
    return isNaN(n/2) ? -1 : n%2 // es recomendable comprobar IsNan() con una operación como argumento, en este caso dividir por 2, pero podría ser otro tipo de operación
}

/* Otra manera de escribir la función anterior, pero menos "Pro"

function comprobarPar(n) {
    let = 0
    if (isNaN(n/2)) {
        r = -1
    }
    else {
        r = n%2
    } 
    return r
}  
*/ 

/* función de testeo*/
function test(n) {
    console.log(comprobarPar(n))
}


/* la funcion comprobarPar devuelve un numero:0, 1 o -1; la función test muestra estos valores por consola*/ 
test(comprobarPar('pepe'))
test(comprobarPar('20'))
test(comprobarPar(24))
test(comprobarPar(17))
test(comprobarPar(0))



// función para convertir el resultado: 0, 1, -1, en tres mensajes diferentes. Por medio de un array mostraremos por consola el valor en cada posición del array: 0, 1 y 2. para ello el valor -1 hemops de convertiurlo en 2


function mostrarEsPar(n) {
    const aMensajes = [
        `El número ${n} es PAR`,
        `El número ${n} es IMPAR`,
        `El dato ${n} no es un número`
    ]
    // creamos variable r = al resultado de comprobarPar()
    // r es igual a 2 si el valor era -1
    let r = comprobarPar(n)
    r = ( r === -1 ) ? 2 : r
    // esto es lo mismo que if (r === -1) {r = 2}
    console.log(aMensajes[r])
}

mostrarEsPar('Pepe')
mostrarEsPar('12')
mostrarEsPar(24)
mostrarEsPar(17)
mostrarEsPar(0)


// más sobre este ejercicio en https://github.com/alce65/Front_Tajamar_2018


// Mostrar resultados con uso de switch
function mostrarEsParCasos(n) {
    // r puede valer 0 1 o -1
    let r = comprobarPar(n)
    let mensaje 
    switch (r) {
        case 0 :
        mensaje = `El número ${n} es PAR`
        break
        case 1 :
        mensaje = `El número ${n} es IMPAR`
        break
        case -1 :
        mensaje = `El dato ${n} no es un número`
        break
    }
    console.log(mensaje)
}

mostrarEsParCasos(10)
mostrarEsParCasos(11)
mostrarEsParCasos('pepe')
