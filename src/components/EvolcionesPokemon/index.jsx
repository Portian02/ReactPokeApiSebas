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
  return (
    <div className="info-evoluciones">
      {/* ////////////////////Primera evolution\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <div className="space">
        <div className="poke-imagen">
          <Link to={`/details/${babyId}`}>
            <img cl src={baby} alt={baby} />
          </Link>
        </div>
        <div className="poke-name">
          <p className="poke-names-evo">{babyName}</p>
        </div>
      </div>

      {/* ////////////////////segunda evolution\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <div className="space">
        <div className="poke-imagen">
          <Link to={`/details/${evolution1Id}`}>
            <img src={evolution1} alt={evolution1} />
          </Link>
        </div>
        <div className="poke-name-evos">
          <p className="poke-names-evo">{evolution1Name}</p>
        </div>
      </div>
      {/* ////////////////////tercera evolution\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

      <div className="space">
        <div className="poke-imagen">
          <Link to={`/details/${evolution2Id}`}>
            <img src={evoluiton2} alt={evoluiton2} />
          </Link>
        </div>
        <div className="poke-name-evos">
          <p className="poke-names-evo">{evolution2Name}</p>
        </div>
      </div>
      {/* ////////////////////cuarta en el casa de eevee evolution\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <div className="space">
        <div className="poke-imagen">
          <Link to={`/details/${evolution3Id}`}>
            <img src={evolution3} alt={evolution3} />
          </Link>
        </div>
        <div className="poke-name-evos">
          <p className="poke-names-evo">{evolution3Name}</p>
        </div>
      </div>
      {/* ////////////////////quinta en el casa de eevee evolution\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <div className="space">
        <div className="poke-imagen">
          <Link to={`/details/${evolution4Id}`}>
            <img src={evolution4} alt={evolution4} />
          </Link>
        </div>
        <div className="poke-name-evos">
          <p className="poke-names-evo">{evolution4Name}</p>
        </div>
      </div>
      {/* ////////////////////sexta en el casa de eevee evolution\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <div className="space">
        <div className="poke-imagen">
          <Link to={`/details/${evolution5Id}`}>
            <img src={evolution5} alt={evolution5} />
          </Link>
        </div>
        <div className="poke-name-evos">
          <p className="poke-names-evo">{evolution5Name}</p>
        </div>
      </div>
      {/* ////////////////////septima en el casa de eevee evolution\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <div className="space">
        <div className="poke-imagen">
          <Link to={`/details/${evolution6Id}`}>
            <img src={evolution6} alt={evolution6} />
          </Link>
        </div>
        <div className="poke-name-evos">
          <p className="poke-names-evo">{evolution6Name}</p>
        </div>
      </div>
      {/* ////////////////////octava en el casa de eevee evolution\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <div className="space">
        <div className="poke-imagen">
          <Link to={`/details/${evolution7Id}`}>
            <img src={evolution7} alt={evolution7} />
          </Link>
        </div>
        <div className="poke-name-evos">
          <p className="poke-names-evo">{evolution7Name}</p>
        </div>
      </div>
      {/* ////////////////////novena en el casa de eevee evolution\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <div className="space">
        <div className="poke-imagen">
          <Link to={`/details/${evolution8Id}`}>
            <img src={evolution8} alt={evolution8} />
          </Link>
        </div>
        <div className="poke-name-evos">
          <p className="poke-names-evo">{evolution8Name}</p>
        </div>
      </div>
      {/* ////////////////////decima en el casa de eevee evolution\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <div className="space">
        <div className="poke-imagen">
          <Link to={`/details/${evolution9Id}`}>
            <img src={evolution9} alt={evolution9} />
          </Link>
        </div>
        <div className="poke-name-evos">
          <p className="poke-names-evo">{evolution9Name}</p>
        </div>
      </div>
    </div>
  );
};

export default EvolucionesPokemon;
