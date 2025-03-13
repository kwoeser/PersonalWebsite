import { Link } from "react-router-dom";
import "../index.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-item">home</Link>
        <Link to="/Projects" className="nav-item">projects</Link>
        <Link to="/Favorites" className="nav-item">favorites</Link>
        <Link to="/Contact" className="nav-item">contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
