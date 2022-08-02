const url = 'https://pokeapi.co/api/v2/pokemon/';
const container = document.querySelector('.pokemon-container');
const btnAll = document.querySelector ('#all');
const btnWATER = document.querySelector ('#water');
const btnFIRE = document.querySelector ('#fire');
const allButtons = document.querySelectorAll('button')
const allButtonsResolve = [...allButtons]
const pokemonList = [];

console.log(allButtonsResolve)


//1 init
const init = async () =>{
    await getPokemon();
    mapPokemons(pokemonList);
}

//2 get
const getPokemon = async () =>{
    for (let index = 1; index < 151; index++) {
        const result = await fetch (`${url}${index}`)
        const data = await result.json()
        pokemonList.push(data);
    }
};


//3 map
const mapPokemons = (list) =>{
    mappedPokemons = list.map((element)=>({
        name: element.name,
        id: element.id,
        type: element.types[0].type.name,
        image: element.sprites.other.home.front_default,
    }));
    printPokemons(mappedPokemons);
};


//4 print

const printPokemons = (list) =>{
    container.innerHTML = '';
    for (const pokemon of list) {
        const pokemonElement =  `
        <div class="POKEMONCARD">
            <div class="front ${pokemon.type}">
                <h3>${pokemon.id}</h3>
                <div class="text">
                    <h2>${pokemon.name}</h2>
                    <h4>${pokemon.type}</h4>
                </div>
                <div class="image-container">
                    <img src="${pokemon.image}" alt="${pokemon.name}"/>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += pokemonElement;
    };
};


const filterPokemons = (id) =>{
    const filteredPokemons = mappedPokemons.filter(
        (pokemon) => pokemon.type == id
    );
    printPokemons(filteredPokemons);
};

btnAll.addEventListener('click', init)

init();