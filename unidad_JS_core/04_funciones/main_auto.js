function main(n) {

    function calcularCubo(a) {
        a = a * a * a
        return a
    }

    let mostrarResultado2 = function() {
        console.log(calcularCubo(n))
    }

    mostrarResultado2()
}

main(6)

// para crear una funcion autoinvocada basta envolver la funcion entre parentesis

/* (function main(n) {

    function calcularCubo(a) {
        a = a * a * a
        return a
    }

    let mostrarResultado2 = function() {
        console.log(calcularCubo(n))
    }

    mostrarResultado2()
}(6)) */

// 'clousure', estructura o patron que se suele utilizar en js. la funcion autoejecutable no necesita de nombre porque se autoinvoca
// la funcion se convierte en anónima pero hace lo mismo que las dos anteriores
// también llamado PATRON IIFE, inmediately-invoked function expression 

/* (function(n) {

    function calcularCubo(a) {
        a = a * a * a
        return a
    }

    let mostrarResultado2 = function() {
        console.log(calcularCubo(n))
    }

    mostrarResultado2()
}(6)) */


