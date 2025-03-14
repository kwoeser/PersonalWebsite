import express from "express";
import fs from "fs";
import csv from "csv-parser";
import fetch from "node-fetch";
import * as cheerio from "cheerio";
import cors from "cors";

const app = express();
const PORT = 4000;
const CSV_FILE = "./profile.csv";

app.use(cors())

let cachedMovies = null; // Store cached movie data
let lastFetchTime = 0; // Track last fetch time
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache


async function getMovieDetails(shortUrl) {
    try {
      // Follow redirect to get the full Letterboxd movie page
      const response = await fetch(shortUrl, { redirect: "follow" });
      const fullUrl = response.url;
  
      // Fetch the movie page HTML
      const moviePage = await fetch(fullUrl);
      const html = await moviePage.text();
      const $ = cheerio.load(html);
  
      const title = $("meta[property='og:title']").attr("content") || "Unknown Title";
    

      // Extract the movie poster
      let poster = "";
      const posterElement = $("div.film-poster").first(); 
        
      // Hardcoded posters 2 posters, for now CHANGE LATER
      // There are some UPLOADED POSTERS and some normal film posters. 
      // The normal poster url's are being grabbed properly but UPLOADED POSTERS aren't
      const TokyoGodfathers = {
        "https://letterboxd.com/film/tokyo-godfathers/": "https://a.ltrbxd.com/resized/sm/upload/zl/no/np/nn/aY1q9dTGC8u8TUsAgnpJHsdAdJZ-0-1000-0-1500-crop.jpg?v=6bf4242f8d",
      };

      const TrainDragon = {
        "https://letterboxd.com/film/how-to-train-your-dragon/": "https://a.ltrbxd.com/resized/sm/upload/0r/r7/c6/7e/hIXX3IRFy0InUOmYeWjvhCAgQNj-0-1000-0-1500-crop.jpg?v=d158027eb4",
      };


      if (TokyoGodfathers[fullUrl]) {
        return { title: "Tokyo Godfathers (2003)", url: fullUrl, poster: TokyoGodfathers[fullUrl] };
      }

      if (TrainDragon[fullUrl]) {
        return { title: "How to Train Your Dragon (2010)", url: fullUrl, poster: TrainDragon[fullUrl] };
      }

     
      if (posterElement.length) {
        const filmId = posterElement.attr("data-film-id"); 
        const filmSlug = posterElement.attr("data-film-slug"); 
        const posterPath = posterElement.attr("data-poster-url");

        if (filmId && filmSlug && posterPath) {
            // Construct the correct Letterboxd poster URL https://a.ltrbxd.com/resized/film-poster/5/1/6/8/4/51684/51684-la-haine-0-1000-0-1500-crop.jpg?
            poster = `https://a.ltrbxd.com/resized/film-poster/${filmId.slice(0,1)}/${filmId.slice(1,2)}/${filmId.slice(2,3)}/${filmId.slice(3,4)}/${filmId.slice(4,5)}/${filmId}-${filmSlug}-0-1000-0-1500-crop.jpg?`;
            
    
        }
      } 

      
      // Fallback to Open Graph image if poster isn't feteched properly
      if (!poster) {
        poster = $("meta[property='og:image']").attr("content") || 
                 "https://s.ltrbxd.com/static/img/empty-poster-150.8e416b46.png";
      }
  
      return { title, url: fullUrl, poster };

    } catch (error) {
      console.error(`Error fetching movie details for ${shortUrl}:`, error);
      return {
        title: "Unknown Title",
        url: shortUrl,
        poster: "https://s.ltrbxd.com/static/img/empty-poster-150.8e416b46.png",
      };
    }
}
  


// Read and parse the CSV file
async function readFavoritesFromCSV() {
  return new Promise((resolve, reject) => {
      const movies = [];
      fs.createReadStream(CSV_FILE)
          .pipe(csv())
          .on("data", (row) => {
              if (row["Favorite Films"]) {
                  const movieUrls = row["Favorite Films"].split(", ").map((url) => url.trim());
                  movies.push(...movieUrls);
              }
          })
          .on("end", async () => {
              try {
                  const movieDetails = await Promise.all(movies.map(getMovieDetails));
                  resolve(movieDetails);
              } catch (error) {
                  reject(error);
              }
          })
          .on("error", (error) => reject(error));
  });
}

// API endpoint, http://localhost:4000/letterboxd-favorites
app.get("/letterboxd-favorites", async (req, res) => {
  const now = Date.now();

  if (cachedMovies && now - lastFetchTime < CACHE_DURATION) {
      console.log("Serving cached movies");
      return res.json({ movies: cachedMovies });
  }

  try {
      const movies = await readFavoritesFromCSV();
      cachedMovies = movies;
      lastFetchTime = now;
      res.json({ movies });
  } catch (error) {
      console.error("Error processing favorites:", error);
      res.status(500).json({ error: "Failed to retrieve favorites" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
