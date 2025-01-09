import "./App.css";
import Header from "./component/Header.js";
import Home from "./component/Home.js";
import Intro from "./component/Intro.js";
import Skills from "./component/Skills.js";
import Projects from "./component/Projects.js";
import Contact from "./component/Contact.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
