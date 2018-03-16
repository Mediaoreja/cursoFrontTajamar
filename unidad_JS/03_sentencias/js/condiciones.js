/*
if ( 1 ) {}
else {}

if ( 1 ) {} // si se cumple la condicion primera
else if ( 2 ) {} // si no, se si cumple la segunda que ejecute el codigo entre llaves
else if ( 3 ) {} // si no, si se cumple la tercera que ejecute el codigo entre llaves (tantas veces como se quiera)
else {} // si no, que ejecute el codigo entre llaves
*/

let userPepe = {
    nombre : 'Pepe',
    apellido : 'Perez',
    edad : 17,
    direccion : {
        calle : 'Calle Benavente, 30',
        ciudad : 'Madrid',
        c_postal : '28006'
    } ,
    isCasado : false,
    genero : 'H'
} 

let userMaria = {
    nombre : 'María',
    apellido : 'Perez',
    edad : 27,
    direccion : {
        calle : 'Calle Benavente, 30',
        ciudad : 'Madrid',
        c_postal : '28006'
    } ,
    isCasado : true,
    genero : 'M'
}

const MAYORIAEDAD = 18 // EN MAYUSCULAS PORQUE es una constante

function crearSaludo(user) {
    let mensaje = 'Hola '
    if ( user.edad >= MAYORIAEDAD && user.genero == 'H' ) {
        mensaje += 'D. '
    } else if ( user.edad >= MAYORIAEDAD && user.genero == 'M' ) {
        mensaje += 'Dña. '
    }
    mensaje += user.nombre
    if ( user.isCasado ) {
        if (user.genero == 'M') {
            mensaje += '. Saludos a tu marido'  // vamos sumando a la var mensaje más elementos
        }
        else {
            mensaje += '. Saludos a tu mujer' 
        }
    }
    return (mensaje) // devuelve el mensaje completo
}

function saludar(usuario) {
    console.log(crearSaludo(usuario)) // muestra por consola lo que recoje la funcion como return
}

function saludarHtml(usuario) {
    document.write(crearSaludo(usuario)+'<br>') // muestra por html lo que recoje la funcion como return
}

saludar(userMaria)
saludar(userPepe)

saludarHtml(userMaria)
saludarHtml(userPepe)