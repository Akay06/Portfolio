import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    access_key: "20fa20dd-6af3-4c99-96a5-7c9eae617fb0",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ email: "", message: "" });
      } else {
        const errorData = await response.json();
        alert(`Failed to send: ${errorData.message}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact-section">
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <p>Say hello</p>
          <hr
            style={{
              width: "100%",
              border: "2px solid coral",
            }}
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
          />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message here"
          ></textarea>
          <button id="submit-button" type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
            &nbsp;Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
