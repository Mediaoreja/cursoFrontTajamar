// Elementales -> valor -> inmutables
// number, string, boolean

let x = 12
let y = 2 * x // asignacion de valor
x = x + 2 // la variable let solo se declara una vez aunque se reasigne su valor después

console.log(y) // 24

console.log(x) // 14, esto es porque los datos se manipulan por valor, el valor de y no cambia aunque cambien los valores de los elementos que la crearon. son 'inmutables'
//cada vez que damos nuevo valor a los elementales (inmutables) se borra el dato anterior para dar cabida al nuevo, pero no mudan al nuevo valor


//objetos o datos referenciados -> referencia

let o1 = {valor : 12}
let o2 = o1 // asignacion de referencia, ambos objetos son referencia del mismo contenido de datos, si varia el valor de o1, varia riempre el de o2, salvo que se referencie o2 a un clon de o1
o1.valor = 24

console.log(o1) //valor : 24
console.log(o2) // se esperaría 12 pero no, son 24