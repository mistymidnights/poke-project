const container = document.querySelector('.pokemon-container');
const pokemon_number = 151;

const fetchPokemons = async () => {
    for (let i = 1; i < pokemon_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id.toString()
    const result = await fetch(url)
    const pokemon = await result.json();
    createPokemonCard(pokemon)
}

const createPokemonCard = (pokemon) => {
    const {name, types, sprites, id} = pokemon;
    const type = types[0].type.name
    const pokemonElement = document.createElement('div')
    pokemonElement.classList.add('pokemon')
    const pokemonToHtml = `
    <h3>${id}</h3>
    <div class="text">
        <h2>${name}</h2>
        <h4>${type}</h4>
    </div>
    <div class="image-container">
        <img src="${sprites.other.home.front_default}" alt="${name}"/>
    </div>
    `
    container.appendChild(pokemonElement)
    pokemonElement.innerHTML = pokemonToHtml
}

fetchPokemons()