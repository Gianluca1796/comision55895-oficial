// console.log("Hola")

// const timeOut = setTimeout(() => {
//     console.log("Estoy en la clase!")
// }, 5000);

// console.log("Chau! Termino la clase")
// clearTimeout(timeOut)

// let contador = 0
// const intervalo = setInterval(() => {
//     contador ++
//     console.log(contador)

//     if(contador === 5){
//         clearInterval(intervalo)
//         console.log("Se frenó el intervalo")
//     }
// }, 1000);


// function pedirDatosRemotos() {
//     console.log("Pedir datos al servidor")
// }

// function mostrarDatosEnDOM() {
//     console.log("Escribir datos en el documento HTML")
//     let texto = "Productos mostrados!"
//     return texto
// }

// function mostrarErrorEnDOM() {
//     return console.error("No pude listar los productos :(")
// }


// let verEnDOM = ""

// try {
//     pedirDatosRemotos()
//     verEnDOM = mostrarDatosEnDOM()
// } catch (error) {
//     verEnDOM = mostrarErrorEnDOM()
// } finally {
//     contenedor.innerHTML = verEnDOM
// }


// Try Catch

// const eventoFuturo = (res) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             // if(res === true){
//             //     resolve("Promesa resuelta")
//             // }else{
//             //     reject("Promesa Rechazada")
//             // }
//             res === true ? resolve("Promesa resuelta") : reject("Promesa rechazada")
//         },2000)
//     })
// }

// const valor = false

// try{    
//     eventoFuturo(valor)
//     .then((respuesta) =>{
//         console.log(respuesta)
//     })
//     .catch((respuesta) =>{
//         console.log(respuesta)
//     })
//     .finally(() => {
//         console.log("Finalizó el proceso")
//     })
// }catch(error){
//     console.log("Error:", error)
// }

const contenedor = document.querySelector("#contenedor")

function pedirPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response =>  response.json())
    .then(posts => {
        const postHTML = posts.map(post => 
            `<div>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </div>
            `
        )
        contenedor.innerHTML = postHTML
    })
    .catch(error => {
        console.log("error Fetching posts", error)
    })
}

pedirPosts()




const pedirProductos = async () => {
    const response = await fetch('./productos.json')
    const productos = await response.json()
    productos.forEach(prod => {
        const div = document.createElement("div")
        div.innerHTML = `<div class="card">
        <div class="content">
            <div class="title">${prod.nombre}</div>
            <div class="price">$ ${prod.precio}</div>
            <div class="description">${prod.stock}</div>
        </div>
            <button>Comprar</button>
    </div>`
        contenedor.appendChild(div)
    })
}


pedirProductos()



let numero = 10000;
let numeroFormateado = numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

console.log(numeroFormateado); 
