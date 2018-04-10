(function(){
    function app() {
       
        let aPreguntas = document.querySelectorAll('.pregunta')
        let aRespuestas = document.querySelectorAll('.respuesta')

        aPreguntas.forEach(item => {
            item.addEventListener('click', mostrar, false)
        });
        
        

        function mostrar(ev){
           // falta plegar los otros elementos abiertos
           ev.target.nextElementSibling.classList.toggle('show')
           
        }


    }
    window.addEventListener('load', app)
})()       