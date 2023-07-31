import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation";
import PokedexList from "../../components/galery";
import { getPokemons } from "../../Apis";
import "./main.css";
import Pagination from "../../components/pagination";
const Main = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const Pokedex = async () => {
      const pokemonsList = await getPokemons(20, 20 * page);
      setPokemons(pokemonsList.pokemons);
    };
    Pokedex();
  }, [page]);
  return (
    <>
      <Navigation />
      <div className="container-card">
        <div className="main">
          <PokedexList pokemons={pokemons} />
        </div>
        <br />
        <br />
        <Pagination />
      </div>
    </>
  );
};

export default Main;
