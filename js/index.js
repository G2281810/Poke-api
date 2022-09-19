document.addEventListener("DOMContentLoaded", function () {
    pokemonData();
});

function pokemonData(){
    const idRandom = (max,min) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    setInterval(function() {
        const id = idRandom(1,151);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(function(response){
            return response.json();
        }).then(function (pokemon) {
            console.log('img',document.getElementById("img").src = pokemon.sprites.other.dream_world.front_default);
        })
    },5000);
    
}

