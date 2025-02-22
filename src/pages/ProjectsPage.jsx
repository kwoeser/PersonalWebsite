import React from "react";
import { motion } from "framer-motion";
import "../projects_page.css"; // Import global styles
import { Github, Globe } from "lucide-react"; // Icons for buttons
import "../index.css"; 

function ProjectsPage() {
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


    {
      title: "Personal Portfolio Website",
      description:
      "I built this personal portfolio website to showcase my projects, skills, and work experience in an visually appealing format. ",
      image: "assets/portf.png",
      tags: ["React", "CSS", "Vite", "React Router", "Framer Motion"],
      liveDemo: "https://kwoeser.netlify.app/",
      sourceCode: "https://github.com/kwoeser/PersonalWebsite",
    },

    {
      title: "Easy A",
      description:
      "Web based app designed to help students analyze the grading history of courses and instructors. Students can use historical grade data to compare grading distributions and make informed decisions about which classes and instructors to choose.",
      image: "assets/easyA.png",
      tags: ["Python", "JavaScript", "AJAX", "BeautifulSoup", "MongoDB", "Docker", "Git"],
      sourceCode: "https://github.com/kwoeser",
    },

    {
      title: "Gym App",
      description:
      "Developed a gym web app for users to generate workout plans and track progress.",
      image: "assets/gym.png",
      tags: ["React", "Tailwind CSS", "Vite"],
      liveDemo: "https://karmawoeser.netlify.app",
      sourceCode: "https://github.com/kwoeser",
    },


   


   



  ];





  return (
    <div className="page-container">
      <motion.div
        className="projects-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        <h2 className="project-title">Projects</h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
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
                    <a href={project.liveDemo} className="project-button">
                      <Globe /> Website
                    </a>
                  )}
                  {project.sourceCode && (
                    <a href={project.sourceCode} className="project-button">
                      <Github /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

  );
}

export default ProjectsPage;
