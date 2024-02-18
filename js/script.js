let pokemonRepository = (function() {
    let pokemonList = [
        {name: 'Charizard', height: 1.7, type: ['fire', 'flying']},
        {name: 'Slowking', height: 2, type: ['psychic', 'water']},
        {name: 'Jynx', height: 1.4, type: ['psychic', 'ice']},
        {name: 'Exeggutor', height: 2, type: ['psychic', 'grass']},
        {name: 'Dragonite', height: 2.2, type: ['dragon', 'flying']},
        {name: 'Gengar', height: 1.5, type: ['ghost', 'poison']}];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

pokemonRepository.add({name: 'Pikachu', height: 1.1, type: 'electric'});

pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height > 2) {
         document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s big!</p>'); }
    else { document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') </p>'); }
});

