const pokeimg = document.getElementById("pokeimg");
const pokename = document.getElementById("pokename");
const poketipo1 = document.getElementById("poketipo1");
const poketipo2 = document.getElementById("poketipo2");






const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => PokemonData(response))
}

const PokemonData = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;
    console.log(data)

    pokeimg.setAttribute('src', sprite);
    pokename.textContent = data.name .toUpperCase();
    poketipo1.textContent =types[0].type.name; 
    //poketipo2.textContent =types[1].type.name;      //metira error//             
    
}
