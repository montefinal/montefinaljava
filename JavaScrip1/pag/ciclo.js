let entrada = prompt("Elige tu Pokemon (Bulbasaur, Squiretle o Charmander), para salir ingrese ESC")

while (entrada != "ESC") {
    switch (entrada) {
        case "Bulbasaur":
            alert("Elegiste el Pokemon de Planta!");
            break;
        case "Squirtle":
            alert("Elegiste el Pokemon de Agua!");
            break;
        case "Charmander":
            alert("Elegiste el Pokemon de Fuego!");
            break;
        default:
            alert("Ingresa Pokemon valido")
            break;
    }
    entrada = prompt("Elige tu Pokemon (Bulbasaur, Squiretle o Charmander), para salir ingrese ESC")
}