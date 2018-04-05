(function () {
    function app() {
        let eNombre = document.querySelector('#inpNombre')
        let eGuardar = document.querySelector('#btnGuardar')
        let eBorrar = document.querySelector('#btnBorrar')
        let eSaludo = document.querySelector('#outSaludo')
        
        eGuardar.addEventListener('click', guardar)
        eBorrar.addEventListener('click', borrar)

        function guardar() {
            let nombre = eNombre.value
            // almacenamos en caché local la variable
            window.localStorage.setItem('nombre', nombre)
            // añadimos aquí la funcion saludo para que salude siempre que guardemos un nuevo nombre
            saludar()
            
        }

        function saludar() {
            // recuperamos la variable almacenada en 'local storage'
            let nombre = window.localStorage.getItem('nombre')
            // comprobamos si se ha definido la variable nombre
            if (nombre) {
                eSaludo.innerHTML = `<p>Hola ${nombre}</p>`
                //limpiamos el input
                eNombre.value = ''
            }
            
        }

        function borrar() {
            // borramos la variable almacanada en caché
            window.localStorage.removeItem('nombre')
            eSaludo.innerHTML = ''
        }

        saludar()
        
    }

    window.addEventListener('load', app)
})()