import { useState, useEffect } from "react";
import "../movies.css"; 

const hardcodedMovies = [
  {
    title: "Shaolin Soccer (2001)",
    url: "https://letterboxd.com/film/shaolin-soccer/",
    poster: "https://a.ltrbxd.com/resized/film-poster/4/5/0/2/5/45025-shaolin-soccer-0-1000-0-1500-crop.jpg?v=a071ce6617"
  },
    {
    title: "Iron Man (2008)",
    url: "https://letterboxd.com/film/iron-man-2008/",
    poster: "https://a.ltrbxd.com/resized/film-poster/5/0/8/2/5/50825-iron-man-0-1000-0-1500-crop.jpg?v=f03c15122c"
  },
  {
    title: "La Haine (1995)",
    url: "https://letterboxd.com/film/la-haine/",
    poster: "https://a.ltrbxd.com/resized/film-poster/5/1/6/8/4/51684-la-haine-0-1000-0-1500-crop.jpg?v=b6677cc136"
  },

  {
    title: "As Above So Below (2014)",
    url: "https://letterboxd.com/film/as-above-so-below-2014/",
    poster: "https://a.ltrbxd.com/resized/film-poster/1/8/0/0/8/7/180087-as-above-so-below-0-1000-0-1500-crop.jpg?v=fba432615e"
  },
];

const MovieFavorites = () => {
  const [movies, setMovies] = useState(hardcodedMovies);
  const [loading, setLoading] = useState(false); 

  // Uncomment this later when integrating with backend


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
