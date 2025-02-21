import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-6 bg-gray-900 text-white flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">My Portfolio</div>
      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-gray-400 transition">Home</Link>
        <Link to="/projects" className="hover:text-gray-400 transition">Projects</Link>
        <Link to="/favorites" className="hover:text-gray-400 transition">Favorites</Link>
        <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;