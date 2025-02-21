import { Link } from "react-router-dom";
import "../index.css"; // Import global styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-item">home</Link>
        <Link to="/projects" className="nav-item">projects</Link>
        <Link to="/favorites" className="nav-item">favorites</Link>
        <Link to="/contact" className="nav-item">contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
