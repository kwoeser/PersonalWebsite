import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css"; // Import global styles

function WorkEducationTabs() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div className="tabs-container">
      {/* Tab Buttons */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "work" ? "active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          Work
        </button>
        <button
          className={`tab-button ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        <AnimatePresence mode="wait">
        {activeTab === "work" ? (
          <div className="work-experience">
            {/* Work Timeline or Card Section */}
            <div className="work-entry">
              <img src="assets/cognizant.jpg" alt="Cognizant" className="work-logo" />
              <div>
                <span>June 2024 - August 2024</span>
                <h3>Cognizant</h3>
                <p>Generative AI Extern</p>
              </div>
            </div>

            <div className="work-entry">
              <img src="assets/o.jpg" alt="UO SRML" className="work-logo" />
              <div>
                <span>Sept 2022 - June 2023</span>
                <h3>Solar Radiation Monitoring Lab</h3>
                <p>Data Analyst</p>
                
              </div>
            </div>
            {/* Add more work entries */}

          </div>

        ) : (

          <div className="education-experience">
            {/* Education Section */}
            <div className="education-entry">
              <h3>University of Oregon</h3>
              <p>Bachelor's Degree in Computer Science</p>
              <span>2021 - 2025</span>
            </div>

            {/* Add more education entries */}
          </div>


        )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default WorkEducationTabs;
