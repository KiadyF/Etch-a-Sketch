const conteneur = document.querySelector(".container")
let nombreCarre = parseInt(document.querySelector("input").value)
const button = document.querySelector("button")
let coteConteneur = conteneur.clientWidth
let coteCarre = (coteConteneur - (nombreCarre - 2)) / nombreCarre
let div
let row

function genererCouleur() {
    let r = Math.floor(Math.random() * 255) + 1
    let g = Math.floor(Math.random() * 255) + 1
    let b = Math.floor(Math.random() * 255) + 1
    return `rgb(${r},${g},${b})`
}

button.addEventListener("click", () => {
    nombreCarre = parseInt(document.querySelector("input").value)
    if (document.querySelector("input").value === '') {
        alert("Il faut entre le nombre du carré que vous voulez")
    }
    else {
        coteCarre = Math.floor((coteConteneur - 10 - (nombreCarre - 2)) / nombreCarre)
        for (let i = 0; i < nombreCarre; i++) {
            row = document.createElement("div")
            row.classList.add("row")
            row.style.height = coteCarre
            for (let i = 0; i < nombreCarre; i++) {
                div = document.createElement("div")
                div.style.width = coteCarre.toString() + 'px'
                div.style.height = coteCarre.toString() + 'px'
                div.addEventListener("mouseleave", function () {
                    if (this.style.backgroundColor === '') {
                        this.style.backgroundColor = genererCouleur()
                        this.style.opacity = '0.1'
                    } else {
                        this.style.opacity = eval(`${this.style.opacity} + 0.1`)
                    }
                })
                row.appendChild(div)

            }
            conteneur.appendChild(row)
        }
    }
})


