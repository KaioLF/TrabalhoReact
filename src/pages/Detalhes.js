import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Comments from './../components/Comments/index';

export default function Detalhes() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const detalhesFilme = id ? `https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}` : null;
  const options = {
    method: 'GET'
  };

  /*console.log("ID ABAIXO")
  console.log(id)
  console.log("ID ACIMA")*/

  useEffect(() => {
    fetch(detalhesFilme, options)
      .then(response => response.json())
      .then(data => {setMovieDetails(data)})
      .catch(err => console.error(err))
  }, []);

  /*console.log("** DETALHES ABAIXO")
  console.log(movieDetails)
  console.log("** DETALHES ACIMA")*/

  const choosenMovie = movieDetails ? movieDetails : null;
  console.log("choosenMovie: ", choosenMovie); // adicionando o console.log

  return (
    <div className="container">
      <Title
        title={"Detalhes"}
        text="" />
      <div className="row">
        <div className="col-4">
          <img src={choosenMovie.poster} alt={choosenMovie.titulo} className="poster" />
        </div>
        <div className="col-8">
          <h2>{choosenMovie.titulo}</h2>
          <p>{choosenMovie.ano}</p>
          <p>{choosenMovie.sinopse}</p>
        </div>
      </div>
    </div>

    /*<div>
      <Title
        title={"Detalhes"}
        text="" />
      <div className="container text-center">
        {choosenMovie ? (
          <>
            <img src={choosenMovie.poster} alt={choosenMovie.titulo} className="card-img-center" />
            <p>Filme: {choosenMovie.titulo}</p>
            <div>
              <p>{choosenMovie.sinopse}</p>
              <p>{choosenMovie.ano}</p>
            </div>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>*/
  )
}