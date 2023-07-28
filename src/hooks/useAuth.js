import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PokemonAuth = () => {
  return useContext(AuthContext);
};

export default PokemonAuth;
