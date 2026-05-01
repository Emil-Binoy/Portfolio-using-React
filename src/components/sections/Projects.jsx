import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";

import certImg from '../../assets/images/Certificate_gallery.png';
import career_bridge from '../../assets/images/career_bridge.png';
import random_picker from '../../assets/images/Random_picker.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const projectData = [
  {
    title: "Career Bridge",
    description: "A hackathon-built career guidance platform that helps learners discover structured pathways.",
    tech: ["Next JS", "Tailwind", "API"],
    link: "https://career-bridge-delta.vercel.app/",
    github: "https://github.com/Emil-Binoy/Career-Bridge", 
    image: career_bridge
  },
  {
    title: "Random Picker",
    description: "Decision-making made simple with randomizing algorithms and smooth UI.",
    tech: ["React JS", "Tailwind"],
    link: "https://random-picker-dusky.vercel.app/",
    github: "https://github.com/Emil-Binoy/Random-Picker",
    image: random_picker
  },
  {
    title: "E - magine",
    description: "AI image generation platform bridging human creativity and Hugging Face API.",
    tech: ["React JS", "Hugging Face", "Tailwind"],
    link: "https://e-magine.vercel.app/",
    github: "https://github.com/Emil-Binoy/E-magine",
    image: "https://media.licdn.com/dms/image/v2/D4E12AQGsv8jA_pHx5w/article-cover_image-shrink_720_1280/B4EZXwWdEFHcAI-/0/1743494175942?e=2147483647&v=beta&t=bl-zudlX2o3xa9Gkb3WBHrTN-7tWXtx_FGEBRj5WK1c"
  },
  {
    title: "Certificate Gallery",
    description: "A well structured gallery for showing my certificate in the digital world",
    tech: ["React JS", "API", "Tailwind"],
    link: "https://certificate-gallery-using-react.vercel.app/",
    github: "https://github.com/Emil-Binoy/Certificate-Gallery-using-React",
    image: certImg
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24 bg-[#030014] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-0"></div>

      <div className=" mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 text-transparent bg-clip-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my recent works, blending aesthetics with functional code.
          </p>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className="pb-16"
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index} className="max-w-[400px] group">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 group-hover:border-blue-500/50">
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60"></div>
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a href={project.github} className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors">
                      <FaGithub size={18} />
                    </a>
                    <a href={project.link} className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaCode className="text-blue-400" />
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Web Application</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-[10px] uppercase font-bold bg-white/5 text-gray-300 rounded-full border border-white/10 group-hover:border-blue-500/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #3b82f6 !important;
        }
      `}</style>
    </section>
  );
}