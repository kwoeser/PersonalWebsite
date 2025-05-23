import React from "react";
import "../index.css"; 
import {Github, Globe} from "lucide-react";
import { Link } from "react-router-dom";

// Project Descriptions
const projects = [
  {
      title: "Fake News & Political Bias Detector",
      description:
      "Site to analyze potential misinformation and political bias in news articles. Submit any article URL to scrape and analyze its content. ",
      image: "assets/fakenews.png",
      tags: ["Python", "FastAPI", "Scikit-learn", "NumPy", "TypeScript", "React"],
      // liveDemo: "https://bytereads.duckdns.org/",
      sourceCode: "https://github.com/kwoeser/fakenews",
    },
  {
    title: "ByteSized Reads",
    description:
    "Site to discover and share articles. Users can create accounts, browse by topic and review content through a simple interface.",
    image: "assets/ARTICLE.png",
    tags: ["TypeScript", "React", "Node.js", "Tailwind CSS", "React Query", "PostgreSQL", "Docker", "AWS"],
    liveDemo: "https://bytereads.duckdns.org/",
    sourceCode: "https://github.com/kwoeser/Byte-sized-reads",
  },
  {
    title: "GitRead",
    description:
    "Helps developers generate README files by pulling in their GitHub repo info.",
    image: "assets/gitread.png",
    tags: ["Python", "Flask", "React", "GitHub OAuth", "React Query", "Google Gemini API"],
    liveDemo: "https://gitread-five.vercel.app/",
    sourceCode: "https://github.com/kwoeser/gitread",
  },
  {
    title: "House Prices Predictor",
    description:
    "App that predicts house prices based on real housing data. Enter details like square footage and number of rooms and get a quick estimate.",
    image: "assets/HOUSE-PRICE.png",
    tags: ["Python", "Flask", "Pandas", "Scikit-learn", "Matplotlib"],
    sourceCode: "https://github.com/kwoeser/regression-house-prices",
},

];



function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Featured Projects</h2>

        <Link to="/Projects" className="view-more">view more →</Link>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
                onClick={() => window.open(project.image, "_blank")} 
                style={{ cursor: "pointer" }} 
              />
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>


              <div className="project-buttons">
                {project.liveDemo && (
                  <a target="_blank" rel="noopener noreferrer" href={project.liveDemo} className="project-button">
                    <Globe/> Website
                  </a>
                )}
                
                {project.sourceCode && (
                  <a target="_blank" rel="noopener noreferrer" href={project.sourceCode} className="project-button">
                    <Github /> Source
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
