import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa"

export const Footer = () => (
  <footer className="w-full bg-gray-900 rounded-lg shadow-lg  p-6">
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-xl font-semibold tracking-widest text-gray-300">
        Follow me on
      </h1>
      <ul className="flex justify-center items-center space-x-4">
        <li>
          <a
            href="https://www.linkedin.com/in/emil-binoy-769261325/"
            className="group flex items-center justify-center w-12 h-12 rounded-full border  border-blue-500 duration-200 hover:border-transparent hover:bg-blue-600  "
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl text-gray-400 duration-200 group-hover:text-white " />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/its_emilefx/"
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-blue-500 duration-200 hover:border-transparent hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl text-gray-400 duration-200 group-hover:text-white" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Emil-Binoy"
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-blue-500 duration-200 hover:border-transparent hover:bg-white"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl text-gray-400 duration-200 group-hover:text-gray-900" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCTnMulHkE0CBGMhuGHBzmAQ"
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-blue-500 duration-200 hover:border-transparent hover:bg-red-600"
            aria-label="YouTube"
          >
            <FaYoutube className="text-2xl text-gray-400 duration-200 group-hover:text-white" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
)