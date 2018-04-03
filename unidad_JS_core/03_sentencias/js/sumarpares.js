let aDatos = [23, 54, 65, 34, 78, 67]
let aDatos2 = [1, 2, 3, 4, 5, 6]


/*
function sumarPares(x) {
    let suma = 0
    for (let i = 0; i < x.length; i++) {        
        if ( isNaN(x[i]/2) ? -1 : x[i]%2 == 0 ) { 
            suma += x[i]
        }           
    }
    console.log(suma)  
}

function sumarImpares(x) {
    let suma = 0
    for (let i = 0; i < x.length; i++) {        
        if ( isNaN(x[i]/2) ? -1 : x[i]%2 == 1 ) { 
            suma += x[i]
        }           
    }
    console.log(suma)  
}

sumarPares(aDatos)
sumarImpares(aDatos)

*/

 

// OTRA MANERA MÁS PRO

// Recomendable reutilizar código: funciones ya programadas

// cada función solo debe cumplir una única tarea


function isPar(n) {
    return isNaN(n/2) ? -1 : n%2 // es recomendable comprobar IsNan() con una operación como argumento, en este caso dividir por 2, pero podría ser otro tipo de operación
}

function sumarPares(x) {
    // creamos un objeto con una propiedad y una segunda prop que es un array
    let data = {
        total : 0,
        parciales : []

    }
    for (let i = 0; i < x.length; i++) {     
        // convertir en un valor en booleano. Cuando un valor está entre parentesis directamente se evalúa y lo convierte en true o false, es decir 0 = false, 1 = true, -1 = true, etc.
        // 'not' delante invierte el valor booleano: false en true y viceversa.
        // el if delante dice: sí es true, haz el codifo entre llaves  
        if ( !isPar(x[i]) ) { 
            data.total += x[i]
            data.parciales[data.parciales.length] = x[i] // [data.parciales.length] es el número de psosición dek array donde queremos meter el dato x[i] de ese momento
        }           
    }
    return data
}

function verSumaPares(x) {
    let oResultados = sumarPares(x)
    for (let i = 0; i < oResultados.parciales.length; i++) {
        console.log(`El resultado parcial es ${oResultados.parciales[i]}`)
    }
    console.log('El resultado de la suma de pares es', oResultados.total)
}


verSumaPares(aDatos)
