import React from "react";
import "./Projects.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section id="projects-section">
        <div className="projects-container">
          <Carousel
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
              <div>
                <button>View project</button>
              </div>
            </div>
            <div className="projects-item">
              <img src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
              <div>
                <p>This is project 3.</p>
              </div>
              <div>
                <button>View project</button>
              </div>
            </div>
            <div className="projects-item">
              <img src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
              <div>
                <p>This is project 4.</p>
              </div>
              <div>
                <button>View project</button>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Projects;
