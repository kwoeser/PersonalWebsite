
import MovieFavorites from "../components/MovieFavorites";
import Songs from "../components/Songs";
import Games from "../components/Games";
import Books from "../components/Books";

function Favorites() {
    return (
      <div>
        

        <MovieFavorites/>
        <Books/>
        <Games/>

        <Songs/>
      </div>
    );
  }
  
  export default Favorites;
  