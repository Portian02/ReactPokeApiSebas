import { useState, createContext } from "react";

const AuthContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState({});

  const getIdPokemon = async (id) => {
    const Url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokeId = await fetch(Url);
    const result = pokeId.json();
  };

  const GetPokemonName = async (pokemon) => {
    const Url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const pokeId = await fetch(Url);
    const data = pokeId.json();
  };

  return (
    <AuthContext.Provider value={{ pokemon, setPokemon,getIdPokemon }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, PokemonProvider,};
