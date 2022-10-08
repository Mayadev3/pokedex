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

async function fetchPokemons() {
  for (i = 1; i <= 150; i++) {
    await getPokemons(i);
  }
}
async function getPokemons(id) {
  const get = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const response = await get.json();
  console.log(response);
}
fetchPokemons();
