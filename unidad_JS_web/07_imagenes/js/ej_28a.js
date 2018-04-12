(function () {

    function app () {

        let domDivImg = document.querySelector('.imagen')
        let domImg = document.querySelector('img')

        domDivImg.addEventListener('mouseover', cambiarImg)

        function cambiarImg (ev) {
            
            if (ev.type == 'mouseover') {
                domImg.src = "./img/gato2.jpg"
            }
            else {
                domImg.src = "./img/gato1.jpg"
            }

        }

    }

    window.addEventListener('load', app)
})()
