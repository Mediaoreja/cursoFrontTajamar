// un fichero para cada clase individual
// al iniciar una clase con export creamos un módulo
// en el constructor solo deberían inicializarse variables o propiedades y manejadores d eventos. Pero bien estructurada es mejor hacer funciones y en el constructor

export class Formulario {

    constructor() {

        // creamos el modelo de datos
        this.datos = {
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            datos: '',
            isOk: false, // no marcados por defecto
            isOk2: false, // no marcados por defecto
            turno: '',
            curso: '',
            asignaturas: ''
        }

        this.cursoFront = [
            '--Selecciona--',
            'Html5',
            'Css3',
            'ES6']

        this.cursoWeb = [
            '--Selecciona--',
            'Photoshop',
            'Indesign',
            'Illustrator'
        ]
        this.cursoServidores = [
            '--Selecciona--',
            'Node',
            'Php',
            '.Net'
        ]
        this.cursoBasesDatos = [
            '--Selecciona--',
            'Mongo',
            'SQL',
            'JAVA'
        ]

        this.accederDom()
        this.definirManejadores()
    }

    accederDom() {
        // creamos las variables/propiedades de los elementos a lo que queremos acceder
        this.domBtnSaludar = document.querySelector('#btnSaludar')
        this.domBtnEnviar = document.querySelector('#btnEnviar')
        this.domBtnBorrar = document.querySelector('#btnBorrar')
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
  
        
    }

    definirManejadores() {
        this.domBtnSaludar.addEventListener('click', this.saludar.bind(this)) // nos aseguramos con .bind(this) que el elemento this es el objeto Formulario
        this.domBtnEnviar.addEventListener('click', this.enviar.bind(this))
        this.domBtnBorrar.addEventListener('click', this.borrar.bind(this))
        this.domChIsOk.addEventListener('change', this.completar.bind(this)) // se dispara el evento al chekear las condiciones
        this.domSelectCurso.addEventListener('change', this.mostrarAsignaturas.bind(this))

    }

    saludar() {
        console.log('hola amigos')
    }

    enviar(ev) {
        ev.preventDefault() // le quitamos la funcion por defecto del boton submit de enviar el form
        this._recogerDatos() // con el guión declaramos la función de entorno privado
        this.presentarDatos()

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
        this.datos.asignaturas = this.procesarSelect(this.selectAsignaturas())

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
        let curso = ev.target.selectedIndex
        if (curso == 1) { this.selectAsignaturas(this.cursoFront) }
        if (curso == 2) { this.selectAsignaturas(this.cursoWeb) }
        if (curso == 3) { this.selectAsignaturas(this.cursoServidores) }
        if (curso == 4) { this.selectAsignaturas(this.cursoBasesDatos) }
    }

    selectAsignaturas(curso) {    
        this.domSelectorAsignaturas.innerHTML =
            `<label for="asignaturas">Selecciona asignaturas</label>
            <select name="asignaturas" id="asignaturas" multiple></select>`
        let domSelectAsignaturas = document.querySelector('#asignaturas')
        for (let i = 0; i < curso.length; i++) {
            domSelectAsignaturas.innerHTML += 
            `<option value="${i}">${curso[i]}</option>`
        }
        console.log(domSelectAsignaturas)
        return domSelectAsignaturas
        
    }

    presentarDatos() {
        let resultadoHTML =
            `<h2>Resultados></h2>
        <ul>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
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
    }





}

