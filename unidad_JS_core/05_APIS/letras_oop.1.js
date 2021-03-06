// app del ejemplo de  letras_oop.js pero más depurado

(function() {
    appMayusculas = {
        cadena : '',
        codigo: 0,
        aMensajes : [
            'se mezclan mayúsculas y minúsculas',
            'todas las letras son mayúsculas',
            'todas las letras son minúsculas'
        ],
        aCadenas : [
            'HOLA PEPE',
            'hola pepe',
            'Hola Pepe'
        ],
        comprobar : function() {
            if (this.cadena.toUpperCase() === this.cadena){
                 this.codigo = 1
            } else if (this.cadena.toLowerCase() === this.cadena) {
                this.codigo = 2
            } else {
                this.codigo = 0
            }
        },
        mostrar : function(){
            this.comprobar()
            let sMensaje = `En la frase "${this.cadena}" ${this.aMensajes[this.codigo]}`
            console.log(sMensaje)
        },
        
        probar : function() {
            for (let i = 0; i < this.aCadenas.length; i++) {
                    this.cadena = this.aCadenas[i];
                    this.mostrar();
             }
        }
    }
    
})()

appMayusculas.probar()