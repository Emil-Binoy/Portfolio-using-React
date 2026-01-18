export const About = () => {

  const languages = ['HTML','CSS','Java Script','C','C++','Python'];
  
  const frameworks = ['React','TailwindCSS','Bootstrap'];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 data-aos="fade-up" data-aos-delay="200" className="text-center mb-5 text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text"> About Me! </h2>
            <div data-aos="fade-up" data-aos-delay="200" className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I’m Emil, a Full-Stack Developer passionate about building user-friendly and efficient web solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((tech,key) => (
                        <span key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-blue-600 transition">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Fameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {frameworks.map((tech,key) => (
                        <span key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-blue-600 transition">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div data-aos="fade-right" data-aos-delay="200" className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><b>BCA</b> - M.G University (2024-2028) at kristu jyoti college of management and technology</li>
                <li>Relavant Coursework: Data Structures, Web Development</li>
              </ul>
            </div>
            <div data-aos="fade-left" data-aos-delay="200" className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Achievements & Certifications</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><b>Certifications</b> - Web Development,IoT Workshop,Figma Workshop</li>
                <li><b>Achievements</b> - Second in Hackathon at Assumption College Changanassery</li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <a href="https://certificate-gallery-using-react.vercel.app/"><button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 hover:-translate-y-1 transition-all font-medium rounded-lg text-sm px-5 py-2.5 my-5 dark:bg-blue-600 dark:hover:bg-blue-700 ">See My Certificates</button></a>
          </div>
        </div>
    </section>
  );
}
