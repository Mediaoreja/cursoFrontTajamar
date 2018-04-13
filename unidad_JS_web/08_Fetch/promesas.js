/// Ejemplo de funcionamiento de una pormesa /////

// Mock (-> maqueta, simulación para hacer pruebas) de una promesa
// crear numero aleatorio
// una pormesa hace cosa si es correcto resuelve la promesa, si es incorrecto rechaza la promesa
function asincP () {
    return new Promise(
        (resolve, reject) => {
           setTimeout(
               () => {
                   let number = Math.random()
                   if (number > 0.7) {
                       // correcto
                       resolve(number)
                   } else {
                       // incorrecto
                       reject(number)
                   }
               }, 3000
           )
        }
    )
}

asincP()
.then(
    (response) => { console.log(`Todo bien gracias al ${response}`) }, // recibe la respuesta de la funcion, en el resolve o en reject
    (response) => { console.log(`Error devido a ${response}`) }
)

/// también funcionaría de la siguiente manera /////

/* 
.then(
    (response) => { console.log(`Todo bien gracias al ${response}`) } 
)
.catch(
     (response) => { console.log(`Error devido a ${response}`) }
)
*/