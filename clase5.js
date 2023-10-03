// let nombre = "Gianluca"
// let edad = 27
// let ciudad = "Rosario"

// const persona1 = {
//     nombre: "Gianluca",
//     edad: 27,
//     ciudad:"Rosario"
// }

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona["ciudad"])


// persona["ciudad"] = "Barcelona"
// console.log(persona1)

// persona.dni = 12345678
// console.log(persona)


// FUNCION CONSTRUCTORA //

// function Persona(objeto) {
//     this.nombre = objeto.nombre;
//     this.edad   = objeto.edad;
//     this.calle  = objeto.calle;
// }



// const persona1 = new Persona({ nombre: "Homero", edad: 39, 
// calle: "Av.Siempreviva 742" });


// class Persona{
//     constructor(nombre, edad, calle) {
//         this.nombre = nombre;
//         this.edad   = edad;
//         this.calle  = calle;
//     }

// }

// const persona = new Persona("Homero", 39, "Av. Siempreviva 742");

// console.log(persona)


// let saldo = parseFloat(prompt("Ingrese el saldo inicial del simulador"))
// let costo = parseFloat(prompt("Ingrese el costo del producto"))

// class Simulador {

//     constructor(saldoInicial){
//         this.saldo = saldoInicial 
//     }
//     comprar(costo){
//         this.saldo -= costo
//     }
//     devolucion(costo){
//         this.saldo += costo
//     }

// }

// const simuladorDeGastos = new Simulador(saldo)
// console.log(simuladorDeGastos)


// simuladorDeGastos.comprar(costo)
// simuladorDeGastos.devolucion(costo)

// console.log(simuladorDeGastos)


// const carrito = [
//     {
//         producto: "Macbook Air M2",
//         precioUnitario: 159900,
//         cantidad: 2
//     },
//     {
//         producto: "Magic Mouse",
//         precioUnitario: 39900,
//         cantidad: 1
//     },
//     {
//         producto: "iPad Air",
//         precioUnitario: 89790,
//         cantidad: 1
//     }
// ]

// const persona1 = {
//     nombre: "Gianluca",
//     edad: 27,
//     ciudad:"Rosario"
// }

// console.log(persona1.nombre)

// class EstaEsLaClase{

//     constructor(parametro){
//         this.propiedad = parametro
//     }

//     totalCompra(){
//         let subtotal = 0

//         for(const producto of this.propiedad){
//             subtotal += producto.precioUnitario * producto.cantidad 
//         }

//         const totalDeLaCompra = subtotal.toFixed(2)
//         return totalDeLaCompra
//     }
// }


// const objeto = new EstaEsLaClase(carrito)
// console.log(objeto.propiedad)




// const total = objeto.totalCompra()
// console.log(`El total de la compra es de ${total}`)


// function saludarUsuario(){

//     let nombreUsuario = localStorage.getItem("usuario")
//     if(!nombreUsuario){
//         nombreUsuario= prompt("Ingrese su nombre de usuario")
//         localStorage.setItem("usuario",nombreUsuario)
//     }else{
//         alert(`Bienvenido ${nombreUsuario}`)
//     }

// }

// saludarUsuario()


// const carrito = [{
//         producto: "Macbook Air M2",
//         precioUnitario: 159900,
//         cantidad: 2
//     },
//     {
//         producto: "Magic Mouse",
//         precioUnitario: 39900,
//         cantidad: 1
//     },
//     {
//         producto: "iPad Air",
//         precioUnitario: 89790,
//         cantidad: 1
//     }
// ]

// const persona1 = {
//     nombre: "Gianluca",
//     edad: 27,
//     ciudad: "Rosario"
// }

// console.log(persona1)
// localStorage.setItem("personaOBJ", persona1)

// const personaJSON = JSON.stringify(persona1)
// console.log(personaJSON)
// localStorage.setItem("personaJSON", personaJSON)

// const capturaDePersona = JSON.parse(localStorage.getItem("personaJSON"))
// console.log(capturaDePersona)

class Producto {
    constructor(nombre,precio){
        this.nombre = nombre
        this.precio = precio
    }
}

const carrito = JSON.parse(localStorage.getItem("carrito")) || []

console.log(carrito)


function agregarProductos() {

    let nombreProducto = prompt("Ingrese el nombre del producto a agregar")
    let precioProducto = parseFloat(prompt("Ingrese el preico del producto"))

    // const productoAComprar = {
    //     nombre: nombreProducto,
    //     precio: precioProducto
    // }

    const productoAComprar = new Producto(nombreProducto,precioProducto)

    carrito.push(productoAComprar)

    guardarLocal("carrito",JSON.stringify(carrito))
    guardarLocal("usuarios", JSON.stringify(usuarios))
    guardarLocal("ventas",JSON.stringify(ventas))

}

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};

// agregarProductos()
