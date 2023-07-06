let pokemonRepository = (function () {
    let pokemonList = [
      {
        name: "Charmander",
        height: 0.6,
        type: ["fire"],
      },
      {
        name: "Golbat",
        height: 1.6,
        type: ["poison", "flying"],
      },
      {
        name: "Rhydon",
        height: 1.9,
        type: ["rock", "ground"],
      },
    ];
  
    function getAll() {
      return pokemonList;
    }
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    return {
      getAll: getAll,
      add: add,
    };
  })();
  
  pokemonRepository.getAll().forEach(function (pokemon) {
    let pokemonDetails = pokemon.name + " (height: " + pokemon.height + ")";
  
    if (pokemon.height > 1.7) {
      pokemonDetails += " - Wow, that's big!";
    }
  
    document.write(pokemonDetails + "<br>");
  });
  