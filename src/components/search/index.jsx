import { useEffect, useState } from "react";
import Btn from "../button";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPokemonName } from "../../Apis";

const Barsearch = () => {
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState(" ");

  const handleName = async (e) => {
    e.preventDefault();
    const name = await getPokemonName(search);
    setPokemon(name);
  };

  const handlePokename = (e) => {
    setSearch(e.tareget.value.toLowerCase().trim());
  };

  return (
    <div>
      <form className="form" onSubmit={handleName}>
        <div className="container">
          <div>
            <input
              type="text"
              value={search}
              onChange={handlePokename}
              className="form-control"
              placeholder="Buscar..."
            />

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
