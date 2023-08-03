import React from "react";
import { Link } from "react-router-dom";
import "./evo.css";
const EvolucionesPokemon = ({
  baby,
  evolution1,
  evoluiton2,
  babyId,
  evolution1Id,
  evolution2Id,
  babyName,
  evolution1Name,
  evolution2Name,
}) => {
  return (
    <div className="info-evoluciones">
      <div className="space">
        <div className="poke-name">
          <p className="poke-names-evo">{babyName}</p>
        </div>
        <div className="poke-imagen">
          <Link to={`/details/${babyId}`}>
            <img cl src={baby} alt={baby} />
          </Link>
        </div>
      </div>
      <br /> <br />
      <div className="space">
        <div className="poke-name-evos">
          <p className="poke-names-evo">{evolution1Name}</p>
        </div>
        <div className="poke-imagen">
          <Link to={`/details/${evolution1Id}`}>
            <img src={evolution1} alt={evolution1} />
          </Link>
        </div>
      </div>
      <br /> <br />
      <div className="space">
        <div className="poke-name-evos">
          <p className="poke-names-evo">{evolution2Name}</p>
        </div>
        <div className="poke-imagen">
          <Link to={`/details/${evolution2Id}`}>
            <img src={evoluiton2} alt={evoluiton2} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EvolucionesPokemon;
