import React from "react";
import "../index.css"; // Import global styles


// Project Descriptions
const projects = [
    {
        title: "AI chatbot",
        description:
        "Developing a full-stack AI chatbot powered by Google Gemini AI. Built with React for the front end and Express & MongoDB for the back end. Integrated Clerk authentication to enable secure user sign-ups and logins.",
        image: "assets/KARMA-AI.png",
        tags: ["React", "Express", "MongoDB", "Git", "Clerk API", "Google Gemini AI API"],
        liveDemo: "https://gem-clone-lilac.vercel.app/",
        sourceCode: "https://github.com/kwoeser/GemClone",
    },

    {
        title: "House Prices Predictor",
        description:
        "Built a predictive model to predict house prices using Random Forest and Gradient Boosting regression. Evaluated model performance with RMSE, visualized accuracy via scatter plots, and optimized results by tuning hyperparameters with GridSearchCV.",
        image: "assets/HOUSE-PRICE.png",
        tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
        sourceCode: "https://github.com/kwoeser/regression-house-prices",
    },


];



function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Projects</h2>
        <a href="/Projects" className="view-more">
          View More →
        </a>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            
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
                  <a href={project.liveDemo} className="project-button">
                    🌐 Website
                  </a>
                )}
                {project.sourceCode && (
                  <a href={project.sourceCode} className="project-button">
                    💻 Source
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
