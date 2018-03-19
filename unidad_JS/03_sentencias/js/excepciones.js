// GESTION DE ERRORES
// captura de excepciones mediante 'try' y 'catch'
// gestionar qué hacer con esos errores: mostrar en mensajes al usuario, etc.

/* try {
    let x = noExiste() // analiza si se dispara una excepción ('error')
} catch (error) { //captura la excepción para mostrarla después
    alert(error)
} */

// disparar errores manualmente
try {
    throw 'Error de programa'
} catch (error) { //captura la excepción para mostrarla después
    alert(error)
}
