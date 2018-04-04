// mismo ejercicio ventanas.js pero sin el uso de un array

app = () => {
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    // añadimos la propiedad disable al elemento del DOM
    eBtnCerrar.disabled = 'true'
    let ventana
    

    // manejador del evento click del boton btnAbrir
    eBtnAbrir.addEventListener('click', abrirVentana)
    // manejador del evento click del boton btnCerrar
    eBtnCerrar.addEventListener('click', cerrarVentana)

    function abrirVentana() {
        ventana = window.open()
        // pasamos la propiedad disabled a su contrario
        togleButtons()
    }

    function cerrarVentana() {
        ventana.close()
        // pasamos la propiedad disabled a su contrario
        togleButtons()
        
    }

    function togleButtons() {
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
    }
}



window.addEventListener('load', app)
