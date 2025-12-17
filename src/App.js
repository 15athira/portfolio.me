import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";

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
      <Contact />

    </div>
  );
}

export default App;