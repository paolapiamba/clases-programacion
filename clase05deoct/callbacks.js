const cuandoLLegueElpoquemon = (pokemon) => {
    console.log(pokemon.sprites.front_default)
    const image = document.getElementById("pokemon-image")
    image.src = pokemon.sprites.front_default
}

const pokemonName = prompt('elige tu pokemon:')

fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
    .then(response => response.json())
    .then(cuandoLLegueElpoquemon);