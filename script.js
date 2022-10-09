const poke_container = document.getElementById("poke-container");
const poke_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const main_types = Object.keys(colors); /*created keys for the object items*/

/*let animals = [
  { name: "cat", species: "mammal", number: 10 },
  {
    name: "fish",
    species: "amphibian",
    number: 13,
  },
  {
    name: "chicken",
    species: "bird",
    number: 20,
  },
];
for (i = 0; i < animals.length; i++) {
  if (animals[i].number > 13) {
    console.log(animals[i].species);
  }
}*/

async function fetchPokemons() {
  for (i = 1; i <= 150; i++) {
    getPokemons(i);
  }
}

async function getPokemons(id) {
  const get = await fetch(` https://pokeapi.co/api/v2/pokemon/${id}`);
  const response = await get.json();
  createPokemonData(response);
  console.log(response);
}
fetchPokemons();

function createPokemonData(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name =
    pokemon.name[0].toUpperCase() +
    pokemon.name.slice(
      1
    ); /*this is used to make the firt letter of the name capital*/

  const id = pokemon.id
    .toString()
    .padStart(
      3,
      00
    ); /* this method is used to insert characters in the beginning of a word*/

  const poke_types = pokemon.types.map((type) => type.type.name);
  /*the map method is used to map through an array*/
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];
  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `<div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${pokemon.name}"
           
            alt="pokemon"
          />
        </div>
        <div class="info">
          <span class="number" id="number">#${id}</span>
          <p class="name">${name}</p>
          <small class="type">Type: <span>${type}</span></small>
        </div>`;
  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
}
