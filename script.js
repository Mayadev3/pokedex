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

  const name = pokemon.name.toUpperCase();

  const pokemonInnerHTML = `<div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${pokemon.name}"
           
            alt="pokemon"
          />
        </div>
        <div class="info">
          <span class="number" id="number">#001</span>
          <p class="name">${name}</p>
          <small class="type">Type: <span>grass</span></small>
        </div>`;
  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
}
