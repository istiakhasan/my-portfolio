import React from 'react';
import ContuctForm from './ContuctForm';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';


const Home = () => {
    return (
        <main id='home'>
          <Header />   
          <Projects />
          <Skills />
          <ContuctForm />
        </main>
    );
};

export default Home;