import React from "react";
import "../index.css"; // Import global styles
import { Linkedin, Github, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      {/* Left Side*/}
      <div className="footer-left">
        <img src="/assets/logo.png" alt="footer logo" className="footer-logo" />
      </div>

      {/* Right Side */}
      <div className="footer-right">
        <a href="https://www.linkedin.com/in/karma-woeser-b83869249/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="footer-icon" />
        </a>
        <a href="https://github.com/kwoeser" target="_blank" rel="noopener noreferrer">
            <Github className="footer-icon" />
        </a>
        

        <a href="mailto:karmawoeser1@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="footer-icon" />
        </a>



      </div>
    </footer>
  );
}

export default Footer;
