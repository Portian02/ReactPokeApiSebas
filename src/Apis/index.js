//

////////////request para solicitar pokemons por su nombre\\\\\\\\\
const getPokemonName = async (pokemon) => {
  const Url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const pokeId = await fetch(Url);
  return await pokeId.json();
};

//

////Resquest Para conseguir pokemons por Id\\\\\\\\\\\\\
const getPokemonId = async (id) => {
  const Url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokeId = await fetch(Url);
  const reponse = await pokeId.json();
  return reponse;
};

////////=======REQUESTS PARA TODOS LOS POKEMON EN AL API Y MOSTRARLOS DE 20 EN 20 EN PANTALLA====\\\\\\
const getPokemons = async (limit = 20, offset = 0) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);
  const results = await response.json();
  return await results;
};
//

//////////REQUEST PARA CONSEGUIR LA EVOLUCIONES\\\\\\\\\\\\\\\\\
const getPokeEvos = async (id, Img, IdEvo) => {
  const pokeEvo = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const getPokes = await pokeEvo.json();
  IdEvo(getPokes.id);
  Img(getPokes.sprites.other["official-artwork"].front_default);
};

export { getPokemons, getPokemonName, getPokemonId, getPokeEvos };
