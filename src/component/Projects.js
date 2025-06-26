import React, { useRef } from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "react-multi-carousel/lib/styles.css";
import { Fade } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
      <Fade duration={2000}>
        <section id="projects-section">
          <div className="projects-container">
            <Slider
              className="projects-slider"
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div className="projects-item">
                <div className="projects-content">
                  <h3>ShopSwift</h3>
                  <div className="projects-description">
                    <p>
                      This project is a fully responsive and secure e-commerce
                      web application designed to enhance the online shopping
                      experience. The platform ensures seamless interactions
                      between merchants and buyers, providing a user-friendly
                      interface for both sellers and customers.
                    </p>
                    <ul>
                      <li>
                        For Sellers: Effortlessly list and manage products.
                      </li>
                      <li>
                        For Buyers: Browse, explore, and purchase items with
                        ease.
                      </li>
                    </ul>
                    <p>
                      With a focus on security, adaptability, and smooth
                      transactions, this platform aims to redefine the way
                      online shopping is experienced.
                    </p>
                  </div>
                  <div className="projects-button">
                    /*<a
                      href="https://shopswift.akay06.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>
                        View Project&nbsp;
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </a>*/
                    <a
                      href="https://github.com/Akay06/ShopSwift-Frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>
                        Source Code&nbsp;
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="projects-item">
                <div className="projects-content">
                  <h3>Text Summeriser</h3>
                  <div className="projects-description">
                    <p>
                      Developed an AI-driven text summarizer utilizing the
                      OpenAI API and cloud computing to generate context-aware
                      summaries. The application was deployed on Google App
                      Engine, ensuring secure API key management and high uptime
                      while efficiently handling large volumes of requests.
                    </p>
                    <p>
                      Implemented automated testing and deployment through CI/CD
                      pipelines on Google Cloud Build. Integrated real-time
                      logging and push notifications with Google Pub/Sub,
                      enabling proactive system monitoring and performance
                      optimization.
                    </p>
                  </div>
                  <div className="projects-button">
                    <a
                      href="https://summarizer.akay06.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>
                        View Project&nbsp;
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </a>
                    <a
                      href="https://github.com/Akay06/Text-Summeriser"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>
                        Source Code&nbsp;
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="projects-item">
                <div className="projects-content">
                  <h3>Fruit and Vegetable Classifier</h3>
                  <div className="projects-description">
                    <p>
                      This project is an image classification application that
                      identifies whether an uploaded image is a fruit or
                      vegetable, determines its type, and classifies it as fresh
                      or rotten.
                    </p>
                    <p>
                      It is built using FastAPI as the backend and leverages
                      four different models based on YOLO and TensorFlow to
                      enhance classification accuracy. The frontend is developed
                      using React, providing a seamless and intuitive user
                      experience.
                    </p>
                  </div>
                  <div className="projects-button">
                    <a
                      href="https://github.com/Akay06/Fruit-Vegetable-Health-Classifier"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>
                        Source Code&nbsp;
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="projects-item">
                <div className="projects-content">
                  <h3>File Transfer & Compute Service</h3>
                  <div className="projects-description">
                    <p>
                      This project implements a file upload/download service
                      alongside a computation service, enabling efficient remote
                      file management and processing. It uses Remote Procedure
                      Call (RPC) for seamless client-server communication,
                      ensuring low-latency and secure interactions.
                    </p>
                    <p>
                      Built with Java and gRPC, the system supports scalable,
                      high-performance file transfers and remote computations.
                      Its architecture allows for easy extension, making it
                      adaptable for various distributed applications.
                    </p>
                  </div>
                  <div className="projects-button">
                    <a
                      href="https://github.com/Akay06/File-Transfer-Computation-Service-using-gRPC-in-Java"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>
                        Source Code&nbsp;
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="button">
              <button className="prev" onClick={previous}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className="next" onClick={next}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default Projects;
