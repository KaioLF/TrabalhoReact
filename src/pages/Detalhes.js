import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "./../components/Title/index";
import Comments from "./../components/Comments/index";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Detalhes() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const detalhesFilme = id
    ? `https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`
    : null;
  const options = {
    method: "GET",
  };

  console.log("ID ABAIXO");
  console.log(id);
  console.log("ID ACIMA");

  useEffect(() => {
    fetch(detalhesFilme, options)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log("** DETALHES ABAIXO");
  console.log(movieDetails);
  console.log("** DETALHES ACIMA");

  const choosenMovie = movieDetails ? movieDetails : null;
  console.log("choosenMovie: ", choosenMovie); // adicionando o console.log

  console.log("ASSISTIDO ABAIXO");
  console.log(choosenMovie?.assistido)

  if (movieDetails === null || movieDetails === undefined ){
    return <p>Filme não encontrado</p>;
  }
 
  else{
    return (
      <div>
        <Title title={"Detalhes"} text="" />
        <div className="container">
          {choosenMovie ? (
            <div className="row">
              <div className="col-md-4">
                <img
                  src={choosenMovie.poster}
                  alt={choosenMovie.titulo}
                  className="card-img-right"
                />
              </div>
              <div className="col-md-8 text-left">
                <h2>Título: {choosenMovie.titulo}</h2>
                <p>Sinopse: {choosenMovie.sinopse}</p>
                <p>Ano de lançamento: {choosenMovie.ano}</p>
                <Button assistido={choosenMovie?.assistido} />
              </div>
            </div>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    );
  }
  
}
