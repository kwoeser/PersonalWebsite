import { Link } from "react-router-dom";
import "../index.css"; 
import { useState } from "react";
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



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

    </nav>
  );
}

export default Navbar;
