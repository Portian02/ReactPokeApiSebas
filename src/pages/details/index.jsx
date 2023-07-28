import Navigation from "../../components/navigation";

import { useState, useEffect } from "react";
import ProfileCard from "../../components/cardList";
import { getPokemons } from "../../Apis";
import { useNavigate } from "react-router-dom";
const Details = () => {
  let navigate = useNavigate();

  const back = () => {
    navigate("/");
  };
  const [pokeInfo, setPokeInfo] = useState({});

  const loadPokeInfo = async () => {
    const data = await getPokemons();
    setPokeInfo(data);
  };

  useEffect(() => {
    loadPokeInfo();
  }, []);

  return (
    <div>
      <Navigation />
      <h1 className="text">hola</h1>
      <ProfileCard userInfo={pokeInfo} />
      <button onClick={back}>Back</button>
    </div>
  );
};

export default Details;
