function Point (param){
    this.x = param.x
    this.y = param.y
    this.r = param.r
    this.calcularCircunf = function() {}
    this.calcularCirculo = function() {}
    this.calcularOtro = function() {}
    this.calcularOtroMas = function() {}
}

let p1 = new Point( {x:2, y:3, r:5} ) // pasar las variables de un objeto literal. No importa el orden o el numero de parametros que incorporamos porque segun la funcion constructora compara cada propiedad con las variables del objeto constructor