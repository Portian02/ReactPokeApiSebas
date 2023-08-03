import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./cardPokemon.css";
import { useNavigate } from "react-router-dom";

const DetailsPokemon = ({ pokemon }) => {
  let navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  return (
    <div className="card-Pokemon-details">
       
   
      <div className="poke-imagen-card">
        {pokemon.sprites && (
          <img
            src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name}
          />
        )}
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
        <div className="data">
          <h2 className="data-info">datos:</h2>
          <h5 className="data-info">Peso: {pokemon.weight / 10} kg </h5>
          <h5 className="data-info">Tamaño: {pokemon.height * 10} cm </h5>
        </div>
      </div>
      <div className="stats">
        <h2>Estadisticas:</h2>
        <p className="stats-data">
          {" "}
          Ataque: {pokemon.stats?.[1]?.base_stat}{" "}
          <ProgressBar
            striped
            variant="success"
            now={pokemon.stats?.[1]?.base_stat}
          />{" "}
        </p>
        <p className="stats-data">
          {" "}
          Velocidad: {pokemon.stats?.[5]?.base_stat}{" "}
          <ProgressBar
            striped
            variant="info"
            now={pokemon.stats?.[5]?.base_stat}
          />{" "}
        </p>
        <p className="stats-data">
          {" "}
          Defensa: {pokemon.stats?.[2]?.base_stat}{" "}
          <ProgressBar
            striped
            variant="warning"
            now={pokemon.stats?.[2]?.base_stat}
          />
        </p>
        <p className="stats-data">
          {" "}
          Hp: {pokemon.stats?.[0]?.base_stat}{" "}
          <ProgressBar
            striped
            variant="danger"
            now={pokemon.stats?.[0]?.base_stat}
          />
        </p>
        <button className="info-btn" onClick={back}>
          <h1 className="text-btn">↩</h1>{" "}
        </button>
      </div>

    </div>
  );
};

export default DetailsPokemon;
