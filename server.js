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

async function getMovieDetails(shortUrl) {
  try {
    // 1️⃣ Follow redirect to get the full Letterboxd movie page
    const response = await fetch(shortUrl, { redirect: "follow" });
    const fullUrl = response.url;

    // 2️⃣ Fetch the movie page HTML
    const moviePage = await fetch(fullUrl);
    const html = await moviePage.text();
    const $ = cheerio.load(html);

    // 3️⃣ Extract the **Title** and **Poster Image**
    const title = $("meta[property='og:title']").attr("content") || "Unknown Title";
    const poster = $("meta[property='og:image']").attr("content") || "https://s.ltrbxd.com/static/img/empty-poster-150.8e416b46.png";

    return { title, url: fullUrl, poster };
  } catch (error) {
    console.error(`Error fetching movie details for ${shortUrl}:`, error);
    return { title: "Unknown Title", url: shortUrl, poster: "https://s.ltrbxd.com/static/img/empty-poster-150.8e416b46.png" };
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
        // Fetch movie details for each favorite film
        const movieDetails = await Promise.all(movies.map(getMovieDetails));
        resolve(movieDetails);
      })
      .on("error", (error) => reject(error));
  });
}

// API endpoint
app.get("/letterboxd-favorites", async (req, res) => {
  try {
    const movies = await readFavoritesFromCSV();
    res.json({ movies });
  } catch (error) {
    console.error("Error processing favorites:", error);
    res.status(500).json({ error: "Failed to retrieve favorites" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
