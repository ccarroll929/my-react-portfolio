import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Resume } from "./components/Resume";

function App() {
  const [load, updateLoad] = useState(true);
// Loading timer
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Returns all components 
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skills />
      <Projects />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;