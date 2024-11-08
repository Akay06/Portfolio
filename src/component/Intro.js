import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import "./Intro.css";
import profileImage from "../IMG_3644.jpg";

const Intro = () => {
  return (
    <>
      <section id="intro-section">
        <div className="intro typewriter">
          <p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi there,")
                  .callFunction(() => {
                    document.querySelector(
                      ".Typewriter__cursor1"
                    ).style.display = "none";
                  })
                  .start();
              }}
              options={{ cursorClassName: "Typewriter__cursor1" }}
            />
          </p>
          <p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2500)
                  .changeDelay(50)
                  .callFunction(() => {
                    document.querySelector(
                      ".Typewriter__cursor3"
                    ).style.display = "initial";
                  })
                  .typeString(
                    "I'm Kannappan, a Master's student in Computer Science at The University of Texas at Arlington. With experience in backend development, cloud computing, and retail tech, I specialize in building scalable systems and deploying RESTful APIs to improve operational efficiency."
                  )
                  .callFunction(() => {
                    document.querySelector(
                      ".Typewriter__cursor3"
                    ).style.display = "none";
                  })
                  .start();
              }}
              options={{ cursorClassName: "Typewriter__cursor3" }}
            />
          </p>
          <p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(19000)
                  .changeDelay(50)
                  .callFunction(() => {
                    document.querySelector(
                      ".Typewriter__cursor2"
                    ).style.display = "initial";
                  })
                  .typeString(
                    "I enjoy reading short stories and comics, and playing video games in my spare time."
                  )
                  .callFunction(() => {
                    document.querySelector(
                      ".Typewriter__cursor2"
                    ).style.display = "none";
                  })
                  .pauseFor(1000)
                  .callFunction(() => {
                    document.querySelector(".msg-button").style.animation =
                      "fadeIn 3s ease-in-out forwards";
                  })
                  .start();
              }}
              options={{ cursorClassName: "Typewriter__cursor2" }}
            />
          </p>

          <Link
            className="msg-button"
            to="contact-section"
            smooth={true}
            duration={500}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            &nbsp;Send me a message
          </Link>
        </div>
        <div className="profile-image">
          <img
            src={profileImage}
            height="100%"
            width="100%"
            alt="Headshot of Kannappan Aravind"
          />
        </div>
      </section>
    </>
  );
};

export default Intro;
