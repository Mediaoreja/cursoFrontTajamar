// ampliación del ejercicio ventanas.js
(function () {
    app = () => {
        let eBtnAbrir = document.querySelector('#btnAbrir')
        let eBtnAbrirG = document.querySelector('#btnAbrirG')
        let eBtnCerrar = document.querySelector('#btnCerrar')
        let eBtnImg = document.querySelector('#btnImg')
        //eBtnCerrar.disabled = 'true'
        let ventana
        let aVentanas = []


        // manejadores del evento click
        eBtnAbrir.addEventListener('click', abrirVentana)
        eBtnAbrirG.addEventListener('click', abrirGoogle)
        eBtnCerrar.addEventListener('click', cerrarVentana)
        eBtnImg.addEventListener('click', abrirImg)

        function abrirVentana() {
            ventana = window.open()
            aVentanas.push(ventana)
            // ventana ahora es una replica del elemento window y por tanto se puede aplicar metodos para el elemento document de dicha ventana
            ventana.document.write('<h1>Documento recien creado</h1>')
        }

        function abrirGoogle() {
            ventana = window.open('http://google.es',
                '_blank',
                'top=200, left= 200, width=400, height=400'
            )
            aVentanas.push(ventana)
        }

        function cerrarVentana() {
            aVentanas.forEach((item) => { item.close() })
            aVentanas = []
        }

        function abrirImg() {
            //abrir una ventana nueva con una imagen donde se indica la url de dicha imagen
            ventana = window.open('gato.jpg')
            aVentanas.push(ventana)
        }

    }

    window.addEventListener('load', app)

})()
