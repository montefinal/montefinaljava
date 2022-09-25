document.querySelector('#boton').addEventListener('click', guardarTeam);
document.querySelector('#botonEliminar').addEventListener('click', eliminarTeam);
agregarLista ();


function guardarTeam() {
    var sNombre = document.querySelector("#txtName").value;
        sP1 = document.querySelector("#txtP1").value;
        sP2 = document.querySelector("#txtP2").value;
        sP3 = document.querySelector("#txtP3").value;
        sP4 = document.querySelector("#txtP4").value;
        sP5 = document.querySelector("#txtP5").value;
        sP6 = document.querySelector("#txtP6").value;

    addPokemon(sNombre,sP1,sP2,sP3,sP4,sP5,sP6);
    agregarLista ()
}

function eliminarTeam() {
    tbody = document.querySelector('#pokeTable tbody');

        tbody.innerHTML = '';
}

function agregarLista (){
    var list = obtLista();
        tbody = document.querySelector('#pokeTable tbody');

        tbody.innerHTML = '';
        

    for (var i = 0; i < list.length; i++ ) {
        var row = tbody.insertRow(i);
        var nameCell = row.insertCell(0);
            poke1Cell = row.insertCell(1);
            poke2Cell = row.insertCell(2);
            poke3Cell = row.insertCell(3);
            poke4Cell = row.insertCell(4);
            poke5Cell = row.insertCell(5);
            poke6Cell = row.insertCell(6);
            //selectCell = row.insertCell(7);

        nameCell.innerHTML = list[i].nombre;
        poke1Cell.innerHTML = list[i].pokemon1;
        poke2Cell.innerHTML = list[i].pokemon2;
        poke3Cell.innerHTML = list[i].pokemon3;
        poke4Cell.innerHTML = list[i].pokemon4;
        poke5Cell.innerHTML = list[i].pokemon5;
        poke6Cell.innerHTML = list[i].pokemon6;

        //var inputSelect = document.createElement ('input');
        //inputSelect.type ='radio'
        //inputSelect.value = list[i].nombre;
        //selectCell.appendChild(inputSelect);

        tbody.appendChild(row);
    }

}
