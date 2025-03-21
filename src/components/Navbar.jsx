import { Link } from "react-router-dom";
import "../index.css"; 
import { useState } from "react";
import { Sun, Moon } from 'lucide-react';

function Navbar() {
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = () => {
    setLightMode(!lightMode);
  };
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-item">home</Link>
        <Link to="/Projects" className="nav-item">projects</Link>
        <Link to="/Favorites" className="nav-item">favorites</Link>
        <Link to="/Contact" className="nav-item">contact</Link>
      </div>

      {/* light and dark mode */}
      {/* <div className={lightMode ? "app light-mode" : "app"}>
            <button onClick={toggleTheme} className="light-dark-mode">
              {lightMode ? <Sun/> : <Moon/>}
            </button>
      </div> */}


    </nav>
  );
}

export default Navbar;
