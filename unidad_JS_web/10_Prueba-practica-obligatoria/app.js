(function () {
    function app() {

        let datos = {
            nombre: '',
            apellido1: '',
            apellido2: '',
            email: '',
            password: '',
            fechaNacimiento: '',
            curso: '',
            aficiones: []
        }

        let cursos = [
            {
                curso: 'web',
                asignaturas: ['Html', 'Css', 'Js', 'Usabilidad']
            },
            {
                curso: 'sistemas',
                asignaturas: ['Algoritmos', 'Concurrencia', 'Software', 'Datos']
            },
            {
                curso: 'objetos',
                asignaturas: ['UML', 'Datos', 'Algoritmos', 'SQL']
            }
        ]

        let domFormulario = document.querySelector('form')
        let domOutDate = document.querySelector('#outDate')
        let domCurso = document.querySelectorAll('[name="curso"]')
        let domAsignaturas = document.querySelector('#selectorAsignaturas')
        let domNombre = document.querySelector('#nombre')
        let domApellido1 = document.querySelector('#apellido1')
        let domApellido2 = document.querySelector('#apellido2')
        let domFechaNacimiento = document.querySelector('#fecha')
        let domEmail = document.querySelector('#email')
        let domPassword1 = document.querySelector('#pass1')
        let domPassword2 = document.querySelector('#pass2')
        let domSalidaDatos = document.querySelector('#salidaDatos')
        let domMensajePassword = document.querySelector('#mensajePass')
        
        // aficiones

        let domAficiones = document.querySelectorAll('.grupo-check input')

        domFormulario.addEventListener('submit', enviarDatos, false)
        domPassword2.addEventListener('input', comprobarPassword, false)

        function comprobarPassword() {
            domMensajePassword.innerHTML = ''
            let mensaje
            if (domPassword1.value !== domPassword2.value) {
                domMensajePassword.innerHTML = 'No coinciden'
            }
            
        }

        function asignarManejadores() {
            domCurso.forEach(element => {
                element.addEventListener('change', mostrarAsignaturas)
            });
            domAficiones.forEach(item => {
                item.addEventListener('click', addAficiones, false)
            });
        }

        function addAficiones (ev){
            datos.aficiones.push(ev.target.name)
            console.dir(ev.target.checked)
            console.log(datos.aficiones)
        } 

        function mostrarAsignaturas(ev) {
            let indice
            if (ev.target.id == 'pWeb') { indice = 0 }
            else if (ev.target.id == 'pSistemas') { indice = 1 }
            else { indice = 2 }
            domAsignaturas.classList.remove('hidden')
            domAsignaturas.innerHTML = ''
            cursos[indice].asignaturas.forEach(element => {
                domAsignaturas.innerHTML +=
                    `<option>${element}</option>
            `
            });
        }

        function enviarDatos(ev) {
            datos.nombre = domNombre.value
            datos.apellido1 = domApellido1.value
            datos.apellido2 = domApellido2.value
            datos.email = domEmail.value
            datos.password = domPassword2.value
            datos.fechaNacimiento = domFechaNacimiento.value
            for (let i = 0; i < domCurso.length; i++) {
                if (domCurso[i].checked) datos.curso = domCurso[i].value;
            }
            
            mostrarDatos()
            ev.preventDefault()
            
        }

        function mostrarDatos() {
            domSalidaDatos.innerHTML =
                `<h2>Datos del envío</h2>
            <ul>
                <li>Nombre: ${datos.nombre}</li>
                <li>Apellidos: ${datos.apellido1} ${datos.apellido2}</li>
                <li>Fecha de nacimiento: ${datos.fechaNacimiento}</li>
                <li>E-mail: ${datos.email}</li>
                <li>Contraseña: ${datos.password}</li>
                <li>Curso: ${datos.curso}</li>
                <li>Aficiones: ${datos.aficiones.slice(', ')}</li>
            </ul>`
        }

        function fechaActual() {
            let hoy = new Date()
            let diaSemana = hoy.getDay()
            let dia = hoy.getDate()
            let mes = hoy.getMonth()
            let año = hoy.getFullYear()

            let semana = [
                'lunes',
                'martes',
                'miércoles',
                'jueves',
                'viernes',
                'sábado',
                'domingo'
            ]
            let meses = [
                'enero',
                'febrero',
                'marzo',
                'abril',
                'mayo',
                'junio',
                'julio',
                'agosto',
                'septiembre',
                'octubre',
                'noviembre',
                'diciembre'
            ]

            domOutDate.innerHTML = `Hoy es ${semana[diaSemana-1]}, día ${dia} de ${meses[mes]} de ${año}`
        }

        fechaActual()
        asignarManejadores()
    }
    window.addEventListener('load', app, false)
})()