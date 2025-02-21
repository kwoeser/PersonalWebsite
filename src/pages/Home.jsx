import WorkCard from "../components/WorkCard";
import Navbar from "../components/Navbar"; // Import Navbar
import { motion } from "framer-motion";
import "../index.css"; // Import global CSS
import { MapPin, Linkedin , Github, Download, Mail  } from "lucide-react";

function Home() {
  return (
    <div className="page-container"> {/* Single container for everything */}
      <Navbar /> {/* Navbar stays inside the container */}
      
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
          <br />
          <MapPin className="map-icon"/>Gresham, OR

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

          <a href="https://www.linkedin.com/in/karma-woeser-b83869249/">
            <button className="btn"><Linkedin /></button>
          </a>

          <a href="https://github.com/kwoeser">
            <button className="btn">
              <Github />
            </button>
          </a>

          <a href="mailto:karmawoeser1@gmail.com" className="btn-content">
            <button className="btn">
                <Mail className="mail-icon" />       
            </button>
          </a>

        </motion.div>


        <motion.section
          className="work-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="section-title">Work</h2>
          <WorkCard
            // time = ""
            role="Data Analyst Intern"
            company="University of Oregon Solar Radiation Monitoring Lab"
            
            description={[
              "Collaborated with faculty to develop data collection scripts ensuring data integrity.",
              "Utilized Python libraries such as Pandas and NumPy to help automate data analysis from multiple stations, achieving accurate and consistent results.",
              "Participated in data collection efforts, retrieving solar radiation data from various stations across Oregon."
            ]}
          />
        </motion.section>


      </div>
    </div>
  );
}

export default Home;
