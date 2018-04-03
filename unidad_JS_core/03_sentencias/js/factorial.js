'use strict'
// realizar un factorial de un número dado

function factorial(n) {
    let total = n
    for (let i = n-1; i > 0; i--) {
    total *= i;
    }
    return total
}

function mostrarFactorial(x) {
    console.log('El factorial de '+ x +' es '+ factorial(x))
}




mostrarFactorial(1)
mostrarFactorial(2)
mostrarFactorial(3)
mostrarFactorial(4)
mostrarFactorial(5)
mostrarFactorial(6)
mostrarFactorial(7)
mostrarFactorial(8)
mostrarFactorial(9)
mostrarFactorial(10)


