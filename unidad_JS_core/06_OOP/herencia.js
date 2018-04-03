// ES6
// como buena practica las clases en singular y con Mayuscula la primera
// las bases de datos sí va en plural

class Persona {
    constructor(nombre, fecha, altura) {
        this.nombre = nombre
        this.fechaNacim = fecha
        this.altura = altura
    }

    // por convenio se indica con guion bajo los elementos privados
    _calcularAños() {
        let hoy = new Date()
        return parseInt((hoy - this.fechaNacim)/(1000*60*60*24*365))
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}, y tengo ${this._calcularAños()} años`)
    }
}

persona1 = new Persona('Jaime', new Date(1970, 3, 3), 1.60)
persona1.saludar()

// se crea la clase Alumnos -> 'hijo' que es extensión de Persona -> 'padre'
class Alumno extends Persona {
    constructor(nombre, fecha, altura, aula, equipo) {
        super(nombre, fecha, altura) // llamada al 'padre' en la primera linea del constructor nuevo con las variables que se le van a pasar como argumentos
        this.aula = aula
        this.equipo = equipo
    }
    saludar() {
        super.saludar() // llamamos a la funcion saludar del 'padre'
        console.log(`Soy del equipo ${this.equipo} y de la clase ${this.aula}`)
    }
}

alumno1 = new Alumno('Pepe', new Date(1995, 3, 3), 1.60, 'T22', 'Delta')
alumno1.saludar()