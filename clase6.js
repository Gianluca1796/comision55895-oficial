// function mayorQue(n){
//     return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10)
// // let mayorQueDiez = (m) => m > 10

// console.log(mayorQueDiez(12))
// console.log(mayorQueDiez(2))

const numeros = [1, 2, 3, 4, 5];
// const numerosDuplicados = []

// function porCadaUno(array,funcion){
//     for(let i = 0; i < array.length; i++){
//         funcion(array[i])
//     }
// }

// porCadaUno(numeros,console.log)
// porCadaUno(numeros,(num) => {
//     numerosDuplicados.push(num * 2)
// })
// console.log(numerosDuplicados)

//EJEMPLO FOREACH
numeros.forEach((num) => {
    console.log(num * 2);
    // console.log(numero)
});

//EJEMPLO FIND

const cursos = [
    {
        nombre: "Desarrollo Web",
        precio: 110000,
        categoria: "Programacion"
    },
    {
        nombre: "JavaScript",
        precio: 120000,
        categoria: "Programacion"
    },
    {
        nombre: "React JS",
        precio: 140000,
        categoria: "Programacion"
    },
    {
        nombre: "Next JS",
        precio: 90000,
        categoria: "Programacion"
    },
    {
        nombre: "Marketing de Redes",
        precio: 100000,
        categoria: "Marketing"
    },
    {
        nombre: "Facebook ADS",
        precio: 150000,
        categoria: "Marketing"
    },
];

// cursos.forEach((curso) => {
//     console.log(curso.nombre)
//     // Crear HTML para cada curso, que muestre el nombre, el precio y la categoria

    
// })
// // let cursoABuscar = prompt("Que categoria deseas ver")
// const cursoEncontrado = cursos.find((curso) => curso.categoria === "Publicidad")
// console.log(cursoEncontrado)

// const cursosEncontrados = cursos.filter((curso) => curso.categoria === "Publicidad")
// console.log(cursosEncontrados.nombre)

// const existe = cursos.some((curso) => curso.nombre == "Unreal Engine 5")
// console.log(existe)
// // if(existe){
// //     alert("El curso existe!!!")
// // }else{
// //     alert("el curso no existe aun")
// // }

// const arrayNombres = cursos.map((curso) => curso.nombre)
// console.log(arrayNombres)

// const porcentajeDeAumento = 1.25

// const cursosConAumento = cursos.map((curso) => {

//     return {
//         nombre: curso.nombre,
//         precio: curso.precio * porcentajeDeAumento,
//         categoria: curso.categoria
//     }

// })

// console.table(cursos)
// console.table(cursosConAumento)



// const totalCompra = cursos.reduce((acc,ite) => acc + ite.precio, 0)
// console.log(totalCompra)


// cursos.sort((objetoA,objetoB) => {
//     if(objetoA.precio < objetoB.precio){
//         return -1
//     }else if(objetoA.precio > objetoB.precio){
//         return 1
//     }else{
//         return 0
//     }
// })

// console.table(cursos)


// const cursosPorCategoria = cursos.reduce((agrupados,curso) => {

//     const { categoria } = curso

//     if(!agrupados[categoria]){
//         agrupados[categoria] = []
//     }
//     agrupados[categoria].push(curso)
//     return agrupados

// },{})

// console.log(cursosPorCategoria)


const cursosMasBaratos = cursos.filter((curso) => curso.precio <= 100000)
console.table(cursosMasBaratos)

const cursoDesarrolo = cursos.find((curso) => curso.nombre === "Desarrollo Web")
console.log(cursoDesarrolo)

const cursosDeJS = cursos.filter((curso) => curso.nombre.includes("JS"))
console.log(cursosDeJS)

if(cursosDeJS.length > 0){
    alert("hay cursos de JS")   
}else{
    alert("no hay cursos de JS")
}