import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  

  useEffect(() => {
    
      AOS.init({
        duration: 1000,
        once: true,
      });
    
  }, );
  
  return (
    <div className="overflow-x-hidden">
      <Navbar  />

      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App
