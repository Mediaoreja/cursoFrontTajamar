function calcularCuadrado(a) {
    a *= a
    return a
}

// los parámetros elementales: strings, numbers, booleans, pasan por 'valor'
let a = 5
console.log(calcularCuadrado(a))
console.log(a)


// funcion errónea que al devolver params.valor los sustituye en el objeto y por tanto reescribe
function calcularCubo(params) {
    params.valor = params.valor * params.valor * params.valor
    return params.valor
}

// Los parámetros referencia pasan 'como si fueran' por referencia
// Es recomendable pasar un clon del objeto
params = {valor:5}
params2 = Object.assign({}, params); // se crea un clon de params en params2
console.log(calcularCubo(params2))
console.log(params)

// Otra manetra de hacer un clon con métodos JSON

let oUser = {nombre:'Pepe', apellido: 'Pérez'}
console.log(oUser)

let sUser = JSON.stringify(oUser) // Tranformar un objeto en String JSON (cadena de caracteres con forma de objeto), cuando queremnos enviar datos a un servidor que puede no es js
console.log(sUser)
oUser2 = JSON.parse(sUser) // convierte una String JSON en objeto
console.log(oUser2)

JSON.parse(JSON.stringify(params)) // realiza un clon por medio de ambos métodos JSON; también funciona con los array
