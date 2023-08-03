import "./result.css";
import { Link } from "react-router-dom";
const PokemonFound = ({ name, types, image, id, type2 }) => {
  
  const reload = () => {
    window.location.reload(false);
  };

  return (
    <div className="card-Pokemon-Info">
      <Link className="link" to="/">
        <button className="info-btn" onClick={reload}>
          <h1 className="text-btn">↩</h1>{" "}
        </button>
      </Link>
      {/* <p className="poke-id-back">#{id}</p> */}
      <div className="poke-imagen-info">
        <Link to={`/details/${id}`}>
          <center>
            <img src={image} alt={`${name} sprites`} />
          </center>
        </Link>
      </div>
      <div className="poke-name">
        <p className="id-pokemon">#{id}</p>
        <h2 className="poke-names">{name}</h2>
      </div>
      <div className="poke-tipos">
        <p className={types} id="type">
          {types}
        </p>
        <p className={type2} id="type">
          {type2}
        </p>
      </div>
      <div className="stats"></div>
    </div>
  );
};

export default PokemonFound;
