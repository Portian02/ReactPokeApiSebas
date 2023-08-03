import Navigation from "../../components/navigation";
import { useState, useEffect } from "react";
import { getPokemonId, getPokeEvos } from "../../Apis";
import DetailsPokemon from "../../components/cardPokemon";
import { useParams } from "react-router-dom";

const Details = ({ pokemons }) => {
  const [pokemon, setPokemons] = useState({});

  /////////pokemon evolutions\\\\\\\\\\
  const [baby, setBaby] = useState([]);
  const [evolution1, setEvolution1] = useState([]);
  const [evoluiton2, setEvolution2] = useState([]);
  const [evolution3, setEvolution3] = useState([]);
  ////////////id de las evoluciones\\\\\\\\\\
  const [babyId, setBabyId] = useState([]);
  const [evolution1Id, setEvolution1Id] = useState([]);
  const [evolution2Id, setEvolution2Id] = useState([]);
  const [evolution3Id, setEvolution3Id] = useState([]);

  //////Nombres de las evoluciones///////////
  const [babyName, setBabyName] = useState([]);
  const [evolution1Name, setEvolution1Name] = useState([]);
  const [evolution2Name, setEvolution2Name] = useState([]);
  const [evolution3Name, setEvolution3Name] = useState([]);

  let { id } = useParams();

  ////////////////Conseguir el pokemon y detalles\\\\\\\\\\\\\\\\\\\\\\
  const detailsPokemon = async (id) => {
    const response = await getPokemonId(id);
    setPokemons(response);
  };
  //
  let getPokemonEvolution = async () => {
    const res = await getPokemonId(id);
    const response = await fetch(res.species?.url);

    const evolutions = await response.json();

    const cadenaEvolutiva = await fetch(evolutions?.evolution_chain?.url);

    const evoluciones = await cadenaEvolutiva.json();
    /////////////////////Primer pokemon de la cadena y su info\\\\\\\\\\\\\\\\\\\\
    const primera = evoluciones?.chain?.species?.name;
    setBaby(primera);
    setBabyName(primera);
    getPokeEvos(primera, setBaby, setBabyId);
    //

    //
    /////////////////////Segundo pokemon de la cadena y su info\\\\\\\\\\\\\\\\\\\\
    const segunda = evoluciones?.chain?.evolves_to?.[0]?.species?.name;
    setEvolution1Name(segunda);
    setEvolution1Id(segunda);
    getPokeEvos(segunda, setEvolution1, setEvolution1Id);
    //
    //
    /////////////////////Tercer pokemon de la cadena y su info\\\\\\\\\\\\\\\\\\\\
    const tercera =
      evoluciones?.chain?.evolves_to?.[0]?.evolves_to?.[0]?.species?.name;
    setEvolution2Name(tercera);
    setEvolution2Id(tercera);
    getPokeEvos(tercera, setEvolution2, setEvolution2Id);
    /////////////////////Cuarta en el caso de eevee\\\\\\\\\\\\\\\\\
    const cuarta =
      evoluciones?.chain?.evolves_to?.[0]?.evolves_to?.[0]?.evolves_to?.[0]
        ?.species?.name;
    setEvolution3Name(cuarta);
    setEvolution3Id(cuarta);
    getPokeEvos(cuarta, setEvolution2, setEvolution2Id);
    console.log(cuarta);
  };

  useEffect(() => {
    detailsPokemon(id);
  }, [id]);
  useEffect(() => {
    getPokemonEvolution(id);
  }, [id]);

  return (
    <div>
      <Navigation />
      <DetailsPokemon
        pokemon={pokemon}
        baby={baby}
        evolution1={evolution1}
        evoluiton2={evoluiton2}
        babyId={babyId}
        evolution1Id={evolution1Id}
        evolution2Id={evolution2Id}
        babyName={babyName}
        evolution1Name={evolution1Name}
        evolution2Name={evolution2Name}
      />
    </div>
  );
};

export default Details;
