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
    title: "Assassin's Creed Unity",
    poster: "https://m.media-amazon.com/images/M/MV5BMDY1NmE5YzgtYTRiYS00ZDVlLTkxNDktYzU2YzIyZWE3NjQ2XkEyXkFqcGc@._V1_.jpg"
  },
  {
    title: "Terraria",
    poster: "https://m.media-amazon.com/images/M/MV5BZWJkZWNkZDgtOTMzMS00NjlhLTk5MTEtZWFiMTQ0MzE4MzAyXkEyXkFqcGc@._V1_.jpg"
  }
  
];


const Games = () => {
  const [movies, setGames] = useState(hardcodedGames);
  const [loading, setLoading] = useState(false);


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
