let aDatos = [2, 5, 7, 4, 9]
// un array se contempla como un objeto iterable (que se puede recorrer sus datos a través deñ bucle for)

let oDatos = {
    alto: 2,
    ancho: 5,
    largo: 7,
    peso: 4,
    color: 9
}
/* 
console.log('BUCLE FOR')
// la forma más común para iterar con objetos (array)
console.log('Array (con bucle for):')
for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i]; // crea una constante dentro de ambito enmarcado por lass llaves
    console.log(item)
} 
*/


/* // así funcionaría nuestro bucle for, donde la variable es constante dentro de cada bloque por tanto
    en el siguiente bloque puede reescribirse con un nuevo dato sin que de error; cada vuelta del bucle crea un bloque diferente
    {
    let i = 0
    const item = aDatos[i]
    console.log(item)   
    }
    {
    let i = 0
    const item = aDatos[i]
    console.log(item)   
    }
    {
    let i = 0
    const item = aDatos[i]
    console.log(item)   
    }
    {
    let i = 0
    const item = aDatos[i]
    console.log(item)   
    }
    {
    let i = 0
    const item = aDatos[i]
    console.log(item)   
    }
*/

/* 
console.log('BUCLE FOR in')
// la forma más común para iterar con objetos pero también funciona con arrays)
console.log('Objeto (con bucle for in):')
// bucle para oterar con un objeto
for (const key in oDatos) {
    const item = oDatos[key];
    console.log(key, item)
}

console.log('Array (con bucle for in):')
for (const i in aDatos) {
    const item = aDatos[i];
    console.log(i,item)
}

// bucle for of, para iterar con Arrays
// nuevo en ES6 para iterar con array, NO FUNCIONA con objetos
console.log('BUCLE FOR OF')
console.log('Array (con bucle for of):')
for (const iterator of aDatos) {
    console.log(iterator)
} 
*/


aDatos.forEach(function(item) {
    console.log(item)
}) // espera una funcion callback y es como ejecutarla como si fuera un bucle for; forEach itera con el array y realiza cada vuelta la funcion callback con el valor como parametro de dicha funcion callback

// lo mismo pero en codigo comprimido:
console.log('aDatos.forEach(item => console.log(item))')
aDatos.forEach(item => console.log(item))

console.log('aDatos.map()')// espera una función callback, devuelve el array despues de realizar las operaciones indicadas
// .map crea una proyeccion del original
let aCuadrados = aDatos.map(item => item*item) // mapea el array y ejecuta la funcion callback que en este caso multiplica el valor por si mismo en cada vuelta y lo devuelve como un nuevo array
console.log(aCuadrados)

let aPares = aDatos.filter(item => item%2 === 0) // con una funcion callback de tipo booleana si se cumple, guarda ese item en el array, si no, no
console.log(aPares)
 

// calcular cuadrados de impares
let aImparesCuadrados = aDatos.filter(item => item%2 !== 0).map(item => item*item)
console.log(aImparesCuadrados)

// método acumulador de los valores de un array
let total = aDatos.reduce((prev, item) => prev += item) // acumulador -> dos argumentos: valor previo y valor item), reduce el array a la suma o producto de los items... o lo que se le diga en la funcion callback
console.log(total)

// aDatos.reduceRight() similar a la anterior

// aDatos.every()
// aDatos.some()