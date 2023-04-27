import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Button({assistido}) {
  const url = useLocation();
  console.log("Você está na: " + url.pathname);
  const label = assistido ? "Assistir Novamente" : "Assistir";

  if (url.pathname === "/") {
    return (
        <div className="btn btn-primary">{label}</div>
    );
  }

  //Mudar o label para a tela de Detalhes
}
