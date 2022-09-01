let normal = document.getElementById("normal");
let fuego = document.getElementById("fuego");
let agua = document.getElementById("agua");
let planta = document.getElementById("planta");
let electrico = document.getElementById("electrico");
let hielo = document.getElementById("hielo");
let lucha = document.getElementById("lucha");
let veneno = document.getElementById("veneno");
let tierra = document.getElementById("tierra");
let volador = document.getElementById("volador");
let psiquico = document.getElementById("psiquico");
let bicho = document.getElementById("bicho");
let roca = document.getElementById("roca");
let fantasma = document.getElementById("fantasma");
let dragon = document.getElementById("dragon");
let siniestro = document.getElementById("siniestro");
let acero = document.getElementById("acero");
let hada = document.getElementById("hada");

let superEficaz = document.getElementById("muy");
let pocoEficaz = document.getElementById("poco");
let sinEfecto = document.getElementById("nulo");
let vulnerable = document.getElementById("vulne");

let rest = document.getElementById("reset");

normal.onclick = () => {
    muy.innerText ="Ninguno"
    poco.innerText ="Roca, Acero",
    nulo.innerText ="Fantasma",
    vulne.innerText ="Lucha"
    Swal.fire('Pokemones tipo Normal')
}

fuego.onclick = () => {
    muy.innerText ="Planta, Hielo, Bicho, Acero"
    poco.innerText ="Fuego, Agua, Roca, Dragón",
    nulo.innerText ="---",
    vulne.innerText ="Agua, Tierra, Roca"
    Swal.fire('Pokemones tipo Fuego')
}

agua.onclick = () => {
    muy.innerText ="Fuego, Tierra, Roca"
    poco.innerText ="Agua, Planta, Volador",
    nulo.innerText ="---",
    vulne.innerText ="Planta, Electrico"
    Swal.fire('Pokemones tipo Agua')
}

planta.onclick = () => {
    muy.innerText ="Agua, Tierra, Roca"
    poco.innerText ="Fuego, Planta, Volador, Veneno, Bicho, Dragon, Acero",
    nulo.innerText ="---",
    vulne.innerText ="Fuego, Hielo, Veneno, Volador, Bicho"
    Swal.fire('Pokemones tipo Planta')
}

electrico.onclick = () => {
    muy.innerText ="Agua, Volador"
    poco.innerText ="Planta, Electrico, Dragon",
    nulo.innerText ="Tierra",
    vulne.innerText ="Tierra"
    Swal.fire('Pokemones tipo Electrico')
}

hielo.onclick = () => {
    muy.innerText ="Planta, Tierra, Volador, Dragón"
    poco.innerText ="Fuego, Agua, Hielo, Acero",
    nulo.innerText ="---",
    vulne.innerText ="Fuego, Lucha, Roca, Acero"
    Swal.fire('Pokemones tipo Hielo')
}

lucha.onclick = () => {
    muy.innerText ="Normal, Hielo, Roca, Siniestro, Acero"
    poco.innerText ="Veneno, Volador, Psíquico, Bicho, Hada",
    nulo.innerText ="Fantasma",
    vulne.innerText ="Volador, Psíquico, Hada"
    Swal.fire('Pokemones tipo Lucha')
}

veneno.onclick = () => {
    muy.innerText ="Planta, Hada"
    poco.innerText ="Veneno, Tierra, Roca, Fantasma",
    nulo.innerText ="Acero",
    vulne.innerText ="Tierra, Psíquico"
    Swal.fire('Pokemones tipo Veneno')
}

tierra.onclick = () => {
    muy.innerText ="Fuego, Eléctrico, Veneno, Roca, Acero"
    poco.innerText ="Planta, Bicho",
    nulo.innerText ="Volador",
    vulne.innerText ="Agua, Planta, Hielo"
    Swal.fire('Pokemones tipo Tierra')
}

volador.onclick = () => {
    muy.innerText ="Planta, Lucha, Bicho"
    poco.innerText ="Eléctrico, Roca, Acero",
    nulo.innerText ="---",
    vulne.innerText ="Eléctrico, Hielo, Roca"
    Swal.fire('Pokemones tipo Volador')
}

psiquico.onclick = () => {
    muy.innerText ="Lucha, Veneno"
    poco.innerText ="Psíquico, Acero",
    nulo.innerText ="Siniestro",
    vulne.innerText ="Bicho, Fantasma, Siniestro"
    Swal.fire('Pokemones tipo Psiquico')
}

bicho.onclick = () => {
    muy.innerText ="Planta, Psíquico, Siniestro"
    poco.innerText ="Fuego, Lucha, Veneno, Volador, Fantasma, Acero, Hada",
    nulo.innerText ="---",
    vulne.innerText ="Volador, Roca, Fuego"
    Swal.fire('Pokemones tipo Bicho')
}

roca.onclick = () => {
    muy.innerText ="Fuego, Hielo, Volador, Bicho"
    poco.innerText ="Lucha, Tierra, Acero",
    nulo.innerText ="---",
    vulne.innerText ="Agua, Planta, Lucha, Tierra, Acero"
    Swal.fire('Pokemones tipo Roca')
}

fantasma.onclick = () => {
    muy.innerText ="Psíquico, Fantasma"
    poco.innerText ="Normal, Siniestro",
    nulo.innerText ="Normal",
    vulne.innerText ="Fantasma, Siniestro"
    Swal.fire('Pokemones tipo Fantasma')
}

dragon.onclick = () => {
    muy.innerText ="Dragon"
    poco.innerText ="Acero",
    nulo.innerText ="Hada",
    vulne.innerText ="Hielo, Dragón, Hada"
    Swal.fire('Pokemones tipo Dragon')
}

siniestro.onclick = () => {
    muy.innerText ="Psíquico, Fantasma"
    poco.innerText ="Lucha, Siniestro, Hada",
    nulo.innerText ="---",
    vulne.innerText ="Lucha, Bicho, Hada"
    Swal.fire('Pokemones tipo Siniestro')
}

acero.onclick = () => {
    muy.innerText ="Hielo, Roca, Hada"
    poco.innerText ="Fuego, Agua, Eléctrico, Acero",
    nulo.innerText ="---",
    vulne.innerText ="Fuego, Lucha, Tierra"
    Swal.fire('Pokemones tipo Acero')
}

hada.onclick = () => {
    muy.innerText ="Lucha, Dragón, Siniestro"
    poco.innerText ="Fuego, Veneno, Acero",
    nulo.innerText ="---",
    vulne.innerText ="Veneno, Acero"
    Swal.fire('Pokemones tipo Hada')
}

reset.onclick = () => {
    muy.innerText =""
    poco.innerText ="",
    nulo.innerText ="",
    vulne.innerText =""
}




