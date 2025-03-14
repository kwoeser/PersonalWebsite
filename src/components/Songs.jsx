import { useState } from "react";
import "../songs.css"; 

const Songs = () => {
  const [songs, setSongs] = useState([]);

  
  async function getCurrentlyPlaying() {
    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            Authorization: import.meta.env.VITE_SPOTIFY_KEY
        }
    });

    if (response.status === 200) {
        const data = await response.json();
        // The current playing song
        return data.item; 
    } else {
        return null;
    }
  } 


  return (
    <div className="movie-container">
      <div className="movies-header">
        <h2>songs</h2>
      </div>
        {/* <a href=""> spotify</a> */}
        <p>under construction</p>
        
        
    </div>
    
  );
};

export default Songs;
