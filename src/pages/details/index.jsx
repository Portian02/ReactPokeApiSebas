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
  const [evolution4, setEvolution4] = useState([]);
  const [evolution5, setEvolution5] = useState([]);
  const [evolution6, setEvolution6] = useState([]);
  const [evolution7, setEvolution7] = useState([]);
  const [evolution8, setEvolution8] = useState([]);
  const [evolution9, setEvolution9] = useState([]);

  ////////////id de las evoluciones\\\\\\\\\\
  const [babyId, setBabyId] = useState([]);
  const [evolution1Id, setEvolution1Id] = useState([]);
  const [evolution2Id, setEvolution2Id] = useState([]);
  const [evolution3Id, setEvolution3Id] = useState([]);
  const [evolution4Id, setEvolution4Id] = useState([]);
  const [evolution5Id, setEvolution5Id] = useState([]);
  const [evolution6Id, setEvolution6Id] = useState([]);
  const [evolution7Id, setEvolution7Id] = useState([]);
  const [evolution8Id, setEvolution8Id] = useState([]);
  const [evolution9Id, setEvolution9Id] = useState([]);

  //////Nombres de las evoluciones///////////
  const [babyName, setBabyName] = useState([]);
  const [evolution1Name, setEvolution1Name] = useState([]);
  const [evolution2Name, setEvolution2Name] = useState([]);
  const [evolution3Name, setEvolution3Name] = useState([]);
  const [evolution4Name, setEvolution4Name] = useState([]);
  const [evolution5Name, setEvolution5Name] = useState([]);
  const [evolution6Name, setEvolution6Name] = useState([]);
  const [evolution7Name, setEvolution7Name] = useState([]);
  const [evolution8Name, setEvolution8Name] = useState([]);
  const [evolution9Name, setEvolution9Name] = useState([]);

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
    //
    //
    ///////////////////Cuarta en el caso de eevee\\\\\\\\\\\\\\\\\
    const cuarta = evoluciones?.chain?.evolves_to?.[1]?.species?.name;
    setEvolution3Name(cuarta);
    setEvolution3Id(cuarta);
    getPokeEvos(cuarta, setEvolution3, setEvolution3Id);
    console.log(cuarta);

    ///////////////////  Quinta en el caso de eevee\\\\\\\\\\\\\\\\\
    const quinta = evoluciones?.chain?.evolves_to?.[2]?.species?.name;
    setEvolution4Name(quinta);
    setEvolution4Id(quinta);
    getPokeEvos(quinta, setEvolution4, setEvolution4Id);
    console.log(quinta);

    ///////////////////  sexta en el caso de eevee\\\\\\\\\\\\\\\\\
    const sexta = evoluciones?.chain?.evolves_to?.[3]?.species?.name;
    setEvolution5Name(sexta);
    setEvolution5Id(sexta);
    getPokeEvos(sexta, setEvolution5, setEvolution5Id);
    console.log(sexta);

    ///////////////////  septima en el caso de eevee\\\\\\\\\\\\\\\\\
    const septima = evoluciones?.chain?.evolves_to?.[4]?.species?.name;
    setEvolution6Name(septima);
    setEvolution6Id(septima);
    getPokeEvos(septima, setEvolution6, setEvolution6Id);
    console.log(septima);

    /////////////////// octava en el caso de eevee\\\\\\\\\\\\\\\\\
    const octava = evoluciones?.chain?.evolves_to?.[5]?.species?.name;
    setEvolution7Name(octava);
    setEvolution7Id(octava);
    getPokeEvos(octava, setEvolution7, setEvolution7Id);
    console.log(octava);

    ///////////////////  novena en el caso de eevee\\\\\\\\\\\\\\\\\
    const novena = evoluciones?.chain?.evolves_to?.[6]?.species?.name;
    setEvolution8Name(novena);
    setEvolution8Id(novena);
    getPokeEvos(novena, setEvolution8, setEvolution8Id);
    console.log(novena);

    ///////////////////  decima en el caso de eevee\\\\\\\\\\\\\\\\\
    const decima = evoluciones?.chain?.evolves_to?.[7]?.species?.name;
    setEvolution9Name(decima);
    setEvolution9Id(decima);
    getPokeEvos(decima, setEvolution9, setEvolution9Id);
    console.log(decima);
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
  );
};

export default Details;
