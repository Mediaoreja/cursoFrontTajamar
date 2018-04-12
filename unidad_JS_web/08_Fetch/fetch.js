function app() {
    document.querySelector('#btnAjax').addEventListener('click', getDatos)

    function getDatos() {

        let metodo = 'GET'
        let url = 'http://localhost:3000/posts/'
        fetch(url) // como parametros, url, objeto de datos
        //fetch devuielve una 'promesa', un objeto 'response'
        .then( (data) => { console.log( data.json() ) } )
    }
}
window.addEventListener('load', app, false)

