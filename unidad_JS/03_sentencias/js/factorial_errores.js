 function calcularFactorial(n) {
    if ( typeof n === 'undefined' ) {throw 0} // en caso de error enviamos el valor 0
    else if ( isNan(n/2) ) {throw 1}
    else if ( parseInt(n) !== parseFloat(n) ) {throw 2}
    else if ( n <= 0 ) {throw 3}
    else {
        let r = 1 // iniciamos la variable por 1 y no por 0 porque vamos a hacer una iteración y un producto de sus valores
        for (let i = n; i >= 1; i--) {
        r *= i;      
        }
        // TODO 'dejar algo por hacer para hacer búsquedas posteriores'
        if ( r == 1/0 ) {throw 4} // en el caso de resultado infinito
        else { return r }
    }
}

// test 

function test(n) {
    const ERROR_BASE = 'error '
    aErrores = [
        '0',
        '1',
        '2',
        '3',
        '4'
    ]
    let r
    try {
        r = calcularFactorial(n)
        console.log(r)       
    } catch (error) {
        console.log(ERROR_BASE + aErrores[error])
    }
}

function mostrarFactorial(n) {
    const ERROR_BASE = 'No puedo calcular el factorial de '
    aErrores = [
        'nada',
        'algo no numérico',
        'de cero o número no entero',
        'de un número negativo',
        'un número tan grande'
    ]
    try {
        let mensaje = `El factorial de ${n} es ${calcularFactorial(n)}` // se realiza el código y en caso de disparar un error pasa automáticamente al catch
        console.log(mensaje) // si no se dispara ninguna excepción o error
    } catch (error) {
        console.log (ERROR_BASE + aErrores[error]) // aquí error es la variable recibida con el throw
    }
 }

 test(4)
 //mostrarFactorial(6)

 // ver ejercicio finalizado por el prof en su guithub 'alce65'