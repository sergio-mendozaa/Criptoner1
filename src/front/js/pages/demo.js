import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import imagen2 from "/workspace/Criptoner1/src/front/img/Panel.jpg";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const handleTarjetas = () => {
    navigate("/single/:theid"); // Redirige a "/otraVista"
  };

  return (
    <div className="panel" style={{ marginBottom: "5cm" }}>
      <img
        src={imagen2}
        style={{ height: "1000px", width: "1900px", position: "relative" }}
      ></img>
      <button
        className="transparentButton"
        onClick={handleTarjetas}
        style={{
          position: "absolute",
          top: "29%",
          left: "8%",
          transform: "translate(-50%, -50%)",
          background: "transparent",
          color: "transparent",
          border: "transparent",
        }}
      >
        Click me
      </button>
      <br />
    </div>
  );
};
