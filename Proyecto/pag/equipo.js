localStorage.clear()
const gen1 = ["Bulbasaur", "Charmander", "Squirtle"]
localStorage.setItem("team1", JSON.stringify(gen1));

const gen2 = ["Chikorita", "Cyndaquil", "Totodile"]
localStorage.setItem("team2", JSON.stringify(gen2));

const gen3 = ["Treecko", "Torchic", "Mudkip"]
localStorage.setItem("team3", JSON.stringify(gen3));


const equipo1 = JSON.parse(localStorage.getItem("team1"));
console.log(equipo1)

let gene1 = document.getElementById("gen1");
let gene2 = document.getElementById("gen2");
let gene3 = document.getElementById("gen3");
let equipotexto = document.getElementById("equipo");

gene1.onclick = () => {
    equipo.innerText = localStorage.getItem("team1")
}

gene2.onclick = () => {
    equipo.innerText = localStorage.getItem("team2")
}

gene3.onclick = () => {
    equipo.innerText = localStorage.getItem("team3")
}