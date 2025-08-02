import { useState } from "react";
import Scrollspy from "react-scrollspy";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-50 fixed w-full top-0 left-0 bg-gray-900 border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#home"
          className="self-center text-2xl font-semibold whitespace-nowrap text-blue-500"
        >
          Emil <span className="text-white">Binoy</span>
        </a>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          
            <Scrollspy
              items={["home", "about", "projects", "contact"]}
              currentClassName="text-blue-500 border-b-3 border-blue-500 "
              className="font-medium text-white flex flex-col p-4 md:p-0 mt-4 border border-gray-800 rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900"
              offset={-100}
            >
              <li>
                <a
                  href="#home"
                  className="block py-2 px-3 hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-blue-500 hover:border-b-3"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3  hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-blue-500 hover:border-b-3"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3  hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-blue-500 hover:border-b-3"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3  hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-blue-500 hover:border-b-3"
                >
                  Contact
                </a>
              </li>
            </Scrollspy>
         
        </div>
      </div>
    </nav>
  );
};
