// mismo ejercicio ventanas.1.js pero mejorado

app = () => {
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    // añadimos la propiedad disable al elemento del DOM
    eBtnCerrar.disabled = 'true'
    let ventana

    // manejador del evento click del boton btnAbrir
    eBtnAbrir.addEventListener('click', btnClick)
    // manejador del evento click del boton btnCerrar
    eBtnCerrar.addEventListener('click', btnClick)

    // los manejadores de eventos crean un objeto del tipo 'evento' que se puede
    function btnClick(x) {
    // con 'x.target.id' accedemos a la id del elemento que ha disparado el evento como atributo 'target' del objeto 'x'
        switch (x.target.id) {
            case 'btnAbrir' : 
                ventana = window.open()
                togleButtons()
                break
            case 'btnCerrar' : 
                ventana.close()
                togleButtons()
                break
        }
    }

    function togleButtons() {
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
    }
}

window.addEventListener('load', app)
