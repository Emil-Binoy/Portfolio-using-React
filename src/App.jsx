import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cursor from "./components/Cursor";


function App() {
  

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
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App
