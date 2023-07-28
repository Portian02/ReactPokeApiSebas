import { useState, createContext } from "react";

const AuthContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState({});

  const getPokemonById = async (id) => {
    const Url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokeId = await fetch(Url);
    const result = pokeId.json();
  };

  return (
    <AuthContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, PokemonProvider };
