let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonRow = document.getElementById("pokemonRow");
    let pokemonCard = document.createElement("div");
    pokemonCard.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4", "pokemon-card"); // Set Bootstrap grid classes
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn", "btn-primary", "w-100"); // Add Bootstrap utility classes
    button.setAttribute("data-target", "#modal-container"); // Set data-target attribute
    button.setAttribute("data-toggle", "modal"); // Set data-toggle attribute
    pokemonCard.appendChild(button);
    pokemonRow.appendChild(pokemonCard);
    button.classList.add("rainbow-gradient-button");
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight; // Add weight to the item
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      const modalContainer = document.getElementById("modal-container");
      const modalTitle = document.getElementById("modal-title");
      const modalHeight = document.getElementById("modal-height");
      const modalImage = document.getElementById("modal-image");
      const modalClose = document.getElementById("modal-close");

      modalTitle.textContent = "Name: " + item.name;
      modalHeight.textContent = "Height: " + (item.height * 0.328084).toFixed(2) + " ft"; // Convert height to ft
      modalHeight.style.marginTop = "10px"; // Add margin top
      modalHeight.insertAdjacentHTML("beforeend", "<br>Weight: " + (item.weight * 0.220462).toFixed(2) + " lbs"); // Convert weight to lbs

      modalImage.setAttribute("src", item.imageUrl);
      modalImage.setAttribute("alt", item.name);

      modalClose.addEventListener("click", function () {
        modalContainer.style.display = "none";
      });

      modalContainer.style.display = "block";
    });
  }

  // Function to filter the Pokémon list based on the search query
  function filterPokemonList(searchQuery) {
    let filteredList = pokemonList.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    displayPokemonList(filteredList);
  }

  // Function to display the filtered Pokémon list
  function displayPokemonList(pokemonList) {
    let pokemonRow = document.getElementById("pokemonRow");
    pokemonRow.innerHTML = ""; // clear previous list

    pokemonList.forEach(function (pokemon) {
      addListItem(pokemon);
    });
  }

  // Add an event listener to the search bar
  document.getElementById("searchInput").addEventListener("input", function () {
    filterPokemonList(this.value);
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
