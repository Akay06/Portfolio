import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <ul>
          <li>
            <Link to="main" smooth={true} duration={500}>
              K
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-container">
        <div className="navbar-center">
          <ul>
            <li>
              <Link to="intro-section" smooth={true} duration={500}>
                Intro
              </Link>
            </li>
            <li>
              <Link to="skills-section" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects-section" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact-section" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-bottom">
          <ul>
            <li>
              <a
                href={`https://drive.google.com/file/d/1a54Qp0b9_dtHqiI-68pgvLhqnFwaDp3o/view?usp=sharing&t=${new Date().getTime()}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFile} size="xl" />
              </a>
            </li>
            <li>
              <a
                href={process.env.REACT_APP_GITHUB_URL || "https://github.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </li>
            <li>
              <a
                href={
                  process.env.REACT_APP_LINKEDIN_URL ||
                  "https://www.linkedin.com"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
