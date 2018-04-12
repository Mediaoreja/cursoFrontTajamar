function app() {

    document.querySelector('#btnAjax').addEventListener('click', getDatos)
    document.querySelector('#btnAjaxItem').addEventListener('click', getDatos)
    document.querySelector('#btnAjaxAdd').addEventListener('click', postDatos) // añadir
    document.querySelector('#btnAjaxBorrar').addEventListener('click', deleteDatos)
    document.querySelector('#btnAjaxModif').addEventListener('click', modificarDatos)

    let ajax

    function getDatos(ev) {

        let metodo = 'GET'
        let url = ''
        if (ev.target.id == 'btnAjax') { url = 'http://localhost:3000/posts' }
        else {
            let item = document.querySelector('#item').value
            if (item) { url = 'http://localhost:3000/posts/' + item }
            else {
                return
            }
        }
        conectar(metodo, url, null, stateChange)

    }

    function postDatos() {
        let data = {
            title: "Neuromante",
            author: "Federico"
        }
        let metodo = 'POST'
        let url = 'http://localhost:3000/posts'
        conectar(metodo, url, JSON.stringify(data)) // convertimos en string nuestro objeto de datos
    }

    function modificarDatos() {
        let data = {
            title: "Neuromante",
            author: "William"
        }
        let metodo = 'PUT'
        let url = ''
        let item = document.querySelector('#itemM').value
        if (item) {
            url = 'http://localhost:3000/posts/' + item
        }
        else {
            return
        }
        conectar(metodo, url, JSON.stringify(data), stateChange)
    }


    function deleteDatos() {

        let metodo = 'DELETE'
        let url = ''
        let item = document.querySelector('#itemB').value

        if (item) {
            url = 'http://localhost:3000/posts/' + item
        }
        else {
            return
        }

        conectar(metodo, url, null, stateChange)
    }

    function conectar(metodo, url, data, funcion) {
        ajax = new XMLHttpRequest()
        ajax.onreadystatechange = funcion
        ajax.open(metodo, url)
        ajax.send(data)
    }

    function stateChange() {
        console.log('Cambio de estado')
        console.log(ajax.readyState)
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                let respuesta = JSON.parse(ajax.responseText)
                console.dir(respuesta)
            }
            else {
            }
        }
    }
}

window.addEventListener('load', app, false)