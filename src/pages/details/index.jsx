import Navigation from "../../components/navigation";
import { useState, useEffect } from "react";
import { getPokemonName } from "../../Apis";
import { Link } from "react-router-dom";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Details = ({ pokemon }) => {
  const [pokemons, setPokemons] = useState({});

  let location = useLocation();
  let navigate = useNavigate();
  let pokeId = useParams();
  let idPokemon = pokeId.id;

  const urlParamPokemon = async () => {
    const pokemonsList = await getPokemonName(pokemons);
    setPokemons(pokemonsList);
  };

  useEffect(() => {
    urlParamPokemon();
  }, [pokemons]);

  const back = () => {
    navigate("/");
  };

  return (
    <div>
      <Navigation />
      <h1 className="text">hola</h1>
      <div className="profile-card">
        <Link to="/">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        </Link>
        <h2>{pokemon.name}</h2>
      </div>
      <center>
        <button onClick={back}>Back</button>
      </center>
    </div>
  );
};

export default Details;
