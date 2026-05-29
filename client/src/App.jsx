import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

import {useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cursor from "./components/Cursor";
import { Skills } from "./components/sections/Skills";
import ChatBot from "./components/ChatBot";


function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    
      AOS.init({
        duration: 1000,
        once: true,
      });
    
  }, );
  
  return (
    <div className="overflow-x-hidden poppins-regular">
      <Cursor/>
      <Navbar  />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <ChatBot/>
      <Footer/>
    </div>
  );
}

export default App
