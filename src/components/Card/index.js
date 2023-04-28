import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../Button";

const moviesEndpoint =
  "https://my-json-server.typicode.com/marycamila184/movies/movies";

export default function Card() {
  const url = useLocation();
  console.log("Você está na: " + url.pathname);
  const [listMovies, setListMovies] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [sortOption, setSortOption] = useState("titulo");

  const options = {
    method: "GET",
  };

  useEffect(() => {
    fetch(moviesEndpoint)
      .then((response) => response.json())
      .then((data) => setListMovies(data))
      .catch((err) => console.error(err));
  }, []);

  function handleSortOptionChange(event) {
    setSortOption(event.target.value);
  }

  function getSortedMovies() {
    let sortedMovies = [...listMovies];
    switch (sortOption) {
      case "ano":
        sortedMovies.sort((a, b) => a.ano - b.ano);
        break;
      case "nota":
        sortedMovies.sort((a, b) => b.nota - a.nota);
        break;
      default:
        sortedMovies.sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
    return sortedMovies;
  }

  const filteredMovies = listMovies
    ? getSortedMovies().filter((movie) =>
        movie.titulo.toLowerCase().includes(searchInput.toLowerCase())
      )
    : null;

  if (!listMovies) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por título"
              aria-label="Buscar por título"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <select
              className="form-select"
              aria-label="Ordenar por"
              value={sortOption}
              onChange={handleSortOptionChange}
            >
              <option value="titulo">Título</option>
              <option value="ano">Ano</option>
              <option value="nota">Nota</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        {filteredMovies.map((filme, index) => (
          <div className="col" key={index}>
            <div className="card">
              <img
                src={filme.poster}
                alt={filme.titulo}
                className="card-img-center"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {filme.titulo} - ({filme.ano})
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
