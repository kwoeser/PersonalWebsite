import { useState, useEffect } from "react";
import "../movies.css"; 


const hardcodedBooks = [
  {
    title: "Dune",
    poster: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg"
  },
  {
    title: "Blood Meridian",
    poster: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701688704i/394535.jpg"
  },
  {
    title: "One Piece",
    poster: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1318523719i/1237398.jpg"
  },
  {
    title: "Red Rising",
    poster: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1461354651i/15839976.jpg"
  }
];

const Books = () => {
  const [movies, setMovies] = useState(hardcodedBooks);
  const [loading, setLoading] = useState(false);


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
