// 1.1
const divVacio = document.createElement("div")
document.body.appendChild(divVacio)


// 1.2
const divConP = document.createElement("div")
const p = document.createElement("p")
divConP.appendChild(p)
document.body.appendChild(divConP)


// 1.3
const divCon6P = document.createElement("div")
for (let i = 0; i < 6; i++) {
  const p = document.createElement("p")
  divCon6P.appendChild(p)
}
document.body.appendChild(divCon6P)


// 1.4
const pDinamico = document.createElement("p")
pDinamico.textContent = "Soy dinámico!"
document.body.appendChild(pDinamico)


// 1.5
const h2 = document.querySelector(".fn-insert-here")
h2.textContent = "Wubba Lubba dub dub"


// 1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement("ul")
for (const app of apps) {
  const li = document.createElement("li")
  li.textContent = app
  ul.appendChild(li)
}
document.body.appendChild(ul)


// 1.7
const elementosEliminar = document.querySelectorAll(".fn-remove-me")
for (const elemento of elementosEliminar) {
  elemento.remove()
}


// 1.8
const divs = document.querySelectorAll("body > div")
const pMedio = document.createElement("p")
pMedio.textContent = "Voy en medio!"
divs[1].before(pMedio)


// 1.9
const divsInsertHere = document.querySelectorAll(".fn-insert-here")
for (const div of divsInsertHere) {
  const pDentro = document.createElement("p")
  pDentro.textContent = "Voy dentro!"
  div.appendChild(pDentro)
}