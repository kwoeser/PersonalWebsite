import React from "react";
import { motion } from "framer-motion";
import "../projects_page.css"; 
import { Github, Globe } from "lucide-react"; 
import "../index.css"; 

function ProjectsPage() {
  const projects = [
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

    {
        title: "AI chatbot",
        description:
        "Chatbot powered by Google Gemini. Still in development, with plans to support multiple LLMs.",
        image: "assets/KARMA-AI.png",
        tags: ["React", "Express", "MongoDB", "Clerk API", "Google Gemini API"],
        liveDemo: "https://gem-clone-lilac.vercel.app/",
        sourceCode: "https://github.com/kwoeser/GemClone",
    },
    
    {
      title: "Easy A",
      description:
      "Helps students figure out how tough a class or professor is by looking at past grade data.",
      image: "assets/easyA.png",
      tags: ["Python", "Flask", "MongoDB", "JavaScript", "AJAX", "BeautifulSoup", "Docker"],
      sourceCode: "https://github.com/kwoeser/EasyA",
    },

    {
      title: "Personal Portfolio Website",
      description: "Site to showcase projects, skills, experience, and personal favorites.",
      image: "assets/portf.png",
      tags: ["React", "CSS", "React Router", "Framer Motion"],
      liveDemo: "https://kwoeser.netlify.app/",
      sourceCode: "https://github.com/kwoeser/PersonalWebsite"
    },
    
    {
      title: "Tibetan Book Store",
      description:
      "Online bookstore where users can browse and manage book listings.",
      image: "assets/portf.png",
      tags: ["React", "Node.js", "Express", "MySQL", "Docker"],
      sourceCode: "https://github.com/kwoeser/gymappp",
    },
    


    // Add pacman ai....





  ];





  return (
    <div className="page-container">
      <motion.div
        className="projects-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        <h2 className="project-title">projects</h2>

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
                      <Globe /> Website
                    </a>
                  )}
                  {project.sourceCode && (
                    <a target="_blank" rel="noopener noreferrer" href={project.sourceCode} className="project-button">
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
