let aDatos = [23, 54, 65, 34, 78, 67]
let aDatos2 = [1, 2, 3, 4, 5, 6]

function sumarPares(x) {
    let suma = 0
    for (let i = 0; i < x.length; i++) {
        if ( isNaN(x[i]/2) ? -1 : x[i]%2 == 0 ) { 
            suma += x[i]
        }      
    }
        console.log(suma)  
}

function sumarImpares(x) {
    let suma = 0
    for (let i = 0; i < x.length; i++) {        
        if ( isNaN(x[i]/2) ? -1 : x[i]%2 == 1 ) { 
            suma += x[i]
        }           
    }
    console.log(suma)  
}

sumarPares(aDatos)
sumarImpares(aDatos)
