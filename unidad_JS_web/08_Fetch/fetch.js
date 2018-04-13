function app() {
    const HEADERS = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })

    document.querySelector('#btnAjax').addEventListener('click', getDatos)
    document.querySelector('#btnAjaxItem').addEventListener('click', getDatos)
    document.querySelector('#btnAjaxAdd').addEventListener('click', postDatos)
    //document.querySelector('#btnAjaxBorrar').addEventListener('click', deleteDatos)
    document.querySelector('#btnAjaxModif').addEventListener('click', putDatos)

    function getDatos(ev) {

        // let metodo = 'GET' //método por defecto nop hace falta declararlo
        let url = ''
        if (ev.target.id == 'btnAjax') { url = 'http://localhost:3000/posts/' }
        else {
            let item = document.querySelector('#item').value
            if (item) { url = 'http://localhost:3000/posts/' + item }
            else {
                return
            }
        }
        fetch(url)
            // se devuelve una promesa
            .then((response) => {
                if (response.status == 200) {
                    return response.json() // devuelve la promesa
                } else {
                    // devuelve tambien una promesa
                    return new Promise((resolve, reject) => {
                        resolve('Error de conexión '+response.status)
                    })
                }
            })
            .then((data) => console.log(data))
    }

    function postDatos() {
        // estos datos deberian de recogerse de un formulario
        let data = {
            title: "Nuevo post",
            author: "Manuel",
        }

        let options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(data)
        }

        let url = 'http://localhost:3000/posts/'

        fetch(url, options)
            .then(response => response.json())
            .then((data) => console.log(data))
    }

    function putDatos(ev) {
        // estos datos deberian de recogerse de un formulario
        let data = {
            title: "Alicia en el País de las maravillas",
            author: "Lewis Carrol",
        }

        let options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(data)
        }

        let url = 'http://localhost:3000/posts/'
        // if (ev.target.id == 'btnAjax') { url = 'http://localhost:3000/posts/' }
        //  else {
        let item = document.querySelector('#itemM').value
        if (item) { url = 'http://localhost:3000/posts/' + item }
        else {
            return
        }
        //   }

        fetch(url, options)
            .then(response => response.json())
            .then((data) => console.log(data))
    }


}
window.addEventListener('load', app, false)

