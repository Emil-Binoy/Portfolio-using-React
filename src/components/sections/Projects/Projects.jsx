import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import local components and data
import ProjectCard from './ProjectCard';
import { projectData } from './Constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="projects" className="min-h-screen py-24 bg-[#030014] relative overflow-hidden">
      <div className="absolute top-20 right-1/9 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-20 left-1/9 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            A collection of my recent works, blending aesthetics with functional code.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            loopedSlides={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 'auto' },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{ rotate: 20, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, EffectCoverflow]}
            className="pb-16"
          >
            {projectData.map((project, index) => (
              <SwiperSlide key={index} className="max-w-[400px] group">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet { background: #3b82f6 !important; }
        .swiper-pagination-bullet-active {
          background: #60a5fa !important;
          width: 20px;
          border-radius: 10px;
          transition: all 0.3s;
        }
      `}</style>
    </section>
  );
};