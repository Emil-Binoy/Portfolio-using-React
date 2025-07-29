import { FaArrowRight } from "react-icons/fa";


export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center mb-5 text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover;border-blue-500/30 hover:shadow-blue-600 transition">
            <h3 className="text-xl font-bold mb-2">Simple Calculator</h3>
            <p className="text-gray-400 mb-4">
               Web-based calculator designed for quick and efficient arithmetic calculations.
            </p>
            <div className="flex flex-wrap gap-2 mb">
              {['HTML','CSS','tailwind CSS','Java Script'].map((tech,key) => (
                <span 
                key={key} 
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-blue-600 transition-all">
                 {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://emil-binoy.github.io/calculator/" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover;border-blue-500/30 hover:shadow-blue-600 transition">
            <h3 className="text-xl font-bold mb-2">Digital Dice</h3>
            <p className="text-gray-400 mb-4">
               A simple number dice that worked on js random function, that used for playing games
            </p>
            <div className="flex flex-wrap gap-2 mb">
              {['HTML','CSS','tailwind CSS','Java Script'].map((tech,key) => (
                <span 
                key={key} 
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-blue-600 transition-all">
                 {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://emil-binoy.github.io/digital-dies/" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover;border-blue-500/30 hover:shadow-blue-600 transition">
            <h3 className="text-xl font-bold mb-2">Silly Story Generator</h3>
            <p className="text-gray-400 mb-4">
               A silly story generator that is a task given by mulearn platform, it generate random stories.
            </p>
            <div className="flex flex-wrap gap-2 mb">
              {['HTML','CSS','Java Script'].map((tech,key) => (
                <span 
                key={key} 
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-blue-600 transition-all">
                 {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://emil-binoy.github.io/story-generator/" className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover;border-blue-500/30 hover:shadow-blue-600 transition">
            <h3 className="text-xl font-bold mb-2">Certificate Gallery</h3>
            <p className="text-gray-400 mb-4">
                A gallery showcasing all my technical achievements and workshop participation in one place.
            </p>
            <div className="flex flex-wrap gap-2 mb">
              {['HTML','CSS','Java Script'].map((tech,key) => (
                <span 
                key={key} 
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-blue-600 transition-all">
                 {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://emil-binoy.github.io/Certificate-Gallery/" className=" text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/Emil-Binoy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400 hover:translate-x-2 transition-all text-lg font-medium"
          >
            More Projects <span><FaArrowRight /></span>
          </a>
        </div>

      </div>
    </section>
  );
}
