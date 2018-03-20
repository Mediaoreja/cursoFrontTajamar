// PASO DE FUNCIONES DE UNA FUNCIÓN A OTRA

function calcularCuadrado(a) {
    a *= a
    return a
}

function calcularCubo(a) {
    a = a * a * a
    return a
}

/* function calcular(n, f) { // como parámetros un número y una funcion
    return f(n) // ejecuta la función f con el parámetro n
} */

function mostrarCalculo(n, f) {
    console.log(`El resultado es ${f(n)}`)
}

let n = 5

mostrarCalculo(n, calcularCuadrado) // se pasa el nombre solo, como objeto
mostrarCalculo(n, calcularCubo)
mostrarCalculo(n, function() { // uso de la función anónima
    return n * 2
})

function mostrarResultado1 (){
    console.log(calcularCubo(n))
}

setTimeout(function() {
    console.log(calcularCubo(n))
}, 2000) // retarda la ejecución de la función en milisegundos


// asincronia de setTimeout: se ejecuta el callback o primer parametro en el tiempo indicado pero sigue ejecutando el codigo sin parar el proceso

for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

let y = {nombre: 'Pepe'}
console.log(typeof mostrarResultado1) // devuelve el tipo 'function'

let nuevaFuncion = mostrarResultado1 // si hacemos un typeof no sdevuelve 'function'

nuevaFuncion() // invocamos la función asignada a la variable 'nuevaFuncion'

// let nuevaFuncion = mostrarResultado1() >> con parentesis estamos asignando a la variable el resultado de la funcion no estamos asignando una funciona  la variable


// ver archivo mas completo en github del profe
