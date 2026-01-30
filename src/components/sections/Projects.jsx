import { FaArrowRight, FaExternalLinkAlt, FaCode } from "react-icons/fa";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24 bg-[#030014] relative overflow-hidden">
     
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text mb-4">
            Featured Projects
          </h2>
          <div data-aos="fade-up" data-aos-delay="100" className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <div data-aos="fade-right" data-aos-delay="200" className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
                  <FaCode size={20} />
                </div>
                <a href="https://career-bridge-delta.vercel.app/" className="text-gray-500 hover:text-white transition-colors">
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">Career Bridge</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A hackathon-built career guidance platform that helps uncertain learners discover and follow clear, structured career pathways.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next JS', 'Tailwind', 'API integration'].map((tech, key) => (
                  <span key={key} className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a href="https://career-bridge-delta.vercel.app/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:gap-4 transition-all">
                VIEW PROJECT <FaArrowRight />
              </a>
            </div>
          </div>

         
          <div data-aos="fade-left" data-aos-delay="200" className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-2xl text-cyan-400">
                  <FaCode size={20} />
                </div>
                <a href="https://random-picker-dusky.vercel.app/" className="text-gray-500 hover:text-white transition-colors">
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">Random Picker</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Decision-making made simple. Built with a focus on smooth logic and instant user feedback using specialized randomizing algorithms.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['React JS', 'Tailwind CSS', 'Vite'].map((tech, key) => (
                  <span key={key} className="px-3 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a href="https://random-picker-dusky.vercel.app/" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:gap-4 transition-all">
                VIEW PROJECT <FaArrowRight />
              </a>
            </div>
          </div>

          
          <div data-aos="fade-right" data-aos-delay="200" className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-purple-500/20 rounded-2xl text-purple-400">
                  <FaCode size={20} />
                </div>
                <a href="https://e-magine.vercel.app/" className="text-gray-500 hover:text-white transition-colors">
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">E - magine</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Bridging the gap between human creativity and AI. Integrated with Hugging Face API to deliver high-fidelity image generation.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['React JS', 'Hugging Face API', 'Tailwind'].map((tech, key) => (
                  <span key={key} className="px-3 py-1 text-xs font-semibold bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a href="https://e-magine.vercel.app/" className="inline-flex items-center gap-2 text-sm font-bold text-purple-400 group-hover:gap-4 transition-all">
                VIEW PROJECT <FaArrowRight />
              </a>
            </div>
          </div>

         
          <div data-aos="fade-left" data-aos-delay="200" className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400">
                  <FaCode size={20} />
                </div>
                <a href="https://certificate-gallery-using-react.vercel.app/" className="text-gray-500 hover:text-white transition-colors">
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">Certficate Gallery</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A high-performance visual repository built to showcase professional milestones with optimized layout and smooth transitions.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['React JS', 'Framer Motion', 'Tailwind'].map((tech, key) => (
                  <span key={key} className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a href="https://certificate-gallery-using-react.vercel.app/" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:gap-4 transition-all">
                VIEW PROJECT <FaArrowRight />
              </a>
            </div>
          </div>
        </div>

    
        <div data-aos="fade-up" className="flex justify-center mt-20">
          <a
            href="https://github.com/Emil-Binoy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-blue-600 hover:border-blue-600 transition-all flex items-center gap-3 shadow-xl"
          >
            Explore More on GitHub
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}