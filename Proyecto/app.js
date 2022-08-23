var normal = document.getElementById("normal");
var fuego = document.getElementById("fuego");
var agua = document.getElementById("agua");
var planta = document.getElementById("planta");
var electrico = document.getElementById("electrico");
var hielo = document.getElementById("hielo");
var lucha = document.getElementById("lucha");
var veneno = document.getElementById("veneno");
var tierra = document.getElementById("tierra");
var volador = document.getElementById("volador");
var psiquico = document.getElementById("psiquico");
var bicho = document.getElementById("bicho");
var roca = document.getElementById("roca");
var fantasma = document.getElementById("fantasma");
var dragon = document.getElementById("dragon");
var siniestro = document.getElementById("siniestro");
var acero = document.getElementById("acero");
var hada = document.getElementById("hada");

var superEficaz = document.getElementById("muy");
var pocoEficaz = document.getElementById("poco");
var sinEfecto = document.getElementById("nulo");
var vulnerable = document.getElementById("vulne");

var rest = document.getElementById("reset");

normal.onclick = () => {
    muy.innerText ="Ninguno"
    poco.innerText ="Roca, Acero",
    nulo.innerText ="Fantasma",
    vulne.innerText ="Lucha"
}

fuego.onclick = () => {
    muy.innerText ="Planta, Hielo, Bicho, Acero"
    poco.innerText ="Fuego, Agua, Roca, Dragón",
    nulo.innerText ="---",
    vulne.innerText ="Agua, Tierra, Roca"
}

agua.onclick = () => {
    muy.innerText ="Fuego, Tierra, Roca"
    poco.innerText ="Agua, Planta, Volador",
    nulo.innerText ="---",
    vulne.innerText ="Planta, Electrico"
}

planta.onclick = () => {
    muy.innerText ="Agua, Tierra, Roca"
    poco.innerText ="Fuego, Planta, Volador, Veneno, Bicho, Dragon, Acero",
    nulo.innerText ="---",
    vulne.innerText ="Fuego, Hielo, Veneno, Volador, Bicho"
}

electrico.onclick = () => {
    muy.innerText ="Agua, Volador"
    poco.innerText ="Planta, Electrico, Dragon",
    nulo.innerText ="Tierra",
    vulne.innerText ="Tierra"
}

hielo.onclick = () => {
    muy.innerText ="Planta, Tierra, Volador, Dragón"
    poco.innerText ="Fuego, Agua, Hielo, Acero",
    nulo.innerText ="---",
    vulne.innerText ="Fuego, Lucha, Roca, Acero"
}

lucha.onclick = () => {
    muy.innerText ="Normal, Hielo, Roca, Siniestro, Acero"
    poco.innerText ="Veneno, Volador, Psíquico, Bicho, Hada",
    nulo.innerText ="Fantasma",
    vulne.innerText ="Volador, Psíquico, Hada"
}

veneno.onclick = () => {
    muy.innerText ="Planta, Hada"
    poco.innerText ="Veneno, Tierra, Roca, Fantasma",
    nulo.innerText ="Acero",
    vulne.innerText ="Tierra, Psíquico"
}

tierra.onclick = () => {
    muy.innerText ="Fuego, Eléctrico, Veneno, Roca, Acero"
    poco.innerText ="Planta, Bicho",
    nulo.innerText ="Volador",
    vulne.innerText ="Agua, Planta, Hielo"
}

volador.onclick = () => {
    muy.innerText ="Planta, Lucha, Bicho"
    poco.innerText ="Eléctrico, Roca, Acero",
    nulo.innerText ="---",
    vulne.innerText ="Eléctrico, Hielo, Roca"
}

psiquico.onclick = () => {
    muy.innerText ="Lucha, Veneno"
    poco.innerText ="Psíquico, Acero",
    nulo.innerText ="Siniestro",
    vulne.innerText ="Bicho, Fantasma, Siniestro"
}

bicho.onclick = () => {
    muy.innerText ="Planta, Psíquico, Siniestro"
    poco.innerText ="Fuego, Lucha, Veneno, Volador, Fantasma, Acero, Hada",
    nulo.innerText ="---",
    vulne.innerText ="Volador, Roca, Fuego"
}

roca.onclick = () => {
    muy.innerText ="Fuego, Hielo, Volador, Bicho"
    poco.innerText ="Lucha, Tierra, Acero",
    nulo.innerText ="---",
    vulne.innerText ="Agua, Planta, Lucha, Tierra, Acero"
}

fantasma.onclick = () => {
    muy.innerText ="Psíquico, Fantasma"
    poco.innerText ="Normal, Siniestro",
    nulo.innerText ="Normal",
    vulne.innerText ="Fantasma, Siniestro"
}

dragon.onclick = () => {
    muy.innerText ="Dragon"
    poco.innerText ="Acero",
    nulo.innerText ="Hada",
    vulne.innerText ="Hielo, Dragón, Hada"
}

siniestro.onclick = () => {
    muy.innerText ="Psíquico, Fantasma"
    poco.innerText ="Lucha, Siniestro, Hada",
    nulo.innerText ="---",
    vulne.innerText ="Lucha, Bicho, Hada"
}

acero.onclick = () => {
    muy.innerText ="Hielo, Roca, Hada"
    poco.innerText ="Fuego, Agua, Eléctrico, Acero",
    nulo.innerText ="---",
    vulne.innerText ="Fuego, Lucha, Tierra"
}

hada.onclick = () => {
    muy.innerText ="Lucha, Dragón, Siniestro"
    poco.innerText ="Fuego, Veneno, Acero",
    nulo.innerText ="---",
    vulne.innerText ="Veneno, Acero"
}

reset.onclick = () => {
    muy.innerText =""
    poco.innerText ="",
    nulo.innerText ="",
    vulne.innerText =""
}




