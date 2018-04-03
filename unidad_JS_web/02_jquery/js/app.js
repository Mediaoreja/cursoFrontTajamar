// ejercicio index2.html de la carpeta 01_inicio en JQUERY

// $() se accede a cualquier elemento del DOM .ready() funcion DOMContentLoaded()
// jquery suele trabajar mucho con funciones anónimas

/* $(document).ready(
    function() {

})  */
// o lo que es lo mismo en su formula abreviada; $ equivale a document.getElementById() o document.querySelector()

$(function(){
    $('#btnSaludar').on('click', function() {
        let user = $('#inpName').val()
        $('#outSaludo').html( `<p>Hola ${user}</p>`)
    })
    $('#btnBorrar').on('click', function(){
        $('#inpName').val('')
        $('#outSaludo').html('')
    })
})