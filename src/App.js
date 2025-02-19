import "./App.css";
import Header from "./component/Header.js";
import Home from "./component/Home.js";
import Intro from "./component/Intro.js";
import Skills from "./component/Skills.js";
import Projects from "./component/Projects.js";
import Contact from "./component/Contact.js";
import Footer from "./component/footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function App() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [isDark, setIsDark] = useState(prefersDarkMode);

  useEffect(() => {
    if (isDark) {
      document.body.style.colorScheme = "dark";
    } else {
      document.body.style.colorScheme = "light";
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="App">
      <FontAwesomeIcon
        className="lightdark"
        rotation={180}
        size="2xl"
        icon={faLightbulb}
        onClick={toggleTheme}
      />
      <Header />
      <Home />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
