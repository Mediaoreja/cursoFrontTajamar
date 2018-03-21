let ayer = new Date(1970,10,12,2,55) // los meses comienzan con enero = 0 ... diciembre = 11
let hoy = new Date()
let unDia = new Date(927839030000000)
console.log(hoy)
console.log(hoy.getDay()) // devuelve 3 -> miercoles
console.log(hoy.getFullYear()) // extrae el año
console.log(unDia)
console.log(ayer)
console.log(ayer.getTime())

console.log(parseInt((hoy - ayer)/(1000*60*60*24*365))) // años entre ambas fechas
console.log(ayer+hoy) // muestra ambas fechas

// visitar https://momentjs.com/ -> libreria js para fechas que permiten ahorrar tiempo para trabajar con fechas
// descargar librerias o instalar con npm 
// ver documentación en la pagina