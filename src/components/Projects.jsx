import React from "react";
import "../index.css"; 
import {Github, Globe} from "lucide-react";
import { Link } from "react-router-dom";

// Project Descriptions
const projects = [
   {
    title: "Article Curation Platform",
    description:
    "Worked in a team to build a React frontend, using React Query to optimize API requests with caching, background updates, and infinite pagination. Designed the Node.js backend with TS-rest API contracts, ensuring strict type API communication.",
    image: "assets/ARTICLE.png",
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker", "AWS"],
    liveDemo: "http://bytereads.duckdns.org:5173/",
    sourceCode: "https://github.com/kwoeser/Byte-sized-reads",
    },
    {
      title: "House Prices Predictor",
      description:
      "Built a machine learning model to predict house prices and deployed it via a Flask API. Optimized Random Forest and Gradient Boosting models, improving accuracy with hyperparameter tuning and RMSE evaluation. Visualized results using scatter plots.",
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
  {
    title: "Easy A",
    description:
    "Web based app designed to help students analyze the grading history of courses and instructors. Students can use historical grade data to compare grading distributions and make informed decisions about which classes and instructors to choose.",
    image: "assets/easyA.png",
    tags: ["Python", "Flask", "MongoDB", "JavaScript", "AJAX", "BeautifulSoup", "Docker"],
    sourceCode: "https://github.com/kwoeser/EasyA",
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
