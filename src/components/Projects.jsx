import React from "react";
import "../index.css"; 
import {Github, Globe} from "lucide-react";
import { Link } from "react-router-dom";

// Project Descriptions
const projects = [
   {
    title: "ByteSized Reads",
    description:
    "Worked on a team to develop a full-stack article curation platform using React, Node.js, and TS-rest, with type-safe APIs and optimized data fetching with React Query.",
    image: "assets/ARTICLE.png",
    tags: ["TypeScript", "React", "Node.js", "React Query", "PostgreSQL", "Tailwind CSS", "Docker", "AWS"],
    liveDemo: "https://bytereads.duckdns.org/",
    sourceCode: "https://github.com/kwoeser/Byte-sized-reads",
    },
    {
      title: "GitRead",
      description:
      "Developed an automated tool that generates detailed README templates for GitHub repositories. Uses GitHub OAuth for authentication and pulls repository metadata to dynamically create comprehensive documentation.",
      image: "assets/gitread.png",
      tags: ["Python", "Flask", "React", "GitHub OAuth", "React Query", "Flask-Dance", "Flask-CORS"],
      liveDemo: "https://gitread-five.vercel.app/",
      sourceCode: "https://github.com/kwoeser/gitread",
    },
    {
      title: "House Prices Predictor",
      description:
      "Built a machine learning model to predict house prices and deployed it via a Flask API. Optimized Random Forest and Gradient Boosting models, improving accuracy with hyperparameter tuning and RMSE evaluation.",
      image: "assets/HOUSE-PRICE.png",
      tags: ["Python", "Flask", "Pandas", "Scikit-learn", "Matplotlib"],
      sourceCode: "https://github.com/kwoeser/regression-house-prices",
  },
    {
        title: "AI chatbot",
        description:
        "Developing a full-stack AI chatbot powered by Google Gemini AI. Built with React for the front end and Express & MongoDB for the back end. Integrated Clerk authentication to enable secure user sign-ups and logins.",
        image: "assets/KARMA-AI.png",
        tags: ["React", "Express", "MongoDB", "Git", "Clerk API", "Google Gemini API"],
        liveDemo: "https://gem-clone-lilac.vercel.app/",
        sourceCode: "https://github.com/kwoeser/GemClone",
    },



];



function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Featured Projects</h2>

        <Link to="/Projects" className="view-more">View More →</Link>
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
