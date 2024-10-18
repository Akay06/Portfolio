import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-top">
        <ul>
          <li>
            <NavLink to="/">K</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-container">
        <div className="navbar-center">
          <ul>
            <li>
              <NavLink className="nav-link" to="/intro">
                Intro
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-bottom">
          <ul>
            <li>
              <a href={process.env.REACT_APP_GITHUB_URL} target="_blank">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </li>
            <li>
              <a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank">
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
