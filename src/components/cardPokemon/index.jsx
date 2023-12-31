import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./cardPokemon.css";
import { Link, useNavigate } from "react-router-dom";
import EvolucionesPokemon from "../EvolcionesPokemon";

const DetailsPokemon = ({
  pokemon,
  evoluciones,
  baby,
  evolution1,
  evoluiton2,
  babyId,
  evolution1Id,
  evolution2Id,
  babyName,
  evolution1Name,
  evolution2Name,
  evolution3,
  evolution3Id,
  evolution3Name,
  evolution4,
  evolution4Id,
  evolution4Name,
  evolution5,
  evolution5Id,
  evolution5Name,
  evolution6,
  evolution6Id,
  evolution6Name,
  evolution7,
  evolution7Id,
  evolution7Name,
  evolution8,
  evolution8Id,
  evolution8Name,
  evolution9,
  evolution9Id,
  evolution9Name,
}) => {
  const navigate = useNavigate();

  const backBtn = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="card-Pokemon-details">
      <button className="info-btn" onClick={backBtn}>
        <h1 className="text-btn">↩</h1>{" "}
      </button>
      <div className="poke-imagen-card">
        {pokemon.sprites && (
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        )}
        {/* {pokemon.sprites && (
          <img
            src={pokemon.sprites.other["official-artwork"].front_shiny}
            alt={pokemon.name}
          />
        )} */}
        <br />
      </div>
      <div className="poke-info">
        <div className="poke-name-card">
          <p className="id-pokemon-card">#{pokemon.id}</p>
          <h1 className="poke-names-card"> {pokemon.name}</h1>
        </div>
        <div className="poke-tipos-card">
          <p className={pokemon.types?.[0]?.type.name} id="type-card">
            {pokemon.types?.[0]?.type.name}
          </p>
          <p className={pokemon.types?.[1]?.type.name} id="type-card">
            {pokemon.types?.[1]?.type.name}
          </p>
        </div>
      </div>
      <div className="stats">
        <div className="data">
          <h2 className="data-info">datos:</h2>
          <h5 className="data-info">Peso: {pokemon.weight / 10} kg </h5>
          <h5 className="data-info">Tamaño: {pokemon.height * 10} cm </h5>
        </div>
        <h2 className="title">Estadisticas:</h2>
        <p className="stats-data">
          {" "}
          Ataque:{" "}
          <ProgressBar
            striped
            variant="success"
            now={pokemon.stats?.[1]?.base_stat}
            label={`${pokemon.stats?.[1]?.base_stat}`}
          />{" "}
        </p>
        <p className="stats-data">
          {" "}
          Velocidad:{" "}
          <ProgressBar
            striped
            variant="info"
            now={pokemon.stats?.[5]?.base_stat}
            label={`${pokemon.stats?.[5]?.base_stat}`}
          />{" "}
        </p>
        <p className="stats-data">
          {" "}
          Defensa:{" "}
          <ProgressBar
            striped
            variant="warning"
            now={pokemon.stats?.[2]?.base_stat}
            label={`${pokemon.stats?.[2]?.base_stat}`}
          />
        </p>
        <p className="stats-data">
          {" "}
          Hp:{" "}
          <ProgressBar
            striped
            variant="danger"
            now={pokemon.stats?.[0]?.base_stat}
            label={`${pokemon.stats?.[0]?.base_stat}`}
          />
        </p>
        <div className="evolutions-pokemon">
          <h1 className="evolution-data">Evoluciones:</h1>
          <EvolucionesPokemon
            pokemons={evoluciones}
            baby={baby}
            evolution1={evolution1}
            evoluiton2={evoluiton2}
            babyId={babyId}
            evolution1Id={evolution1Id}
            evolution2Id={evolution2Id}
            babyName={babyName}
            evolution1Name={evolution1Name}
            evolution2Name={evolution2Name}
            evolution3={evolution3}
            evolution3Id={evolution3Id}
            evolution3Name={evolution3Name}
            evolution4={evolution4}
            evolution4Id={evolution4Id}
            evolution4Name={evolution4Name}
            evolution5={evolution5}
            evolution5Id={evolution5Id}
            evolution5Name={evolution5Name}
            evolution6={evolution6}
            evolution6Id={evolution6Id}
            evolution6Name={evolution6Name}
            evolution7={evolution7}
            evolution7Id={evolution7Id}
            evolution7Name={evolution7Name}
            evolution8={evolution8}
            evolution8Id={evolution8Id}
            evolution8Name={evolution8Name}
            evolution9={evolution9}
            evolution9Id={evolution9Id}
            evolution9Name={evolution9Name}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPokemon;
