function main() {

    function calcularCubo(a) {
        a = a * a * a
        return a
    }

    let n = 6
    let mostrarResultado2 = function() {
        console.log(calcularCubo(n))
    }
    console.log(typeof n)
    console.log(typeof mostrarResultado2)

    mostrarResultado2()

    return calcularCubo // devuelve la funcion, no el resultado
}

console.log(main()) // muestra por consola la ejecución de la función main. Al final nos envía además la función que hemos indicado en return
console.log(main()(3)) // recibe la función y sobre ella ejecutarla con el nuevo parámetro

let f = main()
console.log(typeof f)
console.log(f(4)) // muestra el resultado de la funcion main conel parametro 4

// esto se llama encapsular una función y poder utilizar una función que se ha creado dentro de otra función si la devolvemos al exterior a través de un retun y el nombre de la funcion SIN PARENTESIS