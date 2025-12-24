import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";

import Divider from "./Divider";

function App() {
  return (
    <div>
      <Header />
      <Divider />
      <Home />
      <Divider />
      <About />
      <Divider />
      <Education />
      <Divider />
      <Skills />
      <Divider />
      <Certifications />
      <Divider />
      <Projects />
      <Divider />
      <Contact />

    </div>
  );
}

export default App;