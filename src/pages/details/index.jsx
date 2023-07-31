import Navigation from "../../components/navigation";

import { useState, useEffect } from "react";
import ProfileCard from "../../components/cardList";
import { getPokemons } from "../../Apis";
import { useNavigate } from "react-router-dom";
const Details = () => {
  let navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const Pokedex = async (id) => {
      const pokemonsList = await getPokemons(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      // console.log(pokemonsList);
      setPokemons(pokemonsList.pokemons);
    };

    Pokedex();
  }, [pokemons]);
  const back = () => {
    navigate("/");
  };
  // const [pokeInfo, setPokeInfo] = useState({});

  // const loadPokeInfo = async () => {
  //   const data = await getPokemons();
  //   setPokeInfo(data);
  // };

  // useEffect(() => {
  //   loadPokeInfo();
  // }, []);

  return (
    <div>
      <Navigation />
      <h1 className="text">hola</h1>
      <ProfileCard pokemons={pokemons} />

      <center>
        <button onClick={back}>Back</button>
      </center>
    </div>
  );
};

export default Details;
