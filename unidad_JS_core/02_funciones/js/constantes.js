'use strict'

/* function mostrar() {
    const X = 2
    {
        const X = 23
    }
    console.log(X)
}      

const X = 12 
mostrar() */

function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio
}

function mostrarCircunferencia(radio) {
    let cir = calcularCircunferencia(radio)
    console.log(`
    La circunferencia de radio ${radio} 
    tiene de longitud de perímetro ${cir}
    ` // cadena de texto o 'template strings' delimitado por acentos graves `` conserva saltos de linea. ${variable} sirve para mostrar la variable o funcion sin ningun tipo de concatenación con el texto
        
    )
}

mostrarCircunferencia(5)
