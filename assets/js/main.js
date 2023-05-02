
let pokemon = document.querySelector('#pokemon');
let submit = document.querySelector('#submitBtn');


submit.addEventListener('click', () => {
    getPokemon(pokemon.value);
})




function getPokemon(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(data => {
            data.json()
                .then(res => {   
                    console.log(res);     
                    let parent = document.querySelector("#pokeCard");
                   // parent.innerHTML = '';
                    let pokemonCard = document.createElement('div');
                    pokemonCard.classList.add('card');
                    parent.appendChild(pokemonCard);
                    let pokenName = document.createElement('h2');
                    pokenName.textContent = res.name;
                    pokemonCard.appendChild(pokenName);
                    let pokeImg = document.createElement('img');
                    pokeImg.src = res.sprites.front_shiny;
                    pokemonCard.appendChild(pokeImg);
                    let pokeInfo = document.createElement('p');
                    pokeInfo.textContent = res.types[0].type.name;
                    pokemonCard.appendChild(pokeInfo);
                    let pokeAbilities = document.createElement('p');
                    pokeAbilities.textContent = res.abilities[0].ability.name;
                    pokemonCard.appendChild(pokeAbilities);
                    let pokeAbilitiesTwo = document.createElement('p');
                    pokeAbilitiesTwo.textContent = res.abilities[1].ability.name;
                    pokemonCard.appendChild(pokeAbilitiesTwo);
                    let pokeStats = document.createElement('p');
                    pokeStats.textContent = res.stats[0].base_stat;
                    pokemonCard.appendChild(pokeStats);
                    let pokeMoves = document.createElement('p');
                    pokeMoves.textContent = res.moves[0].move.name;
                    pokemonCard.appendChild(pokeMoves);
                    let pokeMovesTwo = document.createElement('p');
                    pokeMovesTwo.textContent = res.moves[1].move.name;
                    pokemonCard.appendChild(pokeMovesTwo);
                    let pokeMovesThree = document.createElement('p');
                    pokeMovesThree.textContent = res.moves[2].move.name;
                    pokemonCard.appendChild(pokeMovesThree);
                    
                })
        })
}







// // appel API méthode .then

// async function getPokemon(name) {
//     let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//     pokemons = await pokemons.json()
//     console.log(pokemons)
    
// }
// // appel API méthode async await









