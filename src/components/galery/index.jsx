import "./galery.css";
import { Link } from "react-router-dom";
const PokedexList = ({ pokemons }) => {
  // console.log({ pokemons });
  // const pokemonId
  return (
    <div className="container-pokemon">
      {pokemons?.map((pokemon) => {
        return (
          <div key={pokemon.id} className="card-Pokemon">
            <div className="poke-imagen">
              <Link to={`/details/${pokemon.id}`}>
                <img
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                />
              </Link>
            </div>
            <div className="pokeInfo">
              <div className="poke-name">
                <p className="id-pokemon">#{pokemon.id}</p>{" "}
                <h2 className="poke-names">{pokemon.name}</h2>
              </div>
              <div className="poke-tipos">
                {pokemon?.types.map((item) => {
                  return (
                    <p key={pokemon.id} className={item.type.name} id="type">
                      {item.type.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PokedexList;
