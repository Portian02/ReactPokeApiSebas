import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation";
import PokedexList from "../../components/galery";
import { getPokemons } from "../../Apis";
import "./main.css";
import Pagination from "../../components/pagination";
import { getPokemonName } from "../../Apis";
import PokemonFound from "../../components/Results";
import Swal from "sweetalert2";
const Main = () => {
  const [pokemons, setPokemons] = useState([]);

  ///Variables para el buscador////////
  const [pokemon, setPokemon] = useState("");
  const [search, setSearch] = useState("");
  //
  /////////////Funciones Buscador///////////////
  const handleName = async (e) => {
    e.preventDefault();
    if (search === "") {
      Swal.fire({
        title: "Espacios en blanco",
        text: "Por favor ingresa un nombre Pokemon",
        imageUrl: "https://giffiles.alphacoders.com/401/4013.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    } else {
      const name = await getPokemonName(search);
      setPokemon(name);
    }
  };

  const handlePokename = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value.trim());
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
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const backBtn = () => {
    setPage(Math.max(page - 1, 0));
  };

  const nextBtn = () => {
    if (page !== 64) {
      setPage(Math.min(page + 1, total));
    } else {
      Swal.fire({
        title: "llegaste al final ",
        text: "No hay más Pokemon",
        imageUrl: "https://media.tenor.com/bp0e59VWE2IAAAAC/pokemon.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    }
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
          image={
            pokemon.sprites &&
            pokemon.sprites.other["official-artwork"].front_default
          }
          weight={pokemon.weight}
          height={pokemon.height}
          types={pokemon.types?.[0]?.type.name}
          type2={pokemon.types?.[1]?.type.name}
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
