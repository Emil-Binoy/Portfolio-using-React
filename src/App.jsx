import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isNavbarReady, setNavbarReady] = useState(false);

  useEffect(() => {
    if (isNavbarReady) {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, [isNavbarReady]);
  
  return (
    <>
      <Navbar onReady={() => setNavbarReady(true)} />

      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      
    </>
  );
}

export default App
