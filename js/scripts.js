let pokemonList = [{name: "Charmander", height: "0.6", type: "fire"}, {name: "Golbat", height: "1.6", type: ["poison", "flying"]}, {name: "Rhydon", height: "1.9", tyoe: ["rock", "ground"]}]
let text = "";
let i = 0;
for (;pokemonList;){
    text = text + " " + pokemonList[i];
    i++;
document.write(pokemonList.name);
}
