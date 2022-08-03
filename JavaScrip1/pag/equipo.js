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

//ARRAYS
//Inludes
const elementos = ["Fuego", "Agua", "Electrico", "Lucha", "Planta"]

console.log( elementos.includes ("Fuego"))
console.log( elementos.includes ("Agua"))
console.log( elementos.includes ("Electrico"))
console.log( elementos.includes ("Lucha"))
console.log( elementos.includes ("Psiquico"))
console.log( elementos.includes ("Planta"))
console.log( elementos.includes ("Hada"))

//Indexof
console.log( elementos.indexOf ("Agua"))
console.log( elementos.indexOf ("Fuego"))
console.log( elementos.indexOf ("Electrico"))
console.log( elementos.indexOf ("Planta"))
console.log( elementos.indexOf ("Lucha"))

//Slice
const pokemonDosTipos = elementos.slice(2, 4);




