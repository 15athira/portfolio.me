import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";

function App(){
  return(
    <div>
      <Header />
      <Home />
      <About />
      <Education/>
      <Contact />

    </div>
  );
}

export default App;