let tocar = document.getElementById("tocar");
let pokeale = document.getElementById("pokeale");


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
    const ramdom = getRandomInt(1, 152)
    fetchData(ramdom)
})

const fetchData = async (id) => {
    try {
        console.log(id)
        
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        
        console.log(data)
        console.log(data.name)
        pokeale.innerText = (data.name)

    } catch (error) {
        console.log(error)
    }
} 

tocar.onclick = (fetchData)

tocar.onclick = () => {
    pokeale.innerText = (data.name)
}









