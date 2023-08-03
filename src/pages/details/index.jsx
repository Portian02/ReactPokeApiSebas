import Navigation from "../../components/navigation";
import { useState, useEffect } from "react";
import { getPokemonId } from "../../Apis";
import DetailsPokemon from "../../components/cardPokemon";
import { useParams } from "react-router-dom";

const Details = ({ pokemons }) => {
  const [pokemon, setPokemons] = useState({});



  let { id } = useParams();

 

  const fechPokemons = async (id) => {
    const response = await getPokemonId(id);
    setPokemons(response);
  };

  useEffect(() => {
    fechPokemons(id);
  }, [id]);

 

  return (
    <div>
      <Navigation />
      <DetailsPokemon pokemon={pokemon} />
    </div>
  );
};

export default Details;
