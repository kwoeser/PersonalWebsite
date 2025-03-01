import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css"; // Import global styles

function WorkEducationTabs() {
  const [activeTab, setActiveTab] = useState("work");

  return (

    <div className="tabs-container">
      {/* Full-width Tab Bar */}
      <div className="tab-bar">
        <button
          className={`tab-option ${activeTab === "work" ? "active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          Work
        </button>
        <button
          className={`tab-option ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <motion.div
          className="tab-indicator"
          animate={{ x: activeTab === "work" ? 0 : "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>




      {/* Timeline Section */}
      <div className="tab-content">
        <AnimatePresence mode="wait">
          {activeTab === "work" ? (
            <motion.div
              key="work"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="timeline-container"
            >

                {/* FIX IMAGES */}
              {/* Work Timeline */}
              <div className="timeline-item">
                <div className="timeline-icon">
                  <img src="assets/cognizant.jpg" alt="Cognizant" />
                </div>
                <div className="timeline-content">
                  <span className="timeline-date">June 2024 - August 2024</span>
                  <h3>Cognizant</h3>
                  <p>Generative AI Intern</p>

                  {/* Description */}
                  <ul className="job-description">
                  <li>Assisted in fine-tuning generative AI models.</li>
                  <li>Conducted model evaluations and adjusted hyperparameters to optimize performance.</li>
                    
                  </ul>
                </div>  
              </div>

              <div className="timeline-item">
                <div className="timeline-icon">
                  <img src="assets/uo.jpg" alt="UO SRML" />
                </div>
                <div className="timeline-content">
                  <span className="timeline-date">Sept 2022 - June 2023</span>
                  <h3>University of Oregon SRML</h3>
                  <p>Data Analyst Intern</p>
                  
                  {/* Description */}
                  <ul className="job-description">
                  <li>Developed scripts to automate data collection and ensure data integrity.</li>
                  <li>Participated in data collection efforts, retrieving solar radiation data from various stations across Oregon.</li>
                  </ul>

                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="timeline-container"
            >
              {/* Education Timeline */}
              <div className="timeline-item">
                <div className="timeline-icon"><img src="assets/uo.jpg" alt="UO EDUCATION" /></div>
                <div className="timeline-content">
                  <span className="timeline-date">2021 - 2025</span>
                  <h3>University of Oregon</h3>
                  <p>Bachelor's Degree</p>
                  <p>Major in Computer Science, Minor in Math</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default WorkEducationTabs;
