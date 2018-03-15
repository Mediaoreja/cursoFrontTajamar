'use strict' //para declarar lenguaje estricto, p. ej. las variables han de definirse var c = a + b

function sumar(a, b) {
	var c = a + b
	return c
}		//la coma es lo mismo que el + para concatenar texto y variable. el ; final era una recomendación de estilo, actualmente se 'des-recomienda'
		//al declarar la función, a y b son argumentos
		// funcion pura porque solo tiene una única tarea: devolver c

function restar(a, b) {
	var c = a - b
	return c
}		// las buena practica de escritura es usar las mismas variables siempre, unificar mismo idioma, nominar homogéneamente, uso de infinitivos

function mostrar(r) {
	console.log('el resultado es',r)
}		// funcion tipo 'void' cuya tarea es mostrar algo solamente

		// parte global del programa, porque no está integrada en las funciones
var x = 123
var y = 34

var r = sumar(x,y)
mostrar(r)

var r = restar(x,y)
mostrar(r)
