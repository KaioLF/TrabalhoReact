import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Comments from './../components/Comments/index';


const detalhesFilme = "https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/"

export default function Detalhes() {
    console.log("to na função detalhes");
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    const options = {
        method: 'GET'
    };


    useEffect(() => {
        console.log("fetching movie details"); // adicionando o console.log
        fetch(detalhesFilme+id)
          .then(response => response.json())
          .then(data => {
            console.log("movie details fetched successfully: ", data); // adicionando o console.log
            setMovieDetails(data)
        })
          .catch(err => console.error(err))
      }, []);
    
      console.log("******* ABAIXO")
      console.log(movieDetails)
      console.log("******* ACIMA")
      
      const choosenMovie = movieDetails ? movieDetails.find(f => f.id === id) : null;
      console.log("choosenMovie: ", choosenMovie); // adicionando o console.log
    return (
        
        <div>
            <div className="container text-center">
            {choosenMovie && // verifica se o objeto existe antes de acessar seus atributos
              <>
                <p>Filme: {choosenMovie.titulo}</p>
                <div>
                    <p>{choosenMovie.sinopse}</p>
                    <p>{choosenMovie.ano}</p>
                </div>
              </>
            }
            </div>
        </div>
    )
}
