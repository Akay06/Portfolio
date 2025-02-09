import React from "react";
import "./Home.css";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <Fade>
        <main id="main">
          <div className="main-container">
            <h1>Kannappan Aravind</h1>
            <h2>Software Developer</h2>
            <h3 className="fade-out">
              <span>&#8640;</span>&nbsp;Full Stack
            </h3>
          </div>
        </main>
      </Fade>
    </>
  );
};

export default Home;
