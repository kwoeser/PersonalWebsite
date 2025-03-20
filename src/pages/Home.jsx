import { motion } from "framer-motion";
import "../index.css"; 
import { MapPin, Linkedin , Github, Download, Mail  } from "lucide-react";
import WorkEducationTabs from "../components/WorkEducationTabs";
import Projects from "../components/Projects";



function Home() {
  return (
    <div className="page-container"> 
 
      
      <div className="home-content">

        {/* Title card */}
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Karma Woeser
          {/* 👋 */}
        </motion.h1>


     
        <motion.p
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Software Engineer 
          <br/>
          <MapPin className="map-icon"/>Portland, OR
          <p>
          I'm a backend developer and student at the University of Oregon who enjoys working with
          Python and JavaScript. 
          </p>

        </motion.p>

        {/* Buttons card */}
        <motion.div
          className="buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          
          <a href="/assets/RESUME.pdf" download>
            <button className="btn">
              <span className="btn-text">Resume</span>
                <Download/>
            </button>
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/karma-woeser-b83869249/">
            <button className="btn"><Linkedin /></button>
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kwoeser">
            <button className="btn">
              <Github />
            </button>
          </a>

          <a target="_blank" rel="noopener noreferrer" href="mailto:karmawoeser1@gmail.com" className="btn-content">
            <button className="btn">
                <Mail className="mail-icon" />       
            </button>
          </a>

        </motion.div>


        {/* Work & Education Section */}
        <motion.section>
          
          <div className="work-section">
            <WorkEducationTabs /> 
          </div>

        </motion.section>


        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
        <div>
          {/* Skills Section */}
          <section className="skills-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">

              {[
                "Python",
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "Tailwind CSS",
                "Flask",
                "Docker",
                "MongoDB",
                "MySQL",
                "Git",
                "Linux",
                "NumPy",
                "PyTorch",
                
              ].map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
              
            </div>
          </section>
        </div>
        </motion.section>
        


        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
        <div>
          {/* Projects Section */}
          <Projects />
        </div>
        </motion.section>



            
      </div>
    </div>
  );
}

export default Home;
