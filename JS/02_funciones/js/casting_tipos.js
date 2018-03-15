function main() {
    let num1 = 23
    let num2 = '20'

    let r = num1 - num2 // en otros lenguajes daría error y se tendría que convertir la var de tipo string a number (casting)

    console.log(r)  // JS aplica automaticamente un casting a la var tipo string para convertirla en number solo para esta operación
    console.log(typeof r) //muestra el tipo de var r, number
    console.log(typeof num2)

    r = num1 + num2 // al ser el operador de concatenar el simbolo +, JS convierte la var numerica en string y concatena ambas cadenas de caracteres, y no al contrario porque la concatenación prevalece a la suma
    console.log(r)
    console.log(typeof r) // muestra que el tipo de r es string

    // el signo + tiene tres significados: el de numero positivo, el de suma y el de concatenación

    // para forzar el casting de un string a number usaremos la funcion

    r = num1 + Number(num2)
    console.log(r)
    console.log(typeof r)

    //otra manera de forzar el casting

    r = num1 + +num2 // colocando el simbolo + pegado a la variable string que queremos cambiar
    console.log(r)
    console.log(typeof r)

    // esto solo ocurre con la suma que primero concatena, pero una operación matematica posterior la convertiría en numerica pudiendo acarrear un dato erróneo

    r = num1 + num2 // aqui concatena = 2320
    r = r - 1 // aqui resta a 2320 - 1 = 2319
    console.log(r)
    console.log(typeof r)

    // este problema de casting automatico y de posible error se evita con el lenguaje typescript

    let x = 'Hola'

    r = num1 - x // da de resultado 'numero indeterminado' o NaN
    console.log(r)
    console.log(typeof r)
    console.log(isNaN(r)) //isNaN() funcion booleana, casi todas las funciones que empiezan por is son funciones booleanas
    if (isNaN(r)) {
        console.log('Ole, has conseguido un NaN')
    }

    r = 1 / 0 // da de resultado 'infinito' no NaN
    console.log(r)
    console.log(typeof r)
    console.log(isNaN(r)) 
    if (isNaN(r)) {
        console.log('Ole, has conseguido un NaN') // no muestra nada porque infinito no es NaN
    }

}

main()
