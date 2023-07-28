import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation";
import PokedexList from "../../components/galery";
import { getPokemons } from "../../Apis";
import "./main.css";

const Main = () => {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState([]);
  const [previous, setPrevious] = useState([]);
  let limite = 20;

  useEffect(() => {
    const Pokedex = async () => {
      const pokemonsList = await getPokemons(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
      );
      // console.log(pokemonsList);
      setPokemons(pokemonsList.pokemons);
    };

    Pokedex();
  }, [offset]);
  return (
    <>
      <Navigation />
      <div className="container-card">
        <div className="main">
          <PokedexList pokemons={pokemons} />
        </div>
      </div>

      <button
        onClick={() => {
          setOffset(offset + limite);
        }}
      >
        Next
      </button>
    </>
  );
};

export default Main;
