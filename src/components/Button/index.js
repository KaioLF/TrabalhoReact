import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Button({assistido}) {
  const url = useLocation();
  /*console.log("Você está na: " + url.pathname);
  console.log(typeof url)
  console.log(url)
  console.log("**********ABAIXO********")
  console.log(url.pathname.startsWith("/Detalhes/"))*/
  const label = assistido ? "Assistir Novamente" : "Assistir";
  console.log("assistido: ", assistido); // adicionando console.log aqui

  if (url.pathname === "/") {
    return (
        <div className="btn btn-primary">{label}</div>
    );  
  }

  else if(url.pathname.startsWith("/Detalhes")){
    console.log("CONDIÇÃO ATENDIDA"); // adicionando console.log aqui
    return(
      
      <div className="btn btn-primary">{label}</div>
    )
  }
  else{
    return(
      console.log("NADA")
    )
  }
}

