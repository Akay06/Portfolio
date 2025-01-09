import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import "./Intro.css";
import profileImage from "../IMG_3644.jpg";
import IntersectionAnimationTrigger from "./IntersectionAnimationTrigger";

const Intro = () => {
  const [animated, setAnimated] = useState(false);

  const handleInView = () => {
    setAnimated(true);
  };

  return (
    <IntersectionAnimationTrigger onInView={handleInView}>
      <section
        id="intro-section"
        className={`animated-element ${animated ? "animate" : ""}`}
      >
        {animated && (
          <div className="intro">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .callFunction(() => {
                    document.querySelector(
                      ".Typewriter__cursor1"
                    ).style.display = "initial";
                  })
                  .typeString("Hi there,")
                  .callFunction(() => {
                    document.querySelector(
                      ".Typewriter__cursor1"
                    ).style.display = "none";
                  })
                  .start();
              }}
              options={{
                cursorClassName: "Typewriter__cursor1",
                cursor: "&#9898",
              }}
            />
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2500)
                  .changeDelay(25)
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
              options={{
                cursorClassName: "Typewriter__cursor3",
                cursor: "&#9898",
              }}
            />
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(13000)
                  .changeDelay(25)
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
              options={{
                cursorClassName: "Typewriter__cursor2",
                cursor: "&#9898",
              }}
            />

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
        )}
        <div className="profile-image">
          <img
            src={profileImage}
            height="100%"
            width="100%"
            alt="Headshot of Kannappan Aravind"
          />
        </div>
      </section>
    </IntersectionAnimationTrigger>
  );
};

export default Intro;
