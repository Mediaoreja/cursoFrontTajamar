'use strict' //para declarar lenguaje estricto, p. ej. las variables han de definirse var c = a + b

function sumar(a, b) {
	var c = a + b
	console.log('el resultado es', c)
	return c
}		//la coma es lo mismo que el + para concatenar texto y variable. el ; final era una recomendación de estilo, actualmente se 'des-recomienda'
		//al declarar la función, a y b son argumentos
		// valor que devuelve, pero no escribe nada si solo está esta línea

function restar(a, b) {
	var c = a - b
	return c
}		// las buena practica de escritura es usar las mismas variables siempre, unificar mismo idioma, nominar homogéneamente, uso de infinitivos

sumar(123, 34)
		// entre paréntesis parámetros reales con los que queremos realizar la función
sumar(23, 45)
sumar(2, 5)
sumar()