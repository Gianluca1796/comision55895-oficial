// function mostrarProductos () {

// }

// function cargarUsuario () {

// }


// function saludar () {
//     console.log("Bienvenidos a la tercera clase del curso!")
// }

// saludar()


// function pedirDatos (){
//     let nombre = prompt("Ingresa tu nombre")
//     let apellido = prompt("Ingresa tu apellido")
// 

// for(let i = 0; i<=5; i++){
//     pedirDatos()
// }


// function sumar() {
//     let primerNumero = parseFloat(prompt("ingrese un numero"))
//     let segundoNumero = parseFloat(prompt("ingrese un numero"))
//     let resultado = primerNumero + segundoNumero
//     return resultado
// }

// function mostrar(mensaje) {
//     console.log(mensaje)
// }

// function restar() {
//     let primerNumero = parseFloat(prompt("ingrese un numero"))
//     let segundoNumero = parseFloat(prompt("ingrese un numero"))
//     let resultado = primerNumero - segundoNumero
//     console.log(resultado)
// }

// let resultadoSuma = sumar()
// mostrar(resultadoSuma)

// restar()

// *** EJEMPLO CALCULADORA *** //

// function calculadora (num1,num2,operador){
//     switch(operador){
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*": 
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//     }
// }
// function operacionUsuario(){
//     let num1 = parseInt(prompt("Ingresa el primer numero"))
//     let num2 = parseInt(prompt("Ingresa el segundo numero"))

//     while(isNaN(num1) || isNaN(num2)){
//         alert("Ingresa solo numeros")
//         num1 = parseInt(prompt("Ingresa el primer numero"))
//         num2 = parseInt(prompt("Ingresa el segundo numero"))
//     }

//     let operador = prompt("Ingresa un operador +, -, * o /")
//     while(operador !== "+" && operador !== "-" && operador !== "/" && operador !== "*"){
//         alert("Ingresa un operador valido")
//         operador = prompt("Ingresa un operador +, -, * o /")
//     }
//     let resultado = calculadora(num1,num2,operador)

//     alert(`El resultado de la operacion es ${resultado}`)
// }


// operacionUsuario()

// const suma  = function (a, b) {return a + b }

// const resta = function (a, b) { return a - b }

// console.log( suma(15,20) )
// console.log( resta(15,5) )

// const suma = (a, b) => { return a + b }

// const resta = (a, b) =>  a - b ;

// console.log(resta(2,3))


// const IVA = 1.21

// let precioSinIva = parseFloat(prompt("Ingrese el precio del producto sin IVA"))

// const precioConIva = (imp, iva) => imp * iva

// console.log("El precio final del producto es de " + precioConIva(precioSinIva,IVA))

// const IVA = 1.21;
// let importe = Number(prompt("Igresa el importe sobre el cual quieres calcular el IVA"))

// const precioConIVA = (imp, iva) => imp * iva;


// precioConIVA(importe, IVA)


// const valorM2 = 31.83; //valor fijo del seguro por Metro 2

// const comision = 1.025; //comisión del 2.5%

// const M2 = prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro: ");

// const calcularPoliza = m2 => { m2 * valorM2 * comision };

// const valorPoliza = calcularPoliza(M2);

// console.log("El costo de la póliza es: $", valorPoliza);

