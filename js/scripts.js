let pokemonRepository = (function () {
    let repository = [
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
  
    function add(pokemon) {
        if (
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "height" in pokemon &&
          "types" in pokemon
        ) {
          repository.push(pokemon);
        } else {
          console.log("pokemon is not correct");
        }
      }
      function getAll() {
        return repository;
      }
      function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        button.addEventListener("click", function () {
            console.log(pokemon.name + " was clicked!");
        });
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
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
    
    pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });
    
    console.log(pokemonRepository.getAll());
    
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });