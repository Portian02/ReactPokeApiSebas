const getPokemonById = async (url) => {
  const response = await fetch(url);

  const {
    name,
    id,
    sprites,
    weight,
    game_indices,
    types,
    stats,
  } = await response.json();
  
  return {
    name,
    id,
    img: sprites.other["official-artwork"].front_default,
    weight,
    game_indices,
    types,
    stats
    // type: Pokemons.
  };
};

const getPokemons = async (
  url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
) => {
  const response = await fetch(url);
  const { results, next, previous } = await response.json();
  const pokemons = await Promise.all(
    results.map(async (pokemon) => {
      return await getPokemonById(pokemon.url);
    })
  );
  return { next, previous, pokemons };
};

export { getPokemons, getPokemonById };
