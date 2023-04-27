import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../Button";

const moviesEndpoint =
  "https://my-json-server.typicode.com/marycamila184/movies/movies";

export default function Card() {
  const url = useLocation();
  console.log("Você está na: " + url.pathname);
  const [listMovies, setlistMovies] = useState(null);

  const options = {
    method: "GET",
  };

  useEffect(() => {
    fetch(moviesEndpoint)
      .then((response) => response.json())
      .then((data) => setlistMovies(data))
      .catch((err) => console.error(err));
  }, []);

  if (!listMovies) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container text-center">
      <div className="row">
        <p>
          Input de Pesquisa por título+++++++++Select com opções de ordenar os
          filmes por Título(default), Ano e Nota{" "}
        </p>
        {listMovies.map((filme, index) => (
          <div className="col" key={index}>
            <div className="card">
              <img
                src={filme.poster}
                alt={filme.titulo}
                className="card-img-center"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {filme.titulo} - ({filme.ano}){" "}
                </h5>
                <p>{filme.nota}</p>
                <Link to={`/Detalhes/${filme.id}`}>
                  <Button assistido={filme.assistido} /> 
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
