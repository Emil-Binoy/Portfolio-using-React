import certImg from '../../../assets/images/Certificate_gallery.png';
import career_bridge from '../../../assets/images/career_bridge.png';
import data_looper from '../../../assets/images/data_looper.png';
import notes_app from '../../../assets/images/Notes_app.png';
import Xeltrivox from '../../../assets/images/Xeltrivox.png';
import fetchly from '../../../assets/images/fetchly.png';

export const projectData = [
  {
    title: "Career Bridge",
    description: "A hackathon-built career guidance platform that helps learners discover structured pathways.",
    tech: ["Next JS", "Tailwind", "API"],
    link: "https://career-bridge-delta.vercel.app/",
    github: "https://github.com/Emil-Binoy/Career-Bridge", 
    image: career_bridge
  },
  {
    title: "fetchly",
    description: "A full-stack web application that simplifies downloading media from popular socialplatforms.",
    tech: ["React JS", "Express.js", "Tailwind", "yt-dlp"],
    link: "https://media-downloader-xi.vercel.app/",
    github: "https://github.com/Emil-Binoy/media-downloader",
    image: fetchly
  },
  {
    title: "Certificate Gallery",
    description: "A well structured gallery for showing my certificate in the digital world",
    tech: ["React JS", "API", "Tailwind"],
    link: "https://certificate-gallery-using-react.vercel.app/",
    github: "https://github.com/Emil-Binoy/Certificate-Gallery-using-React",
    image: certImg
  },
  {
    title: "Data Looper",
    description: "A well-structured tool for generating repeated text in a clean and efficient way.",
    tech: ["React JS", "Tailwind"],
    link: "https://data-looper.vercel.app/",
    github: "https://github.com/Emil-Binoy/data-looper",
    image: data_looper
  },
  {
    title: "Notes App",
    description: "My first full-stack Notes app with secure auth and seamless interactions.",
    tech: ["React", "Tailwind CSS", "Express.js", "PostgreSQL", "Node.js"],
    link: "https://notes-app-one-gray.vercel.app/",
    github: "https://github.com/Emil-Binoy/Notes-App",
    image: notes_app
  },
  {
    title: "Xeltrivox",
    description: "A modern real-time chat platform built for seamless communication.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "Socket.IO", "Prisma", "PostgreSQL"],
    link: "https://xeltrivox.vercel.app/",
    github: "https://github.com/Emil-Binoy/Xeltrivox",
    image: Xeltrivox
  },
];