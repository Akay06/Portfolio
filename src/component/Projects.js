import React, { useRef } from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "react-multi-carousel/lib/styles.css";

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
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
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
                    This project is a fully responsive and secure e-commerce web
                    application designed to enhance the online shopping
                    experience. The platform ensures seamless interactions
                    between merchants and buyers, providing a user-friendly
                    interface for both sellers and customers.
                  </p>
                  <ul>
                    <li>For Sellers: Effortlessly list and manage products.</li>
                    <li>
                      For Buyers: Browse, explore, and purchase items with ease.
                    </li>
                  </ul>
                  <p>
                    With a focus on security, adaptability, and smooth
                    transactions, this platform aims to redefine the way online
                    shopping is experienced.
                  </p>
                </div>
                <div className="projects-button">
                  <button>
                    View project&nbsp;
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
            <div className="projects-item">
              <div>
                <p>This is project 2.</p>
              </div>
            </div>
            <div className="projects-item">
              <div>
                <p>This is project 3.</p>
              </div>
            </div>
            <div className="projects-item">
              <div>
                <p>This is project 4.</p>
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
          {/*<Carousel
            responsive={responsive}
            centerMode={true}
            focusOnSelect={true}
          >
            <div className="projects-item">
              <img src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
              <div>
                <p>This is project 1.</p>
              </div>
              <div>
                <button>View project</button>
              </div>
            </div>
            <div className="projects-item">
              <img src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
              <div>
                <p>This is project 2.</p>
              </div>
            </div>
            <div className="projects-item">
              <img src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
              <div>
                <p>This is project 3.</p>
              </div>
            </div>
            <div className="projects-item">
              <img src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
              <div>
                <p>This is project 4.</p>
              </div>
            </div>
          </Carousel>*/}
        </div>
      </section>
    </>
  );
};

export default Projects;
