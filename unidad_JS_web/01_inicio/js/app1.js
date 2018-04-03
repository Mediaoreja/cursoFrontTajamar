(function(){

    function app(){
            // Añadimos como variables de un objeto todos los elementos susceptibles de trabajar con ellos
        let oDom = {
            eBotonSaludar : document.querySelector('#btnSaludo')
        }

        // para aplicar un evento al elemento a través de una funcion dentro de una función anónima abreviada donde podemos incorporar el parametro 'pepe', no hay otra forma si no a traves de una funcion anónima
        //oDom.eBotonSaludar.onclick = () => saludo(event, 'Pepe')
        
        // mejor asignar los eventos mediante el metodo addEventListener con dos parametros: primero el evento sin 'on', y de segundo parametro la funcion
        oDom.eBotonSaludar.addEventListener(
            'click',
            () => saludo(event, 'Pepe'))
            

        function saludo(oE, user='amigo'){
            console.log(`Hola ${user}`)
            //console.log(oE) // muestra el objeto Evento
        }
    }
    window.addEventListener('load', app) // creamos una funcion app que se ejecute cuando se cargue toda la pagina y dentro todo nuestro codigo js
    
    //document.addEventListener('DOMContentLoaded', app) // otra manera para el mismo evento

})()