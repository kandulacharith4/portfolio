import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Form from "./components/Form";
import AdditionalInfo from "./components/AdditionalInfo";
import "./styles/App.css";

function AllSections() {
  return (
    <>
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <AdditionalInfo />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<AllSections />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
  <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  ↑
</button>

}

export default App;