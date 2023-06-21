let pokemonList = [
    {
        name: "Charmander",
        height: 0.6,
        type: ["fire"]
    },
    {
        name: "Golbat",
        height: 1.6,
        type: ["poison", "flying"]
    },
    {
        name: "Rhydon",
        height: 1.9,
        type: ["rock", "ground"]
    },
    ];
  
for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];
    let output = pokemon.name + " (height: " + pokemon.height + ")";
    
    // Check if the height is above a certain value and add a special note
    if (pokemon.height > 1.5) {
        output += " - Wow, that's big!";
    }
    
    document.write(output + "<br>");
    document.write("<br>"); // Add a line break between each output
}