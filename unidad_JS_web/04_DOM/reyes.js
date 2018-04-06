// juego Preguntar al usuario los nombres de los reyes españoles desde los católicos
// comparar con un array con los datos correctos
// añadir a una lista cada dato correcto
// avisar al usuario si hay error
// no dejar repetir nombres
// extra: añadir cronometro

(function(){

    function app(){
        const aReyes = ["Isabel","Fernando","Carlos","Felipe","Juana","Alfonso","Juan Carlos","Amadeo","Luis","Jose"]
        const aReyesMin = aReyes.map(item => item.toLocaleLowerCase())

        const eNombre = document.querySelector('#nombre')
        const btnOk = document.querySelector('#btnOk')
        const eLista = document.querySelector('#resultados')
        const eAlerta = document.querySelector('#alerta')

        btnOk.addEventListener('click', validar)

        function validar(){
            // falta completar ejercicio consultar github del profesor
        }
        
    }

    window.addEventListener('load', app)

})()



