(function() {
    function app () {

    const HEADERS = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    })

    let listaLibros = []

    domItemBuscador = document.querySelector('#buscador')
    domBtnBuscar = document.querySelector('#btnBuscar')
    domUlSalidaDatos = document.querySelector('#salidaDatos')

    domBtnBuscar.addEventListener('click', getDatos)


    function getDatos () {

        let item = domItemBuscador.value

        url = `https://www.googleapis.com/books/v1/volumes?q=intitle:"${item}"`
        console.log(url)

        fetch(url)
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((data) => {
            console.log(data)
            data.items.forEach(element => {
                 listaLibros.push(element.volumeInfo.title)
            });
           console.log(listaLibros)
           generarLista(listaLibros)
        })
    }

    function generarLista(aData) {
        aData.forEach(element => {
            domUlSalidaDatos.innerHTML += 
            `<li>${element}</li>`
        });
    }
}

window.addEventListener('load', app, false)
})()

