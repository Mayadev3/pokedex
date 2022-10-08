async function fetchingData() {
  const get = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
  const res = await get.json();
  console.log(res);
}
fetchingData();
