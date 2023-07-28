// import { useState, createContext, useEffect } from "react";

// const PokemonContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [Pokemons, setPokemons] = useState([]);
//   const[globalPokemons, setGlobalPokemons] = useState([]);
//   const [offset, setOffset] = useState(0);


// //////////Estados Simples////////////





//   /////////////////////LLAMAR POKEMONS AL API////////////////////
//   const Pokedex = async (limite = 20) => {
//     const PokeURL = "https://pokeapi.co/api/v2";
//     const reponse = await fetch(`${PokeURL}pokemon?limit=${limite}${offset}`);
//     const data = await reponse.json();

//     const promises = data.result.map(async (pokemon) => {
//       const response = await fetch(pokemon.url);
//       const data = await response.json();
//       return data;
//     });
//     const results = await Promise.all(promises);
//     setPokemons(results);
//     console.log(results);
//   };

//   ////////////////////LLAMAR A TODOS LOS POKEMONES////////////////////
//   const getPokemonsG = async () => {
//     const PokeURL = "https://pokeapi.co/api/v2";
//     const reponse = await fetch(`${PokeURL}pokemon?limit=100000&offset=0`);
//     const data = await reponse.json();

//     const promises = data.result.map(async (pokemon) => {
//       const response = await fetch(pokemon.url);
//       const data = await response.json();
//       return data;
//     });
//     const results = await Promise.all(promises);
//     setGlobalPokemons(results);
//   };

//   //////////////////////LLAMAR A UN POCO POR ID////////////////////
//   const PokmenoByID = async (id) => {
//     const PokeURL = "https://pokeapi.co/api/v2";
//     const response = await fetch(`${PokeURL}pokemon/${id}`);
//     const data = await response.json();
//     return data;
//   };

//   useEffect(() => {
//     Pokedex();
//   }, []);

//   useEffect(() => {
//     getPokemonsG();
//   }, []);

//   return (
//     <PokemonContext.Provider value={{}}>{children}</PokemonContext.Provider>
//   );
// };

// export { PokemonContext, AuthProvider };
