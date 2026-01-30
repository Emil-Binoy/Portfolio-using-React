import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030014] border-t border-white/10 pt-16 pb-8 px-6 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-pulse"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <div className="mb-8 text-center group">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text mb-2 transition-all duration-500 group-hover:tracking-widest">
            Emil Binoy
          </h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
            Full Stack Developer • UI/UX Enthusiast
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6 mb-12">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] animate-bounce">
            Connect With Me
          </h3>
          
          <ul className="flex flex-wrap justify-center gap-6">
            <li className="hover:-translate-y-3 transition-transform duration-300">
              <a
                href="https://www.linkedin.com/in/emil-binoy-769261325/"
                className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 duration-300 hover:border-blue-500/50 hover:bg-blue-600/10 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl text-gray-400 duration-300 group-hover:text-blue-500 group-hover:scale-125" />
              </a>
            </li>

            <li className="hover:-translate-y-3 transition-transform duration-300 delay-75">
              <a
                href="https://www.instagram.com/its_emilefx/"
                className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 duration-300 hover:border-pink-500/50 hover:bg-pink-600/10 hover:shadow-[0_0_20px_rgba(219,39,119,0.2)]"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl text-gray-400 duration-300 group-hover:text-pink-500 group-hover:scale-125" />
              </a>
            </li>

            <li className="hover:-translate-y-3 transition-transform duration-300 delay-100">
              <a
                href="https://github.com/Emil-Binoy"
                className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 duration-300 hover:border-white/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl text-gray-400 duration-300 group-hover:text-white group-hover:scale-125" />
              </a>
            </li>

            <li className="hover:-translate-y-3 transition-transform duration-300 delay-150">
              <a
                href="https://www.youtube.com/channel/UCTnMulHkE0CBGMhuGHBzmAQ"
                className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 duration-300 hover:border-red-500/50 hover:bg-red-600/10 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                aria-label="YouTube"
              >
                <FaYoutube className="text-2xl text-gray-400 duration-300 group-hover:text-red-600 group-hover:scale-125" />
              </a>
            </li>

            <li className="hover:-translate-y-3 transition-transform duration-300 delay-200">
              <a
                href="https://leetcode.com/u/Emil_Binoy/"
                className="group flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 duration-300 hover:border-orange-500/50 hover:bg-orange-600/10 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
                aria-label="LeetCode"
              >
                <SiLeetcode className="text-2xl text-gray-400 duration-300 group-hover:text-orange-500 group-hover:scale-125" />
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full max-w-sm h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        <div className="text-center opacity-50 hover:opacity-100 transition-opacity duration-700">
          <p className="text-gray-500 text-xs mb-1">
            &copy; {currentYear} Emil Binoy. Built with Passion & React.
          </p>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            Kerala, India
          </p>
        </div>
      </div>
    </footer>
  );
};