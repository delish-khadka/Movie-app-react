import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

import MovieCard from "./MovieCard";
//3fa06345
const API_KEY = "http://www.omdbapi.com/?apikey=3fa06345";

const movie1 = {
  Title: "Spiderman and Grandma",
  Year: "2009",
  imdbID: "tt1433184",
  Type: "movie",
  Poster: "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg",
};
const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Enter movie name" value="Superman" onChange={() => {}} />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
