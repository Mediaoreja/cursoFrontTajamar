// resolución por el professor contrastar con su github, falta codigo

app.probarPalindromo = function() {
    cadena = cadena.toUpperCase().split(' ').join('')
    this.isPalindromo = (cadena !== cadena.split('').reverse().join('')) ? true : false
}

app.respuesta = function () {

}

function mostarResultado(r) {
    let mensaje = [
        'Es un palíndromo',
        'No es un palíndromo'
    ]
    console.log(mensaje[r])
}


app.main = function() {
    this.cadena = cadena
    this.probarPalindromo()
    this.respuesta()
}

let sFrase = 'En un lugar de la Mancha'
app.main(sFrase)

