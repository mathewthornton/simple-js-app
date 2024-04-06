let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');


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

    // opens modal w/ pokemon information when button is clicked
    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            modalContainer.innerHTML = '';

            let modal = document.createElement('div');
            modal.classList.add('modal');

            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';
            closeButtonElement.addEventListener('click', hideDetails);

            let titleElement = document.createElement('h1');
            titleElement.innerText = pokemon.name;

            let imageElement = document.createElement('img');
            imageElement.src = pokemon.imageUrl;

            let heightElement = document.createElement('p');
            heightElement.innerText = 'Height: ' + pokemon.height + 'm';
            
            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(imageElement);
            modal.appendChild(heightElement);
            modalContainer.appendChild(modal);

            modalContainer.classList.add('is-visible');

        });
    }

    function hideDetails() {
        modalContainer.classList.remove('is-visible');
    }

    // closes modal when esc key is pressed
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideDetails();
        }
    });

    // closes modal when user clicks on modal container (outside modal)
    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
            hideDetails();
        }
    });


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
