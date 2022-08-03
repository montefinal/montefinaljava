const pokemons = [
    { id:1, nombre: "Pikachu", tipo: Electrico},
    { id:2, nombre: "Bulbasaur", tipo: Planta},
    { id:3, nombre: "Charmander", tipo: Fuego},
    { id:4, nombre: "Squirtle", tipo: Agua}
];

for (const pokemon of pokemons) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ID: ${pokemon.id}</h3>
                            <p> Pokemon: ${pokemon.nombre}</p>
                            <b> ${pokemon.tipo}</b>` ;
        document.body.appendChild(contenedor);
} 