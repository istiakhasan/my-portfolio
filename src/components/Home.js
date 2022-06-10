import React, { useEffect } from "react";
import AboutMe from "./AboutMe";
import ContuctForm from "./ContuctForm";

import Header from "./Header";

import Projects from "./Projects";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <main id="home">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <ContuctForm />
    </main>
  );
};

export default Home;
