import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage"; 
import Projects from "./components/Projects";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        
      <Footer />
    </div>
  );
}

export default App;