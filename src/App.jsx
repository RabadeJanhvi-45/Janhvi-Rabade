import React, { useEffect } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import CertificateSection from "./components/Certifications/CertificateSection";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  useEffect(() => {
    // Disable right-click for the entire app
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    // Attach event listener to disable right-click
    document.addEventListener("contextmenu", disableRightClick);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CertificateSection />
      <Contact />
    </div>
  );
}

export default App;
