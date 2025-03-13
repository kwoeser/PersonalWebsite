import { useState, useEffect } from "react";
import "../movies.css"; 

const Books = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://personalwebsite-z2n0.onrender.com/favorites");
        // const response = await fetch("http://localhost:4000/favorites");
        const data = await response.json();
        setMovies(data.books);
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
      <div className="movies-header">
        <h2>books </h2>
      </div>

      {loading ? (
        <p>BOOKS LOADING...</p>
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

export default Books;
