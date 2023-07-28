import { useState } from "react";
import Btn from "../button";
import "bootstrap/dist/css/bootstrap.min.css";

const Barsearch = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState(" ");

  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

  const showPokemon = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log({data});
  };
  showPokemon();

  return (
    <div>
      <form className="form" action="">
        <div className="container">
          <div>
            <input type="text" className="bar-searhc" placeholder="Buscar..." />
            <div>
              <Btn />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Barsearch;
