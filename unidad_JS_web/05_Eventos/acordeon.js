(function(){
    function app() {
       
        let pBtn = document.querySelectorAll('.pregunta')
        let pRes = document.querySelectorAll('.respuesta')

        for (let i = 0; i < pBtn.length; i++) {
            pBtn[i].addEventListener('click', mostrar)
            
        }

       

        function mostrar(ev){
           console.dir(ev)
            pRes[0].classList.toggle('show')
               
           
        }

    }
    window.addEventListener('load', app)
})()