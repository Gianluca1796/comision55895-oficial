// const numeros = [1,2,3,4,5,6,7]
// const nombres = ["Santiago","Moises","Lorenzo","Silvina","Gonzalo","Maria","Fernando","Pedro","Fabiana"]
// const cositas = ["Marcos",2,34,"Juan","Maria",17, true, false]


// console.log(numeros[2])
// const suma = numeros[2] + numeros [3]
// console.log(suma)


// console.log(nombres.length)
// for (let i = 0; i < nombres.length; i++){
//     console.log(nombres[i])
// }
// console.table(nombres)
// for(let i = 0; i < 10 ; i+=2){
//     console.log(i)
// }



// *** METODO PUSH *** //
// let numero = parseFloat(prompt("Ingrese el numero que desea agregar"))
// numeros.push(10)
// console.log(numeros)


// // *** METODO UNSHIFT *** //
// numeros.unshift(12)
// console.log(numeros)


// // *** METODO SHIFT *** //
// nombres.shift()
// console.log(nombres)

// // ***  METODO POP *** /
// nombres.pop()
// console.log(nombres)

// // *** METODO JOIN *** ///
// console.log(nombres.join(" / "))

// // *** METODO INDEXOF *** //
// console.log(nombres.indexOf("Moises"))


// // *** METODO INCLUDES *** //
// console.log(nombres.includes("Lorenzo"))


// *** METODO SORT *** //
// nombres.sort()
// console.log(nombres)

// // *** METODO REVERSE *** 
// nombres.reverse()
// console.log(nombres)

// *** METODO SPLICE *** //
// nombres.splice(4,1)
// console.log(nombres)




// *** MICRODESAFIO *** //

// CREO MI ARRAY VACIO
// const productos = []

// //CREO MI FUNCION PARA CARGAR PRODUCTOS
// function cargarProductos () {
//     // PREGUNTO QUE PRODUCTO QUIERE AGREGAR
//     let nombreProducto = prompt("¿Qué producto desea agregar?").toLowerCase()


//     //REVISO QUE NO INGRESE ESPACIOS VACIOS
//     while(nombreProducto.trim() === ""){
//         nombreProducto = prompt("No ingreses espacios vacíos! Ingresa un nombre")
//     }

//     //REVISO SI EL PRODUCTO EXISTE DENTRO DE MI ARRAY
//     if(productos.includes(nombreProducto)){
//         alert("El producto ya se encuentra, ingresa otro")
//     }
//     //SI NO EXISTE, LO AGREGO
//     else{
//         productos.push(nombreProducto)
//         alert("El producto se ingresó correctamente")
//     }
// }

// let seguirComprando = true;

// while(seguirComprando){
//     cargarProductos()
//     seguirComprando = confirm("¿Desea agregar otro producto?")

//     if(!seguirComprando){
//         let productosAMostrar = productos.join(" / ")
//         alert(`Los productos agregados son ${productosAMostrar}`)
//     }
// }



// const productos = [
//     {
//         id:1,
//         nombre:"Notebook HP",
//         precio: 1230,
//         stock: 5,
//         categoria: "Notebooks"
//     },
//     {
//         id:2,
//         nombre:"Mouse Redragon",
//         precio: 11111,
//         stock: 5,
//         categoria: "Mouse"
//     },
//     {
//         id:3,
//         nombre:"Mouse Logitech",
//         precio: 20321,
//         stock: 5,
//         categoria: "Mouse"
//     },
//     {
//         id:4,
//         nombre:"Notebook Acer",
//         precio: 302123,
//         stock: 5,
//         categoria: "Notebooks"
//     },
//     {
//         id:5,
//         nombre:"Auriculares Logitech",
//         precio: 11112,
//         stock: 5,
//         categoria: "Auris"
//     }
// ]

// const notebookAcer = {
//     id:1,
//     nombre:"Notebook Acer 2000X",
//     precio: 100000,
//     stock: 5,
//     categoria: "Notebooks"
// }

// productos.push(notebookAcer)

// console.log(productos)
// const IVA = 1.21

// for( const producto of productos ) {
//     console.log(producto.precio * IVA)
// }

