const image = document.querySelector(".random-image")

const randomPokemon = Math.floor(Math.random() * 151) + 1

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then(response => response.json())
    .then(pokemon => {
        image.src = pokemon.sprites.front_default
    })