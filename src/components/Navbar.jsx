import { Link } from "react-router-dom";
import "../index.css"; 
import { useState } from "react";
import { Sun, Moon, Menu, X } from 'lucide-react';

function Navbar() {
  const [lightMode, setLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setLightMode(!lightMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <Link to="/" className="nav-item" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>home</Link>
        <Link to="/Projects" className="nav-item" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>projects</Link>
        <Link to="/Favorites" className="nav-item" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>favorites</Link>
        <Link to="/Contact" className="nav-item" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>contact</Link>
      </div>

      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

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
