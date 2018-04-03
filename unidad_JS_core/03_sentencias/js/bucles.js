//tambien llamados iteraciones

let aDatos = [23, 54, 65, 34, 78, 67]

console.log(aDatos)


// bucle for (se usan comunmente para iterar con los array) tienen tres sentencias independiente separadas por ;
// 1º un indice del iterador, una variable que hay que declarar e inicializar
// 2º hasta cuándo (contador) Con arrays el numero máx serían los valores del array
// 3º incremento de la variable

for ( let i = 0 ; i < 6 ; i++ ) {
    console.log('Hola, esta es la vuelta', i+1)
}

for ( let i = 6 ; i > 0 ; i-- ) {
    console.log('Hola (al revés) esta es la vuelta', i)
}

let total = 0
for (let i = 0; i < aDatos.length; i++) {

  total = total + aDatos[i]
  console.log('El parcial es', total)
    
}

console.log(`El total es ${total}`)

 total = 0
for (let i = aDatos.length-1; i >= 0; i--) {

  total = total + aDatos[i]
  
    
}

console.log(`El total al revés es ${total}`) 

