(function () {
    function app() {
        let aEnlaces = document.getElementsByTagName('a')
        // esto crea un objeto HTMLCollection con el que no podemos procesar con un for each
        //console.dir(aEnlaces)
        
        /*  
        for (let i = 0; i < aEnlaces.length; i++) {
             aEnlaces[i].addEventListener('click', cambio)
        } 
        */


        // mejor utilizar document.querySelectorAll() que devuelve un NodeList que si podemos procesar con un for each
        let eEnlaces = document.querySelectorAll('a')
        //console.dir(eEnlaces)

        eEnlaces.forEach(item => {
            item.addEventListener('click', cambio)
        });

        function cambio(ev) {
            ev.target.outerHTML = 'No tengo ' + ev.target.textContent
        }
    }

    window.addEventListener('load', app)
})()

// resuelto más completo en el github del profesor