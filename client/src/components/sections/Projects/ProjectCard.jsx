import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 group-hover:border-blue-500/50">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60"></div>
        
        <div className="absolute top-4 right-4 flex gap-2">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors">
            <FaGithub size={18} />
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors">
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>

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
  );
};

export default ProjectCard;