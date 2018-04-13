function app () {

    // el objeto geolocation tiene tres métodos
    navigator.geolocation.getCurrentPosition( (position) => {
        // lanza un alert que pide permiso de localización
        // y devuelve un onjeto con las coordenadas de nuestra posición
        
        console.dir(position) 

        // luego yendo a la API de Google aplicamos las coordenadas de latitud y longitud que nos llega desde el objeto geolocate

    })

}

window.addEventListener('load', app)