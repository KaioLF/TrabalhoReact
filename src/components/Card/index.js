import React, { useState, useEffect } from 'react';

//fazer um get para o endpoint dos filmes
const moviesEndpoint = "https://my-json-server.typicode.com/marycamila184/movies/movies"

/*function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}*/

export default function Card() {
    const [listMovies, setlistMovies] = useState(null);
    
    const options = {
        method: 'GET'
    };

    useEffect(() => {
        fetch(moviesEndpoint)
          .then(response => response.json())
          .then(data => setlistMovies(data))
          .catch(err => console.error(err))
      }, []);

      if(!listMovies){
        return <p>Carregando...</p>;
      }

  return (
    <div className="container text-center">
      <div className="row">
        {listMovies.map((filme, index) => (
          <div className="col" key={index}>
            <div className="card">
              <img src={filme.poster} alt={filme.titulo} className="card-img-center" style={{flex: 1,
                  resizeMode: "cover",
                  justifyContent: "center",}}/>
              <div className="card-body">
                <h5 className="card-title">{filme.titulo} - ({filme.ano}) </h5>
                <p>{filme.nota}</p>
                <a href={`/detalhes/${filme.titulo}`}>
                  <div className="btn btn-primary">
                    Assistir
                  </div>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}