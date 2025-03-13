import { useState, useEffect } from "react";
import "../movies.css"; 

const MovieFavorites = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://personalwebsite-z2n0.onrender.com/favorites");
        // const response = await fetch("http://localhost:4000/favorites");
        const data = await response.json();
        setMovies(data.movies);
      } catch (error) {
          console.error("Error fetching favorites:", error);
      } finally {
          setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-container">
      <h1 className="header">favorites</h1>
      <div className="movies-header">
        <h2>movies </h2>
        <a href="https://letterboxd.com/bkarma/" target="_blank" rel="noopener noreferrer" className="letterboxd-link"> letterboxd →</a>
      </div>

      {loading ? (
        <p>MOVIES LOADING...</p>
      ) : (
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
      )}
    </div>
  );
};

export default MovieFavorites;
