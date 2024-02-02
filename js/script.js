let pokemonList = [
    {name: 'Charizard', height: 1.7, type: ['fire', 'flying']},
    {name: 'Slowking', height: 2, type: ['psychic', 'water']},
    {name: 'Jynx', height: 1.4, type: ['psychic', 'ice']},
    {name: 'Exeggutor', height: 2, type: ['psychic', 'grass']},
    {name: 'Dragonite', height: 2.2, type: ['dragon', 'flying']},
    {name: 'Gengar', height: 1.5, type: ['ghost', 'poison']}
];


for (let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height > 2) {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - WOAH that\'s big! </p>')
    } else {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</p>')
    }
}