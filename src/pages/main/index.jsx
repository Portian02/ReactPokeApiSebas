import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation";
import PokedexList from "../../components/galery";
import { getPokemons } from "../../Apis";
import "./main.css";
import Pagination from "../../components/pagination";
import { getPokemonName } from "../../Apis";
import PokemonFound from "../../components/Results";

const Main = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  ///Variables para el buscador////////
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("");
  //
  /////////////Funciones Buscador///////////////
  const handleName = async (e) => {
    e.preventDefault();
    const name = await getPokemonName(search);
    setPokemon(name);
  };

  const handlePokename = (e) => {
    setSearch(e.target.value.toLowerCase().trim());
  };
  /////////////Funciones Buscador///////////////

  const Pokedex = async () => {
    const pokemonsList = await getPokemons(20, 20 * page);
    const listPokemons = pokemonsList.results.map(async (pokemones) => {
      const response = await fetch(pokemones.url);
      const list = await response.json();
      return list;
    });
    setPokemons(await Promise.all(listPokemons));
    setTotal(Math.ceil(pokemonsList.count / 20));
  };
  ///////////funciones btn pagination/////////////////
  const backBtn = () => {
    setPage(Math.max(page - 1, 0));
  };

  const nextBtn = () => {
    const pagina = page;

    setPage(Math.min(pagina + 1, total));
  };
  ///////////funciones btn pagination/////////////////

  useEffect(() => {
    Pokedex();
  }, [page]);

  return (
    <>
      {/* ///////////pasar los parametros para la función bucador////////////////// */}
      <Navigation handleName={handleName} handlePokename={handlePokename} />
      {pokemon ? (
        <PokemonFound
          name={pokemon.name}
          id={pokemon.id}
          image={pokemon.sprites.other["official-artwork"].front_default}
          weight={pokemon.weight}
          height={pokemon.height}
          types={pokemon.types[0].type.name}
        />
      ) : (
        <div className="container-card">
          <div className="main">
            <PokedexList pokemons={pokemons} />
          </div>
          <br />

          <Pagination
            page={page}
            total={total}
            backBtn={backBtn}
            nextBtn={nextBtn}
          />
        </div>
      )}
    </>
  );
};

export { Main };
