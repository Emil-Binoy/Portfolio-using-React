import { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import my_cv from "../assets/my_cv.pdf"
import HamburgerToggle from "./HamburgerToggle"; // Import the new component

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "top-2 px-4 md:px-6" : "top-0 px-0"
      }`}
    >
      <div className="mx-auto transition-all duration-300 max-w-5xl rounded-2xl bg-[#030014]/40 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:px-6">
          
          
          <a
            href="#home"
            className="cinzel-decorative-bold self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-blue-500"
          >
            Emil <span className="text-white">Binoy</span>
          </a>

          
          <div className="flex items-center gap-2 md:gap-4 md:order-2">
            
            <a
              href={my_cv}
              download="Emil_Binoy_CV.pdf"
              className="flex items-center justify-center px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-sm font-semibold text-blue-400 transition-all duration-300 border border-blue-500 rounded-full hover:bg-blue-600 hover:text-white shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <span className="md:hidden">CV</span>
              <span className="hidden md:block">Download CV</span>
            </a>

           
            <div className="md:hidden flex items-center mt-1">
              <HamburgerToggle 
                isOpen={isOpen} 
                toggleMenu={() => setIsOpen(!isOpen)} 
              />
            </div>

          </div>

       
          <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1 transition-all duration-300`}>
            <Scrollspy
              items={navLinks.map((link) => link.href.substring(1))}
              currentClassName="text-blue-500 border-b-2 border-blue-500 md:border-b-3"
              className="font-medium text-white flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 border-t border-white/10 md:border-0"
              offset={-100}
            >
              {navLinks.map((link) => (
                <li key={link.name} className="py-2 md:py-0">
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block transition-colors duration-300 hover:text-blue-500 uppercase tracking-wider text-sm md:normal-case md:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </Scrollspy>
          </div>

        </div>
      </div>
    </nav>
  );
};