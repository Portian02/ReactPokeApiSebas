import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "../pages/details";
import Main from "../pages/main";
import NoPage from "../pages/Nopage";
const Routing = () => {
  return (
    <Routes>
      {/* SOLO SE MOSTRARÁN AL INICIAR SESIÓN  */}

      <Route path="/details" element={<Details />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default Routing;
