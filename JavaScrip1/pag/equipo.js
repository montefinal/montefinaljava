const equipo = [];
let cantidadPokemons = parseInt(prompt("Ingresa la cantidad de pokemones de tu equipo"));

class Pokemon {
    constructor(pokemon, nombre){
        this.pokemon = pokemon;
        this.nombre = nombre;
    }
}

function agregarPokemon(array, cantidadPokemons) {

    for(let i =0; i< cantidadPokemons; i++){
    let elPokemon = prompt("Ingresa el Pokemon")
    let nombreDePokemon = prompt("Ingresa el nombre del Pokemon")
    array.push(new Pokemon(elPokemon,nombreDePokemon));
    }
}

function mostrarEquipo(array) {
    for(let i =0; i< array.length; i++){
        console.log(array[i].pokemon + ": " + array[i].nombre);
    }
}

agregarPokemon(equipo, cantidadPokemons);
mostrarEquipo(equipo);