import { useState, createContext } from "react";

const AuthContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState({});

  const getIdPokemon = async (id) => {
    const Url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokeId = await fetch(Url);
    const result = pokeId.json();
  };

   

  return (
    <AuthContext.Provider value={{ pokemon, setPokemon, getIdPokemon }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, PokemonProvider,   };
