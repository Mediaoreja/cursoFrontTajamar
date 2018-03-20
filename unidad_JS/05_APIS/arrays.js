// aDatos es uan INSTANCIA de Array
let aDatos = [1, 12, 67]

let aDatos2 = new Array(5) // funcion construcctora de un array, como parámetro la longitud

console.log(aDatos2.length)
console.log(aDatos2)

let aDatos3 = new Array(5, 23, 21, 5) // notación literal de new Array
console.log(aDatos3.length)
console.log(aDatos3)




let aLetras = ['T', 'R', 'W']

console.log(aLetras.length)

// Metodos de Arrays

    // Inmutables

    console.log(aLetras.join('')) // no modifica el array
    console.log(aLetras)
    aLetrasClon = aLetras.slice(0,aLetras.length-1) // clonar un array 


    // Mutables
    
    aLetras.sort() // ordena alfabeticamente y sobreescribe el array
    let aNuevo = aLetras.splice(0,2) // extrae en aNuevo la posiciones de 0, dos valores, y deja el resto en aLetras
   
    aLetras.push('Pepe', 'Manoli') // añade un elemento al final del array
    aLetras.unshift('Loli') // añade elemento al principìo
    aLetras.pop() // quita el elemento ultimo
    aLetras.shift() // quita el elemento primero


    console.log(aLetras)
    console.log(aLetrasClon)
    console.log(aNuevo)
    console.log(aLetras)
    

    


    

