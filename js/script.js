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

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");

        // calls showDetails function when button is clicked
        button.addEventListener('click', function() {
            showDetails(pokemon);});
        
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

pokemonRepository.add({name: 'Pikachu', height: 1.1, type: 'electric'});
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);

});

