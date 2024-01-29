// Parte 1
const colorblue = document.querySelector(".blue")
colorblue.addEventListener("click", function () {
    colorblue.style.backgroundColor = 'black'
})

const colorred = document.querySelector(".red")
colorred.addEventListener("click", function () {
    colorred.style.backgroundColor = 'black'
})

const colorgreen = document.querySelector(".green")
colorgreen.addEventListener("click", function () {
    colorgreen.style.backgroundColor = 'black'
})

const coloryellow = document.querySelector(".yellow")
coloryellow.addEventListener("click", function () {
    coloryellow.style.backgroundColor = 'black'
})

// Parte 2

let presionarTecla = document.getElementById("key")
document.addEventListener("keydown", function (event) {
    if (event.key === "a" || event.key === "A") {
        presionarTecla.style.backgroundColor = 'pink'
    } else if (event.key === "s" || event.key === "S") {
        presionarTecla.style.backgroundColor = 'orange'
    } else if (event.key === "d" || event.key === "D") {
        presionarTecla.style.backgroundColor = 'lightblue'
    }
})

let contenedor1 = document.querySelector(".container3")
let div1 = document.createElement("div")
div1.setAttribute("id", "divUno")
div1.style.height = "200px"
div1.style.width = "200px"
div1.style.borderRadius = "10px"
div1.style.margin = "10px"
div1.style.border = "solid 1px black"
div1.style.backgroundColor = "purple"
div1.style.visibility = "hidden"
contenedor1.appendChild(div1)

let contenedor2 = document.querySelector(".container3")
let div2 = document.createElement("div")
div2.setAttribute("id", "divUno")
div2.style.height = "200px"
div2.style.width = "200px"
div2.style.borderRadius = "10px"
div2.style.margin = "10px"
div2.style.border = "solid 1px black"
div2.style.backgroundColor = "grey"
div2.style.visibility = "hidden"
contenedor2.appendChild(div2)

let contenedor3 = document.querySelector(".container3")
let div3 = document.createElement("div")
div3.setAttribute("id", "divUno")
div3.style.height = "200px"
div3.style.width = "200px"
div3.style.borderRadius = "10px"
div3.style.margin = "10px"
div3.style.border = "solid 1px black"
div3.style.backgroundColor = "brown"
div3.style.visibility = "hidden"
contenedor3.appendChild(div3)

let presionarTecla2 = document.querySelector(".container3")
document.addEventListener("keydown", function (event) {
    if (event.key === "q" || event.key === "Q") {
        div1.style.visibility = "visible"
        div2.style.visibility = "hidden"
        div3.style.visibility = "hidden"
    } else if (event.key === "w" || event.key === "W") {
        div2.style.visibility = "visible"
        div1.style.visibility = "hidden"
        div3.style.visibility = "hidden"
    } else if (event.key === "e" || event.key === "E") {
        div3.style.visibility = "visible"
        div1.style.visibility = "hidden"
        div2.style.visibility = "hidden"
    }
})
