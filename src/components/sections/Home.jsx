import { useState } from 'react'; 
import profile from '../../assets/images/profile.jpg';
import Tilt from "react-parallax-tilt";
import Typewriter from 'typewriter-effect';

export const Home = () => {
  // State to track when the paragraph is done typing
  const [showRoles, setShowRoles] = useState(false);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative sm:flex-row sm:justify-center px-4 pt-24 sm:pt-0 bg-[#030014] overflow-hidden">
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-0"></div>

        <div data-aos="fade-up" data-aos-delay="200" className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 p-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
              Hi, I am <span className='cinzel-decorative-bold'>Emil Binoy</span>
            </h1>

            <div className="text-gray-400 text-lg mb-4 max-w-lg mx-auto leading-relaxed min-h-[100px]">
              <Typewriter
                options={{
                  delay: 30,
                  cursor: "",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString("Whether it's creating responsive web designs, developing APIs, or optimizing performance, I am committed to delivering work that exceeds expectations and drives results.")
                    .callFunction(() => {
                      setShowRoles(true);
                    })
                    .start();
                }}
              />
            </div>
            
            <div className="text-xl md:text-2xl font-semibold text-blue-400 mb-10 h-8">
              {showRoles && (
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "Aspiring Full Stack Developer",
                      "React & Next.js Specialist",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              )}
            </div>

            <div className="flex justify-center space-x-4">
                <a 
                  href="#projects" 
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] font-bold tracking-wide"
                >
                  View Projects
                </a>

                <a 
                  href="#contact" 
                  className="bg-white/5 border border-blue-500/30 text-blue-400 px-6 py-2.5 rounded-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-500/10 font-bold"
                >
                  Contact Me
                </a>
            </div>
        </div>

        {/* Added shrink-0 to prevent squeezing */}
        <div className="animate-float relative z-10 shrink-0">
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            glareEnable={false}
            scale={1.05}
            transitionSpeed={1000}
            className="rounded-full drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300"
          >
            {/* Added object-cover to keep image circular */}
            <img 
              src={profile} 
              data-aos="fade-left" 
              data-aos-delay={window.innerWidth < 640 ? 600 : 200} 
              alt="profile" 
              className='m-5 rounded-full h-60 w-60 object-cover border-4 border-solid border-blue-500/50 shadow-2xl'
            />
          </Tilt>
        </div>
    </section>
  );
};