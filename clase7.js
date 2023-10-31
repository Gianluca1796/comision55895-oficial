// const contenedorGeneral  = document.getElementById("contenedor")
const contenedorGeneral = document.querySelector("#contenedor")
// const titulo = document.querySelector(".titulo")
// console.log(titulo)


const titulos = document.querySelectorAll(".titulo")
console.log(titulos)

titulos.forEach((elemento) => {
    console.log(elemento)
})



// const parrafos = document.getElementsByClassName("parrafoDePrueba")
// const imagenDePrueba = document.getElementById("imagenDePrueba")


// imagenDePrueba.src = "rutaDeLaImagen"


// console.log(divContenido)

// divContenido.innerHTML = "<h2 id='titulo' class='titulo'>Hola mundo!</h2><p>Lorem ipsum</p>"

// console.log(parrafos[1])
// parrafos[1].innerText = "Ahora modifique el texto desde JavaScript"
// parrafos[2].innerText = "Este es el tercer parrafo"
// parrafos[2].innerText = "Este es el tercer parrafo, pero lo modifique de nuevo"

// divContenido.innerHTML = "<h1 class='titulo'>Titlo de prueba</h1>"

// // const parrafos1 = document.getElementsByTagName("p")
// // console.log(parrafos1)


// console.log(parrafos[0].classList)

// // parrafos[0].className = "titulo"

// parrafos[0].classList.add("fuenteGrande")


// const frutas = ["Ananá", "Banana", "Durazno", "Kiwi", "Manzana", "Papaya", "Pera"]

// function cargarDom(){
//     const titulo = document.getElementById("titulo")
//     const listaDeFrutas = document.getElementById("listado")

//     //Agrego el texto
//     // titulo.innerText = "www.mandafruta.com"
//     //Agrego el link
//     titulo.innerHTML = "<a href='#'>www.mandafruta.com </a>"

//     frutas.forEach((fruta) => {
//         listaDeFrutas.innerHTML += `<li>${fruta}</li>`
//     })

// }

// cargarDom()

const carrito = []

const peliculas = [{
        id: 1,
        titulo: "Pulp Fiction",
        director: "Quentin Tarantino",
        duracion: 120,
        img:"./img/portada1.jpg"
    },
    {
        id: 2,
        titulo: "Titanic",
        director: "James Cameron",
        duracion: 200,
        img:"./img/portada2.jpg"
    },
    {
        id: 3,
        titulo: "IT",
        director: "Andres Muschietti",
        duracion: 120,
        img:"./img/portada3.jpg"
    },
    {
        id: 4,
        titulo: "El señor de los anillos 10",
        director: "Moises Contreras",
        duracion: 120,
        img:"./img/portada3.jpg"
    }
]


function cargarPeliculas(){
    peliculas.forEach((pelicula) => {
        let contenedorPeli = document.createElement("div")
        contenedorPeli.innerHTML = `<div id = "${pelicula.id}" class="card" style="width: 18rem;">
        <img src="${pelicula.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${pelicula.titulo}</h5>
            <p class="card-text">${pelicula.director}</p>
            <p class="card-text">${pelicula.duracion} minutos</p>
            <button id="${pelicula.titulo}" class="btnAlquilar">¡Alquilar!</button>
        </div>
        </div>`
    

        contenedorGeneral.appendChild(contenedorPeli)

        const btnAgregar = document.getElementById(pelicula.titulo)
        btnAgregar.addEventListener("click", () => {
    agregar(pelicula.titulo)
        })
    })
}

cargarPeliculas()

function agregar (titulo){
    const peliEncontrada = peliculas.find((peli) => peli.titulo === titulo)
    carrito.push(peliEncontrada)
    console.log(carrito)
}


function eliminarDelCarrito(titulo){
    const peliAEliminar = carrito.find((peli) => peli.titulo === titulo)
    carrito.splice(carrito.indexOf(peliAEliminar),1)
    renderizarCarrito()
}



// const btnAlerta = document.getElementById("btnAlerta")
// const ejemplo = document.getElementById("titulo")

// btnAlerta.addEventListener("click", mostrarAlerta)
// ejemplo.addEventListener("click", () => console.log("Clickeaste el H1"))

// function mostrarAlerta(){
//     alert("Clickeamos el boton que muestra el alert!")
// }


//CODIGO JS
// let inputNombre = document.getElementById("nombre")
// let inputEdad = document.getElementById("edad")

// inputNombre.addEventListener("change", () => {
//     console.log(inputNombre.value)
// })


// inputEdad.addEventListener("input", () => {
//     console.log(inputEdad.value)
// })


// const form = document.getElementById("formulario")


// form.addEventListener("submit", (e) => {
//     crearUsuario(e)
// })



// function crearUsuario(e){
//     e.preventDefault()
    
//     let inputNombre = document.getElementById("nombre")
//     let inputEdad = document.getElementById("edad")
//     let inputEmail = document.getElementById("email")

//     const user = {
//         nombre: inputNombre.value,
//         edad: inputEdad.value,
//         email: inputEmail.value
//     }

//     console.log(user)

//     localStorage.setItem("user", JSON.stringify(user))

//     form.reset()

// }