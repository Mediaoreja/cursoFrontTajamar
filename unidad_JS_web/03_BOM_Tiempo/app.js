// se ejecuta una sola vez. Dos parámetros: funcion callback que se ejecuta asíncrona y en el tiempo en miliseg
// estos métodos devuelven un valor que se puede guardar en una  variable para luego poder cancelar dicho proceso
// let idT = window.setTimeout()

// para cancelar el proceso antes de ejecutarse
// clearTimeout(idT) 

// se ejecuta cada cierto espacio de tiempo
/*  let crono = 0
let idI = window.setInterval(function () {
    crono++
}, 10)
clearInterval(idI) 

} 
*/

(function () {

    app = function () {
        let idI
        let crono = 0
        let aBotones = document.querySelectorAll('button') // para seleccionar multiples elementos, devuelve un array
        let eCrono = document.querySelector('.crono')

        aBotones.forEach(item => {
            item.addEventListener('click', btnClick)
        });
        aBotones[1].disabled=true
        aBotones[2].disabled=true

        // recogemos como parametro el objeto evento de la funcion btnClick
        function btnClick(x) {
            
            
            // podría hacerse con un switch y cases
            if (x.target.id === 'btnOn') {
                idI = window.setInterval(function () {
                    crono += 0.01 // contador aumentando en 0.01
                    eCrono.innerHTML = crono.toFixed(2)
                    aBotones[0].disabled=true
                    aBotones[0].textContent = 'Continuar'
                    aBotones[1].disabled=false
                    aBotones[2].disabled=true
                    
                }, 100)
            }
            else if (x.target.id === 'btnPause') {
                clearInterval(idI)
                aBotones[0].disabled=false
                aBotones[1].disabled=true
                aBotones[2].disabled=false
            }
            else {
                crono = 0
                eCrono.innerHTML = crono.toFixed(2)
                aBotones[0].disabled=false
                aBotones[2].disabled=true
                aBotones[0].textContent = 'Iniciar'
            }


        }


    }

    window.addEventListener('load', app)

})()