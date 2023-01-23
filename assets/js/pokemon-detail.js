function clickPokemonCard(pokemonCard){
    console.log(pokemonCard)
    const pokemonClicked = pokemonCard.getElementsByClassName("name")
   console.log(pokemonClicked[0].innerHTML)
   // window.location.href='./pokemonDetail.html'
}

function findPokemon(poke = {}, list = []){
    console.log(poke + ' | ' + list)
    list.find(pokemon => { 
        if (pokemon.name === 'wartortle') {
            pokeApi.getPokemonDetail(pokemon).then(pokemon => console.log(pokemon))
        }
    })
}