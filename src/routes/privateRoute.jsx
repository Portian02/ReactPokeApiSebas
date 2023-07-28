import React from "react";
import PokemonAuth from "../hooks/useAuth";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { auth } = PokemonAuth();

  // ESTE OUTLE SUSTITUYE LAS PÁGINA PRIVADAS HOME AND PERFIL
  return auth.user ? <Outlet /> : <Navigate to="/Sesion" />;
};
export default PrivateRoute;
