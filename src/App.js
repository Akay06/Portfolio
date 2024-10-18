import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header.js";
import Home from "./component/Home.js";
import Intro from "./component/Intro.js";
import Skills from "./component/Skills.js";
import Projects from "./component/Projects.js";
import Contact from "./component/Contact.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
