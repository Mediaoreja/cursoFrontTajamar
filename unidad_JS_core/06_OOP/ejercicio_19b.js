// ejercicio 19b resolucion en factura.ja

// propiedades a crear:
    // info de la empresa -> objeto con 4 propiedades
    // info del cliente
    // lista elementos
    // otra info

    // metodo calculo total
    // metodo mostrar


function Empresa(nombre, dir, tlf, nif) {
    this.nombre = nombre,
    this.direccion = dir,
    this.telefono = tlf,
    this.nif = nif
}

function Cliente(nombre, dir, tlf, nif) {
    this.nombre = nombre,
    this.direccion = dir,
    this.telefono = tlf,
    this.nif = nif
}

function Producto(desc, pUnitario, cantidad) {
    this.descripcion = desc,
    this.precio = pUnitario + ' €',
    this.cantidad = cantidad

}

function Otros(IVA, formaPago) {
    this.total = 0 + ' €'
    this.iva = IVA + '%',
    this.formaPago = formaPago
}

function Factura(e, c, p, o) {
    this.empresa = e,
    this.cliente = c,
    this.producto = p,
    this.otros = o
    calcularTotal = function() {
        let pvp = this.producto.precio * this.producto.cantidad
        this.otros.total = pvp + pvp * this.otros.iva
    }
}



let empresa1 = new Empresa('Mdecem', 'Arroyomolinos', '666 555 444', '11122333K')
let cliente1 = new Cliente('Saneamientos Pérez', 'Vicálvaro', '777 666 555', '44455666G')
let producto1 = new Producto('Ratón 34H5 color negro', 15, 1)
let otros1 = new Otros(21,'Transferencia bancaria')


let factura1 = new Factura(empresa1, cliente1, producto1, otros1)
console.log(factura1)