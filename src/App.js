import { Route, Routes } from 'react-router-dom';
import "./App.css";

import NavBar from './components/NavBar.js';
import Home from './views/Home.js';
import Footer from './components/Footer.js';
import HardSkill from './views/HardSkill.js';
import SoftSkill from './views/SoftSkill';
import Project from './views/Project';
import Contact from './views/Contact';

const App = () => {
  return (
    <>
      <div class="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SoftSkill" element={<SoftSkill />} />
          <Route path="/HardSkill" element={<HardSkill />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
