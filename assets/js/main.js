
let submit = document.querySelector('#submitBtn');
let pokeCard = document.querySelector('#pokeCard');


let openBall = document.querySelector('#open');
// let pokemonBase ;
openBall.addEventListener('click', () => {
    document.querySelector("#pokeCard").innerHTML = "";
    document.querySelector('#playerAnswer').value= '';
getPokemon()
});

async function getPokemon() {
    let pokemonNbr = Math.floor(Math.random() * 1008);
    console.log(pokemonNbr);
    let pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNbr}`)
           pokemonRes = await pokemonRes.json();
           display(pokemonRes);
                    
                               
}

function display(pokemon) {
    pokemonBase = pokemon;
                   // parent.innerHTML = '';
                    let pokemonCard = document.createElement('div');
                    let parent = document.querySelector("#pokeCard");
                    pokemonCard.classList.add('card');
                    parent.appendChild(pokemonCard);
                    let pokeImg = document.createElement('img');
                    pokeImg.src = pokemon.sprites.back_shiny;
                    pokeImg.classList.add('pokeImg');
                    pokemonCard.appendChild(pokeImg); 
                    console.log(pokemon.name);
                    let logoImg = document.createElement('img');
                    logoImg.classList.add('logo');
                    logoImg.src = "./assets/img/logo.png";
                    pokemonCard.appendChild(logoImg);
    // Stocker la fonction anonyme dans une variable nommée submitHandler
    let submitHandler = function() {
        compare(pokemon);
        submit.removeEventListener('click', submitHandler);
    };

    submit.addEventListener('click', submitHandler);


 
}

function compare(pokemonBase) {
    let playerAnswer = document.querySelector('#playerAnswer').value;
    let  = document.querySelector('.display-answer');
if (playerAnswer === pokemonBase.name) {
    

let parent = document.querySelector("#pokeCard");
parent.innerHTML = '';
    let pokemonCard = document.createElement('div');
    pokemonCard.classList.add('card');
    parent.appendChild(pokemonCard);
    let pokeImg = document.createElement('img');
    pokeImg.classList.add('pokeImg');
    pokeImg.src = pokemonBase.sprites.front_shiny;
    pokemonCard.appendChild(pokeImg);
    let logoImg = document.createElement('img');
    logoImg.classList.add('logo');
    logoImg.src = "./assets/img/logo.png";
    pokemonCard.appendChild(logoImg);
    let displayAnswer = document.createElement('div');
    displayAnswer.classList.add('display-answer');
    parent.appendChild(displayAnswer);
    let goodAnswer = document.createElement('p');
    goodAnswer.textContent = `Bravo! C'est bien ${pokemonBase.name}! Lancez une nouvelle Pokéball!`;
    displayAnswer.appendChild(goodAnswer);
}else{
    let parent = document.querySelector("#pokeCard");
    let displayAnswer = document.createElement('div');
    displayAnswer.classList.add('display-answer');
    parent.appendChild(displayAnswer);
    let badAnswer = document.createElement('p');
    badAnswer.textContent = `Perdu! C'était ${pokemonBase.name}! Lancez une nouvelle Pokéball!`;
    displayAnswer.appendChild(badAnswer);
}
}










// // appel API méthode .then

// async function getPokemon(name) {
//     let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     pokemons = await pokemons.json()
//     console.log(pokemons)
    
// }
// // appel API méthode async await









