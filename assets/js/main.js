
let submit = document.querySelector('#submitBtn');
let pokeCard = document.querySelector('#pokeCard');
let isLoading = false;

let openBall = document.querySelector('#open');
// let pokemonBase ;
openBall.addEventListener('click', () => {
    document.querySelector("#pokeCard").innerHTML = "";
    document.querySelector('#playerAnswer').value= '';
getPokemon()
});

async function getPokemon() {
    if (!isLoading) {
        let pokemonNbr = Math.floor(Math.random() * 1008);
        console.log(pokemonNbr);
    isLoading = true;
        let pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNbr}`)
        pokemonRes = await pokemonRes.json();
        display(pokemonRes);
        isLoading = false;      
    }
    
                    
                               
}

function display(pokemon) {
    pokemonBase = pokemon;
                   // parent.innerHTML = '';
                   
                   if (pokemon){
                    pokeCard.style.backgroundColor = 'red';
                    pokeCard.style.border = '5px ridge rgba(0, 0, 255, 0.386)';                    
                   }
                    let pokemonCard = document.createElement('div');
                    let parent = document.querySelector("#pokeCard");
                    pokemonCard.classList.add('card');
                    parent.appendChild(pokemonCard);
                    let pokeImg = document.createElement('img');
                    pokeImg.src = pokemon.sprites.back_default;
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
    let parent = document.querySelector("#pokeCard");
parent.innerHTML = '';
let pokemonCard = document.createElement('div');
pokemonCard.classList.add('card');
parent.appendChild(pokemonCard);
let pokeImg = document.createElement('img');
pokeImg.classList.add('pokeImg');
pokeImg.src = pokemonBase.sprites.front_default;
pokemonCard.appendChild(pokeImg);
let logoImg = document.createElement('img');
logoImg.classList.add('logo');
logoImg.src = "./assets/img/logo.png";
pokemonCard.appendChild(logoImg);
if (playerAnswer === pokemonBase.name) {
   
    let displayAnswer = document.createElement('div');
    displayAnswer.classList.add('display-answer');
    parent.appendChild(displayAnswer);
    let goodAnswer = document.createElement('p');
    goodAnswer.textContent = `Bravo! C'est bien ${pokemonBase.name}! Lancez une nouvelle Pokéball!`;
    displayAnswer.appendChild(goodAnswer);
}else{
    let displayAnswer = document.createElement('div');
    displayAnswer.classList.add('display-answer');
    parent.appendChild(displayAnswer);
    let badAnswer = document.createElement('p');
    badAnswer.textContent = `Perdu! C'était ${pokemonBase.name}! Lancez une nouvelle Pokéball!`;
    displayAnswer.appendChild(badAnswer);
}
}


// async function test(){

// let test = await fetch ("http://localhost:3000/test");
// test = await test.json();

// console.log(test);
// }

// test();







// // appel API méthode .then

// async function getPokemon(name) {
//     let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     pokemons = await pokemons.json()
//     console.log(pokemons)
    
// }
// // appel API méthode async await


// let openBall = document.querySelector('#open');

// let openHandler = function() {
//     document.querySelector("#pokeCard").innerHTML = "";
//     document.querySelector('#playerAnswer').value= "";
// getPokemon()
// openBall.removeEventListener('click', openHandler);
// };

// openBall.addEventListener('click', openHandler);






