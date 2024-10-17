import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <ul>
          <li>K</li>
        </ul>
      </div>
      <div className="navbar-container">
        <div className="navbar-center">
          <ul>
            <li>Intro</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navbar-bottom">
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
