import { useState, useEffect } from "react";
import "../movies.css"; 



const hardcodedGames = [
  {
    title: "Elden Ring",
    poster: "https://m.media-amazon.com/images/M/MV5BMWNlMDBiYzYtMWMyMC00Zjc5LTlhMjItMjRlMzBmYmVkOGM0XkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Skate 3",
    poster: "https://m.media-amazon.com/images/M/MV5BYmQzOThkZGItMzA1Yy00NDFkLWJkYjUtNzFkNjRlNzk1YmM1XkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Uncharted 3",
    poster: "https://m.media-amazon.com/images/M/MV5BNzVkZTVlMDItYjI5Yy00NjQ5LWI4OWMtMjllYmIxMTUxZDVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    title: "Terraria",
    poster: "https://m.media-amazon.com/images/M/MV5BZWJkZWNkZDgtOTMzMS00NjlhLTk5MTEtZWFiMTQ0MzE4MzAyXkEyXkFqcGc@._V1_.jpg"
  }
  // https://m.media-amazon.com/images/M/MV5BNzQzODQ3YzktNTM1Yy00NmNmLTk3NTItNGVlY2M1MzI4MjQ0XkEyXkFqcGc@._V1_.jpg
];


const Games = () => {
  const [movies, setGames] = useState(hardcodedGames);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await fetch("https://personalwebsite-z2n0.onrender.com/favorites");
  //       // const response = await fetch("http://localhost:4000/favorites");
  //       const data = await response.json();
  //       setGames(data.games);
  //     } catch (error) {
  //           console.error("Error fetching games:", error);
  //     } finally {
  //           setLoading(false);
  //     }
  //   };

  //   fetchMovies();
  // }, []);

  return (
    <div className="movie-container">
      <div className="movies-header">
        <h2>games</h2>
      </div>

      {loading ? (
        <p>GAMES LOADING...</p>
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

export default Games;
