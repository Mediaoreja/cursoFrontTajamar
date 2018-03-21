// aDatos es uan INSTANCIA de Array
let aDatos = [1, 12, 67]

let aDatos2 = new Array(5) // funcion construcctora de un array, como parámetro la longitud

console.log(aDatos2.length)
console.log(aDatos2)

let aDatos3 = new Array(5, 23, 21, 5) // notación literal de new Array
console.log(aDatos3.length)
console.log(aDatos3)




let aLetras = ['T', 'R', 'W', 'Z', 'O', 'S']

console.log(aLetras.length)

// Metodos de Arrays

    // Inmutables

    console.log(aLetras.join('')) // no modifica el array
    console.log(aLetras)
    aLetrasClon = aLetras.slice(0,aLetras.length) // clonar un array porque extrae en una array nuevo desde la posición 0 hasta la posición (no inclusive) por eso si queremos extraer todo el array este parametro es el length de nuestro array


    // Mutables
    
    aLetras.sort() // ordena alfabeticamente y sobreescribe el array
    let aNuevo = aLetras.splice(0,2) // extrae en aNuevo la posiciones de 0, y el número de valores extraídos, y deja el resto en aLetras
   
    aLetras.push('Pepe', 'Manoli', 'Dolores') // añade un elemento al final del array
    aLetras.unshift('Loli') // añade elemento al principìo
    aLetras.pop() // quita el elemento ultimo
    aLetras.shift() // quita el elemento primero
   

   let aLetrasClon2 = aLetrasClon.slice(0,aLetrasClon.length)
    aLetrasClon2.reverse() // invierte los valores del array

    console.log(aLetras)
    console.log(aNuevo)
    console.log(aLetras) 
    console.log(aLetrasClon)
    console.log(aLetrasClon2)

    // más en https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia
    // https://stackoverflow.com/

    // también en español, aunque es más recomendable buscar referencias en inglés https://es.stackoverflow.com/
    

    


    

