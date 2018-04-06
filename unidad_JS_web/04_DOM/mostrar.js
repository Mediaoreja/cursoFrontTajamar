(function() {
    function app() {

        let eVer = document.querySelector('.ver')
        let eParrafo = document.querySelector('p.oculto')
        

        eVer.addEventListener('click', mostrar)

        function mostrar() {
            eParrafo.classList.toggle('oculto') // toggle añade la classe si no la tiene si no la quita
            eVer.innerHTML = 'ver menos' // falta cambiar el texto a ver más tras volver a pulsar
        }

    }
    window.addEventListener('load', app)
})()