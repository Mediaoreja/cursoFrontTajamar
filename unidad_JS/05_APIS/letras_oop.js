// trasformar el archivo letras.js en un 'objeto' o app

app = {
    cadena : '',
    aMensajes : [
        'se mezclan mayúsculas y minúsculas',
        'todas las letras son mayúsculas',
        'todas las letras son minúsculas'
    ],
    comprobarMayusculas : function () {
        let r = 0
        if (this.cadena.toUpperCase() === this.cadena){
             r = 1
        } else if (this.cadena.toLowerCase() === this.cadena) {
            r = 2
        }
        return r
    },
    mostrarComparacionmayusculas : function(){
    
        let sMensaje = `En la frase "${this.cadena}" ${this.aMensajes[this.comprobarMayusculas()]}`
        console.log(sMensaje)
    }
}

app.cadena = 'HOLA PEPE' // con esta orden insertamos un valor a la propiedad cadena del objeto app
app.mostrarComparacionmayusculas() // aquí ejecutamos el método (funcion) del objeto app
app.cadena = 'hola pepe'
app.mostrarComparacionmayusculas()

app.cadena = 'Hola Pepe'
app.mostrarComparacionmayusculas()
