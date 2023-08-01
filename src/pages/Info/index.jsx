import React from "react";
import { getPokemonName } from "../../Apis";
import PokemonFound from "../../components/Results";
import Navigation from "../../components/navigation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const InfoPokemon = () => {
  ///Variables para el buscador////////
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  //
  /////////////Funciones Buscador///////////////
  const handleName = async (e) => {
    e.preventDefault();
    const name = await getPokemonName(search);
    setPokemon(name);
    navigate("/Info");
  };

  const handlePokename = (e) => {
    setSearch(e.target.value.toLowerCase().trim());
  };
  /////////////Funciones Buscador///////////////

  return (
    <div>
      {/* ///////////pasar los parametros para la función bucador////////////////// */}
      <Navigation handleName={handleName} handlePokename={handlePokename} />
      {pokemon ? (
        <PokemonFound
          name={pokemon.name}
          id={pokemon.id}
          image={pokemon.sprites.other["official-artwork"].front_default}
          weight={pokemon.weight}
          height={pokemon.height}
        />
      ) : (
        <h2>nada</h2>
      )}
    </div>
  );
};

export default InfoPokemon;
