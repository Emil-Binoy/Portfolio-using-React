import { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";

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
        scrolled ? "top-2 px-6" : "top-0 px-0"
      }`}
    >
      <div className="mx-auto transition-all duration-300 max-w-5xl rounded-2xl bg-[#030014]/70 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-6">
        
          <a
            href="#home"
            className="cinzel-decorative-bold self-center text-2xl font-semibold whitespace-nowrap text-blue-500"
          >
            Emil <span className="text-white">Binoy</span>
          </a>

         
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto transition-all duration-300`}>
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