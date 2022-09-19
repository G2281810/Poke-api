document.addEventListener("DOMContentLoaded", function(){
    dataPokemon();
})

function dataPokemon () {
    const flex = document.querySelector('.flex');
    const container = document.querySelector('#container').content;

    const idRandom = (max,min) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }
        const id = idRandom(1,151);
        const api_url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        
        fetch(api_url).then(function (response){

            return response.json();
            
        }).then(function (pokemon) {
            container.querySelector('.card-body-img').setAttribute('src', pokemon.sprites.other.dream_world.front_default);
            container.querySelector('.card-body-title').innerHTML= `${pokemon.name}`;
            const containerClone = container.cloneNode(container);
            flex.innerHTML = '';
            flex.appendChild(containerClone);
        }).catch(function (error){
            console.log(error);
        });
}

setInterval(dataPokemon,30000);

function changePokemon(){
    const flex = document.querySelector('.flex');
    const container = document.querySelector('#container').content;

    const idRandom = (max,min) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const id = idRandom(1,151);
    const api_url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(api_url).then(function (response) {
        return response.json();
    }).then(function (pokemon){
        container.querySelector('.card-body-img').setAttribute('src', pokemon.sprites.other.dream_world.front_default);
        container.querySelector('.card-body-title').innerHTML= `${pokemon.name}`;
        const containerClone = container.cloneNode(container);
        flex.innerHTML = '';
        flex.appendChild(containerClone);
    }).catch(function (error){
        console.log(error);
    })
}

