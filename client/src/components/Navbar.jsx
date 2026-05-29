import { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import cv from "../assets/cv.pdf";
import HamburgerToggle from "./HamburgerToggle"; 

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
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "top-2 px-4 md:px-6" : "top-0 px-0"
      }`}
    >
      <div className="mx-auto max-w-5xl rounded-2xl bg-[#030014]/40 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] relative">
        <div className="flex items-center justify-between mx-auto p-4 px-4 md:px-6 h-16 md:h-20">
          
          {/* Logo Brand Frame */}
          <a
            href="#home"
            className="cinzel-decorative-bold text-xl md:text-2xl font-semibold whitespace-nowrap text-blue-500 z-10"
          >
            Emil <span className="text-white">Binoy</span>
          </a>

          {/* Desktop Navigation Link Track */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <Scrollspy
              items={navLinks.map((link) => link.href.substring(1))}
              currentClassName="text-blue-500 border-b-2 border-blue-500"
              className="font-medium text-white flex flex-row space-x-6 lg:space-x-8"
              offset={-100}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block transition-colors duration-300 hover:text-blue-500 tracking-wider text-sm lg:text-base font-medium py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </Scrollspy>
          </div>

          {/* Action Interactive Block (CV & Menu Toggle) */}
          <div className="flex items-center gap-3 z-10">
            <a
              href={cv}
              download="Emil_Binoy_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-semibold text-blue-400 transition-all duration-300 border border-blue-500 rounded-full hover:bg-blue-600 hover:text-white shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              <span className="md:hidden">CV</span>
              <span className="hidden md:block">Download CV</span>
            </a>

            <div className="md:hidden flex items-center">
              <HamburgerToggle 
                isOpen={isOpen} 
                toggleMenu={() => setIsOpen(!isOpen)} 
              />
            </div>
          </div>

          {/* Absolute Isolated Mobile Dropdown Overlay */}
          <div 
            className={`absolute top-[calc(100%+0.5rem)] left-0 right-0 md:hidden transition-all duration-300 origin-top ${
              isOpen 
                ? "opacity-100 scale-100 pointer-events-auto" 
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <div className="rounded-xl border border-white/10 bg-[#030014]/95 backdrop-blur-2xl p-4 shadow-xl">
              <Scrollspy
                items={navLinks.map((link) => link.href.substring(1))}
                currentClassName="text-blue-500 border-l-2 border-blue-500 pl-2"
                className="font-medium text-white flex flex-col space-y-3"
                offset={-100}
              >
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block transition-colors duration-300 hover:text-blue-500 uppercase tracking-wider text-sm py-1.5"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </Scrollspy>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};