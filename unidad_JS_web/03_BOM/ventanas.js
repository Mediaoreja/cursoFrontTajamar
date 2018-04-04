// metodo para que ejecute el js una vez se haya cargado toda la pagina en el navegador, independientemente si el script esta en el header o al final de la pag.
// nombramos la funcion, por ejemplo 'main' o 'app'
/* tres maneras de crear la funcion: declarada; anonima asignada o como arrow:
function app () {}
app = function() {}
app = () => {}
 */

app = () => {
    //asignamos a variables los elementos a modificar en este caso con .querySelector() 
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    // definimos la variable ventana que vamos a utilizar en la funcion cerrar ventana
    let ventana
    // creamos un arrray para almacenar cada nueva ventana 
    let aVentanas = []

    // manejador del evento click del boton btnAbrir
    eBtnAbrir.addEventListener('click', abrirVentana)
    // manejador del evento click del boton btnCerrar
    eBtnCerrar.addEventListener('click', cerrarVentana)

    function abrirVentana() {
        // abrir ventana nueva en el elemento window
        ventana = window.open()
        // añadimos la nueva ventana al array aVentanas
        aVentanas.push(ventana)
        console.log(aVentanas)

        // guardando la funcion en una variable devuelve la posicion del puntero en esa nueva ventana
    }

    function cerrarVentana() {
        // procesamos el array por el metodo for each
        // con la funcion callback
        aVentanas.forEach((item) => {item.close()})
        // limpiar el array tras cerrar ventanas
        aVentanas = []
        
    }
}



window.addEventListener('load', app)
