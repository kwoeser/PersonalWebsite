import { useState, useEffect } from "react";
import "../movies.css"; 

const hardcodedMovies = [
  {
    title: "La Haine (1995)",
    url: "https://letterboxd.com/film/la-haine/",
    poster: "https://a.ltrbxd.com/resized/film-poster/5/1/6/8/4/51684-la-haine-0-1000-0-1500-crop.jpg?v=b6677cc136"
  },
  {
    title: "Shaolin Soccer (2001)",
    url: "https://letterboxd.com/film/shaolin-soccer/",
    poster: "https://a.ltrbxd.com/resized/film-poster/4/5/0/2/5/45025-shaolin-soccer-0-1000-0-1500-crop.jpg?v=a071ce6617"
  },
  {
    title: "Tokyo Godfathers (2003)",
    url: "https://letterboxd.com/film/tokyo-godfathers/",
    poster: "https://a.ltrbxd.com/resized/sm/upload/zl/no/np/nn/aY1q9dTGC8u8TUsAgnpJHsdAdJZ-0-1000-0-1500-crop.jpg?v=6bf4242f8d"
  },
  {
    title: "How to Train Your Dragon (2010)",
    url: "https://letterboxd.com/film/how-to-train-your-dragon/",
    poster: "https://a.ltrbxd.com/resized/sm/upload/0r/r7/c6/7e/hIXX3IRFy0InUOmYeWjvhCAgQNj-0-1000-0-1500-crop.jpg?v=d158027eb4"
  },
];

const MovieFavorites = () => {
  const [movies, setMovies] = useState(hardcodedMovies);
  const [loading, setLoading] = useState(false); 

  // Uncomment this later when integrating with backend
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await fetch("https://personalwebsite-z2n0.onrender.com/favorites");
  //       const data = await response.json();
  //       setMovies(data.movies);
  //     } catch (error) {
  //       console.error("Error fetching favorites:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMovies();
  // }, []);

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
