var pokeList = [];

function addPokemon(pname, pp1, pp2, pp3, pp4, pp5, pp6){

var newTeam = {
    nombre : pname,
    pokemon1 : pp1,
    pokemon2 : pp2,
    pokemon3 : pp3,
    pokemon4 : pp4,
    pokemon5 : pp5,
    pokemon6 : pp6
    };
    console.log(newTeam);
    pokeList.push(newTeam);
    localStoragePokeList(pokeList);
}

//Listas quedan guardadas pero no escritas en el html//

function obtLista () {
    var listaGuardada = localStorage.getItem('localPokeList');
    if(listaGuardada == null){
       pokeList = [];
    }else{
        pokeList = JSON.parse(listaGuardada);
    }
    return pokeList;
}

function localStoragePokeList (plist) {
  localStorage.setItem('localPokeList', JSON.stringify(plist));
}
