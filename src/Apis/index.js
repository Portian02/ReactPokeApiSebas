const getPokemonById = async (url) => {
  const response = await fetch(url);

  const { name, id, sprites, weight, game_indices, types, stats } =
    await response.json();

  return {
    name,
    id,
    img: sprites.other["official-artwork"].front_default,
    weight,
    game_indices,
    types,
    stats,
    // type: Pokemons.
  };
};

const getPokemonName = async (pokemon) => {
  const Url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const pokeId = await fetch(Url);
  return await pokeId.json();
};




const getPokemons = async (limit = 20, offset = 0) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);
  const results = await response.json();
  return await results;
};

export { getPokemons, getPokemonById, getPokemonName };
