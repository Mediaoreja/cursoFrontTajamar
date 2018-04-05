(function () {
    function app() {
        let eNombre = document.querySelector('#inpNombre')
        let eApellido = document.querySelector('#inpApellido')
        let eGuardar = document.querySelector('#btnGuardar')
        let eBorrar = document.querySelector('#btnBorrar')
        let eSaludo = document.querySelector('#outSaludo')
        
        eGuardar.addEventListener('click', guardar)
        eBorrar.addEventListener('click', borrar)

        function guardar() {
            let usuario = {
                nombre : eNombre.value,
                apellido : eApellido.value
            }
            // localStorage solo guarda variables string, para guardar el objeto usuario como string necesitamos el metodo JSON.stringify()
            window.localStorage.setItem('user', JSON.stringify(usuario))
            saludar()
            
        }

        function saludar() {
            let usuario = window.localStorage.getItem('user')
            // recomponemos la variable almacenada en caché de string a objeto
            usuario = JSON.parse(usuario)
            // comprobamos si se han definido el objeto usuario
            if (usuario.nombre || usuario.apellido) {
                eSaludo.innerHTML = `<p>Hola ${usuario.nombre} ${usuario.apellido}</p>`
            }
            
        }

        function borrar() {
            window.localStorage.removeItem('user')
            eSaludo.innerHTML = ''
            //limpiamos los inputs
            eNombre.value = ''
            eApellido.value = ''
        }

        saludar()
        
    }

    window.addEventListener('load', app)
})()