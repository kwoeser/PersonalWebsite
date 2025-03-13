import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());


// Using hardcoded movies for now --> SWAP to storing all favorites data later
const hardcodedMovies = [
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
  {
    title: "La Haine (1995)",
    url: "https://letterboxd.com/film/la-haine/",
    poster: "https://a.ltrbxd.com/resized/film-poster/5/1/6/8/4/51684-la-haine-0-1000-0-1500-crop.jpg?v=b6677cc136"
  },
  {
    title: "Shaolin Soccer (2001)",
    url: "https://letterboxd.com/film/shaolin-soccer/",
    poster: "https://a.ltrbxd.com/resized/film-poster/4/5/0/2/5/45025-shaolin-soccer-0-1000-0-1500-crop.jpg?v=a071ce6617"
  }
];

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

const hardcodedGames = [
    {
      title: "Elden Ring",
      poster: "https://m.media-amazon.com/images/M/MV5BMWNlMDBiYzYtMWMyMC00Zjc5LTlhMjItMjRlMzBmYmVkOGM0XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Uncharted 3: Drake's Deception",
      poster: "https://m.media-amazon.com/images/M/MV5BNzVkZTVlMDItYjI5Yy00NjQ5LWI4OWMtMjllYmIxMTUxZDVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Skate 3",
      poster: "https://m.media-amazon.com/images/M/MV5BYmQzOThkZGItMzA1Yy00NDFkLWJkYjUtNzFkNjRlNzk1YmM1XkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Terraria",
      poster: "https://m.media-amazon.com/images/M/MV5BZWJkZWNkZDgtOTMzMS00NjlhLTk5MTEtZWFiMTQ0MzE4MzAyXkEyXkFqcGc@._V1_.jpg"
    }
];



// API endpoint: http://localhost:4000/favorites
app.get("/favorites", (req, res) => {
  res.json({ movies: hardcodedMovies, books: hardcodedBooks, games: hardcodedGames });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
