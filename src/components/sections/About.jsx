import { FaGraduationCap, FaAward, FaCode, FaLayerGroup, FaTrophy } from "react-icons/fa";

export const About = () => {
  const languages = ['HTML', 'CSS', 'JavaScript', 'C', 'C++', 'Python'];
  const frameworks = ['React', 'Next.js', 'TailwindCSS', 'Bootstrap'];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-24 bg-[#030014] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 data-aos="fade-up" className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text mb-4">
            About Me
          </h2>
          <div data-aos="fade-up" data-aos-delay="100" className="h-1 w-16 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div data-aos="fade-up" className="rounded-3xl p-8 md:p-10 border border-white/10 bg-white/[0.02] backdrop-blur-md mb-8 hover:border-blue-500/30 transition-all duration-500">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I’m <span className="text-blue-400 font-bold">Emil Binoy</span>, a dedicated Frontend Developer currently expanding my expertise into <span className="text-cyan-400 font-bold">Full-Stack Development</span>. I am passionate about crafting seamless user experiences and robust web architectures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <FaCode className="text-blue-500 text-xl" />
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((tech, key) => (
                  <span key={key} className="bg-blue-500/5 text-blue-400 border border-blue-500/20 py-1.5 px-4 rounded-xl text-sm font-medium hover:bg-blue-500/20 hover:scale-105 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <FaLayerGroup className="text-cyan-500 text-xl" />
                <h3 className="text-xl font-bold text-white">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((tech, key) => (
                  <span key={key} className="bg-cyan-500/5 text-cyan-400 border border-cyan-500/20 py-1.5 px-4 rounded-xl text-sm font-medium hover:bg-cyan-500/20 hover:scale-105 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
          <div data-aos="fade-right" className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
                  <FaGraduationCap size={24} />
               </div>
               <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-white">BCA - M.G University</h4>
                <p className="text-blue-400 text-sm font-medium">2024 — 2028</p>
                <p className="text-gray-400 text-sm mt-1">Kristu Jyoti College of Management and Technology</p>
              </div>
              <p className="text-gray-500 text-sm italic border-l-2 border-blue-500/30 pl-3">
                Relevant Coursework: Data Structures, Web Development, DBMS.
              </p>
            </div>
          </div>

      
          <div data-aos="fade-left" className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-yellow-500/20 rounded-2xl text-yellow-500">
                  <FaTrophy size={24} />
               </div>
               <h3 className="text-xl font-bold">Achievements</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3 items-start group/item">
                <span className="text-yellow-500 mt-1 transition-transform group-hover/item:scale-125">★</span>
                <span>
                    <b className="text-white">1st Place Winner</b> - Zephyr 4.0 Hackathon
                </span>
              </li>
              <li className="flex gap-3 items-start opacity-80 hover:opacity-100 transition-opacity">
                <span className="text-cyan-500 mt-1">•</span>
                <span><b className="text-white">Second Place</b> - Hackathon at Assumption College Changanassery</span>
              </li>
              <li className="flex gap-3 items-start opacity-80 hover:opacity-100 transition-opacity">
                <span className="text-cyan-500 mt-1">•</span>
                <span><b className="text-white">Certified</b> - Web Development, IoT & Figma Workshops</span>
              </li>
            </ul>
          </div>
        </div>

       
        <div data-aos="fade-up" className="mt-12 text-center">
          <a href="https://certificate-gallery-using-react.vercel.app/" target="_blank" rel="noreferrer">
            <button className="relative group overflow-hidden px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95">
               VIEW CERTIFICATE GALLERY
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}