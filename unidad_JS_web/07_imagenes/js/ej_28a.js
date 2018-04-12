(function () {

    function app () {
      
        let domImg = document.querySelector('img')

        domImg.addEventListener('mouseover', cambiarImg)
        domImg.addEventListener('mouseout', cambiarImg)

        function cambiarImg (oE) {
            
            if (oE.type == 'mouseover') {
                domImg.src = "./img/gato2.jpg"
                
            }
            else {
                domImg.src = "./img/gato1.jpg"
                
            }

        }

    }

    window.addEventListener('load', app)
})()
