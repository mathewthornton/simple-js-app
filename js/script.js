let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    //Adds Pokemon as a button in the page
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");

    // calls showDetails function when button is clicked
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
        
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
          console.log(pokemon);
        });
    }

    //fetches list of pokemon from API
    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function(item) {
                let pokemon = {
                    name: item.name,
                    height: item.height,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function(e) {
            console.error(e);
        })
    }
    //fetches pokemon details from each item in API
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response){
            return response.json();
        }).then(function(details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function(e) {
            console.error(e);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();


// pokemonRepository.add({name: 'Pikachu', height: 1.1, type: 'electric'});
pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);
    });
});

