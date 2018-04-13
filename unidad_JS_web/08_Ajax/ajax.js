function app() {

    document.querySelector('#btnAjax').addEventListener('click', getDatos)
    document.querySelector('#btnAjaxItem').addEventListener('click', getDatos)
    document.querySelector('#btnAjaxAdd').addEventListener('click', postDatos)
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
        conectar(metodo, url, null, consultarDatos)

        function consultarDatos(respuesta) {
            console.log('Datos Consultados')
            console.dir(respuesta)
        }

    }

    function postDatos() {
        // estos datos deberian de recogerse de un formulario
        let data = {
            title: "Nuevo post",
            author: "Manuel",
        }
        let metodo = 'POST'
        let url = 'http://localhost:3000/posts'
        conectar(metodo, url, JSON.stringify(data), postearDatos) // convertimos en string nuestro objeto de datos
    
        function postearDatos(respuesta) {
            console.log('Datos añadidos')
            console.dir(respuesta)
        }
    }

    function modificarDatos() {
        // estos datos deberian de recogerse de un formulario
        let data = {
            title: "Post Modificado",
            author: "Manuel"
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
        conectar(metodo, url, JSON.stringify(data), modificarDatos)

        function modificarDatos(respuesta) {
            console.log('Datos Modificados')
            console.dir(respuesta)
        }
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

        conectar(metodo, url, null, borrarDatos)

        function borrarDatos(respuesta) {
            console.log('Datos Borrados')
            console.dir(respuesta)
        }
    }

    function conectar(metodo, url, data, callback) {
        ajax = new XMLHttpRequest()
        ajax.onreadystatechange = stateChange
        ajax.open(metodo, url)
        ajax.setRequestHeader('Content-Type', 'application/json')
        ajax.setRequestHeader('Accept', 'application/json')
        ajax.send(data)

        function stateChange() {
        console.log('Cambio de estado')
        console.log(ajax.readyState)
        if (ajax.readyState === 4) {
            console.log("Comunicación OK")
            if (ajax.status === 200) {
                let respuesta = JSON.parse(ajax.responseText)
                callback(respuesta) // ejecuta la funcion callback que viene como argumento de la funcion contectar()
            }
            else {
                console.log(ajax.status)
                console.log(ajax.statusText)
            }
        }
    }
    }

    
}

window.addEventListener('load', app, false)