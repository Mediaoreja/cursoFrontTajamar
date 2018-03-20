// 0 1 1 2 3 5 8 13 21 34 ...

// utilizando 'while' y 'do while'


/* 
// este while realiza 0+0, 0+1, 1+2, 3+3, 6+4, 10+5 ... es decir el resultado + el indice++
let resultado = 0
let numero = 100
let i = 0
while ( i <= numero) {
    resultado += i;
    console.log(resultado)
    i++;
}
 */


/* // este 'do while' realiza la primera operación y mientras se mantiene la condición numero menor de cero realiza el codigo entre llaves: 1*5, 5*4, 20*3, 60*2, 120*1 resultado por indice-- 
let resultado = 1
let numero = 5
do {
    resultado *= numero
    console.log(resultado)
    numero--
} while (numero > 0); */

// en fibonacci la serie va 0+1, 1+1, 2+1, 3+2 ... es decir el resultado + el anterior

function serieFibonacci(n) {
    let a = 0
    let b = 1
   // let i = 0
   let c = 0

    do {
        
        c = a + b
        console.log(c)
        a = b
        b = c
       // i++
    } while (c <= n);
}


serieFibonacci(100)

