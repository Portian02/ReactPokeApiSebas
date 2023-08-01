import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "../pages/details";
import { Main } from "../pages/main";
import NoPage from "../pages/Nopage";
import InfoPokemon from "../pages/Info";
const Routing = () => {
  return (
    <Routes>
      {/* SOLO SE MOSTRARÁN AL INICIAR SESIÓN  */}
      <Route path="/Info" element={<InfoPokemon />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Routing;
