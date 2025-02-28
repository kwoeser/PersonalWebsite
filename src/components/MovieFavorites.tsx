import { useState, useEffect } from "react";
import "../MovieFavorites.css"; // Import CSS styles

const MovieFavorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:4000/letterboxd-favorites");
        const data = await response.json();
        setMovies(data.movies);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-container">
      <h2 className="movie-title">Movies</h2>
      <a href="https://letterboxd.com/bkarma/">LetterBox</a>

      <div className="movie-list">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <a href={movie.url} target="_blank" rel="noopener noreferrer">
              <img className="movie-poster" src={movie.poster} alt={movie.title} />
            </a>
            <p className="movie-name">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieFavorites;
