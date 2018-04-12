// un fichero para cada clase individual
// al iniciar una clase con export creamos un módulo
// en el constructor solo deberían inicializarse variables o propiedades y manejadores d eventos. Pero bien estructurada es mejor hacer funciones y en el constructor
import { CURSOS } from './cursos.js'

export class Formulario {

    constructor() {

        // creamos el modelo de datos
        this.datos = {
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            fechaNacimiento: '',
            datos: '',
            isOk: false, // no marcados por defecto
            isOk2: false, // no marcados por defecto
            turno: '',
            curso: '',
            asignaturas: ''
        }

        this.cursoFront = [
            
            'Html5',
            'Css3',
            'ES6']

        this.cursoWeb = [
            
            'Photoshop',
            'Indesign',
            'Illustrator'
        ]
        this.cursoServidores = [
            
            'Node',
            'Php',
            '.Net'
        ]
        this.cursoBasesDatos = [
            
            'Mongo',
            'SQL',
            'JAVA'
        ]

        this.accederDom()
        this.definirManejadores()
    }

    accederDom() {
        // creamos las variables/propiedades de los elementos a lo que queremos acceder
        this.domFormulario = document.querySelector('form')
        this.domBtnSaludar = document.querySelector('#btnSaludar')
        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpEmail = document.querySelector('#email')
        this.domInpPassword = document.querySelector('#password')
        this.domAreaDatos = document.querySelector('#datos')
        this.domRadioTurno = document.querySelectorAll('[name="turno"]') // recogemos elementos con el atributo name
        this.domChIsOk = document.querySelector('#isOk')
        this.domChIsOk2 = document.querySelector('#isOk2')
        this.domSelectCurso = document.querySelector('#curso')
        this.domDivResultados = document.querySelector('#resultados')
        this.domFieldAcademic = document.querySelector('#academic')
        this.domSelectorCursos = document.querySelector('#selectorCursos')
        this.domSelectorAsignaturas = document.querySelector('#selectorAsignaturas')
        this.domInpFecha = document.querySelector('#fecha')
  
        
    }

    definirManejadores() {
        this.domBtnSaludar.addEventListener('click', this.saludar.bind(this)) // nos aseguramos con .bind(this) que el elemento this es el objeto Formulario
        this.domFormulario.addEventListener('submit', this.enviar.bind(this)) // evento 'submit' propio del objeto formulario que se lanza una vez de ha validado
        //this.domBtnBorrar.addEventListener('click', this.borrar.bind(this)) // para borrar ya existe un evento 'clear' propio del objeto formulario
        this.domChIsOk.addEventListener('change', this.completar.bind(this)) // se dispara el evento al chekear las condiciones
        this.domSelectCurso.addEventListener('change', this.mostrarAsignaturas.bind(this))

    }

    saludar() {
        console.log('hola amigos')
    }

    enviar(ev) {
        this._recogerDatos() // con el guión declaramos la función de entorno privado
        this.presentarDatos()
        ev.preventDefault() // anulamos el envío real en este ejemplo ya que no vamos a enviar a un servidor real
        

    }

    borrar() { }

    completar() {
        this.domFieldAcademic.disabled = !this.domFieldAcademic.disabled // convierte la propiuedad disabled en su contrario
        this.domFieldAcademic.classList.toggle('hidden')
        if (this.domFieldAcademic.classList.contains('hidden')) {
            this.domSelectCurso.selectedIndex = 0 // revierte a valor por defecto del select
            this.domRadioTurno[0].checked = true // revierte a checkeado por defecto la primera opcion
        }
    }

    _recogerDatos() {
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.email = this.domInpEmail.value
        this.datos.password = this.domInpPassword.value
        this.datos.datos = this.domAreaDatos.value
        this.datos.turno = this.procesarRadio(this.domRadioTurno) // guardamos el return de dicha funcion
        this.datos.isOk = this.domChIsOk.checked // devuelve un booleano true o false
        this.datos.isOk2 = this.domChIsOk2.checked
        this.datos.curso = this.procesarSelect(this.domSelectCurso)
        this.datos.fechaNacimiento = new Date(this.domInpFecha.value)
       // this.datos.asignaturas = this.procesarSelect(this.domSelectAsignaturas)

    }

    procesarRadio(nodo) {
        let value
        // nodo sera el parametro del radio box en cuestion
        nodo.forEach((item) => {
            // con la propiedad .checked nos devuelve que item true o false
            if (item.checked) { value = item.value }
        })
        return value
    }

    procesarSelect(nodo) {
        let index = nodo.selectedIndex
        if (index !== 0) {
            return {
                value: nodo.options[index].value, // recoje el value del selectedIndex del array options del item seleccionado
                text: nodo.options[index].textContent
            }
        } else {
            return { text: 'No se ha seleccionado ningún item' }
        }
    }

    mostrarAsignaturas(ev) {
        ev.target.firstElementChild.classList.add('hidden')
        let topics = CURSOS[ev.target.selectedIndex-1].asignaturas // del objeto CURSOS se toma el objeto en la posición del array que coincide con el indexSelect del target del evento que se ha disparado -1 ya que en el selector los cursos comienzan en la opcion a partir de 1 (0 es --Seleccionar--) y en el array CURSOS la posicion 0 es el primero de ellos
        let HTMLResult = ''
        topics.forEach( elem => HTMLResult +=
            `<input type="checkbox" name="${elem}" id="${elem}">
            <label for="${elem}">${elem}</label>`
        )
        this.domSelectorAsignaturas.innerHTML = '' 
        this.domSelectorAsignaturas.innerHTML = HTMLResult
    }

    presentarDatos() {
        let resultadoHTML =
            `<h2>Resultados></h2>
        <ul>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
            <li>Fecha de Nacimiento: ${this.datos.fechaNacimiento}</li>
            <li>email: ${this.datos.email}</li>
            <li>Contraseña: ${this.datos.password}</li>
            <li>Otros datos: ${this.datos.datos}</li>
            <li>Turno: ${this.datos.turno}</li>
            <li>Curso: ${this.datos.curso.text}</li>
            <li>Asignaturas: ${this.datos.asignaturas.text}</li>
            <li>Aceptadas condiciones: ${this.datos.isOk ? 'SI' : 'NO'}</li>
            <li>Aceptado recibir informacion: ${this.datos.isOk2 ? 'SI' : 'NO'}</li>
        </ul>`

        this.domDivResultados.innerHTML = resultadoHTML
        console.dir(this.datos)
    }





}

