import { useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import AOS from "aos";
import "aos/dist/aos.css";

// Import brand-accurate icons from react-icons
import {
  SiJavascript,
  SiPython,
  SiC,
  SiSocketdotio,
  SiPostgresql,
  SiHtml5,
  SiPrisma,
} from "react-icons/si";

import { DiCss3 } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
} from "react-icons/si";

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const githubTheme = {
    dark: ["#1e293b", "#0e7490", "#06b6d4", "#22d3ee", "#67e8f9"],
  };

  const languages = [
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
    { name: "Socketdotio", icon: <SiSocketdotio  className="text-white" /> },
    { name: "MySQL", icon: <GrMysql className="text-[#4169E1]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <DiCss3 className="text-[#1572B6]" /> },
  ];

  const tools = [
    {
      name: "React.js",
      icon: <SiReact className="text-[#61DAFB] animate-spin-slow" />,
    },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
    },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Prisma ", icon: <SiPrisma  className="text-cyan-400" /> },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#030014] relative overflow-hidden flex flex-col items-center justify-center px-4"
    >
      

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="text-center max-w-3xl mb-16 z-10">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text mb-4"
        >
          Skills & Activity
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-400 text-sm md:text-base max-w-md mx-auto"
        >
          My technical toolkit alongside my recent development activity and
          build history.
        </p>
      </div>

      <div className="w-full max-w-5xl mb-20 space-y-6 z-10 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-24 h-40 bg-gradient-to-r from-[#030014] via-[#030014]/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-24 h-40 bg-gradient-to-l from-[#030014] via-[#030014]/70 to-transparent z-20 pointer-events-none" />

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex overflow-hidden select-none w-full"
        >
          <div className="flex gap-4 pr-4 min-w-full shrink-0 animate-ticker-left">
            {[...languages, ...languages].map((skill, index) => (
              <div
                key={`lang-${index}`}
                className="py-3 px-6 rounded-xl bg-white/[0.01] border border-white/5 backdrop-blur-sm flex items-center space-x-3 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.03] shrink-0 group"
              >
                <span className="text-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </span>
                <span className="text-white font-medium text-sm whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="250"
          className="flex overflow-hidden select-none w-full"
        >
          <div className="flex gap-4 pr-4 min-w-full shrink-0 animate-ticker-right">
            {[...tools, ...tools].map((skill, index) => (
              <div
                key={`tool-${index}`}
                className="py-3 px-6 rounded-xl bg-white/[0.01] border border-white/5 backdrop-blur-sm flex items-center space-x-3 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.03] shrink-0"
              >
                <span className="text-xl flex items-center justify-center">
                  {skill.icon}
                </span>
                <span className="text-white font-medium text-sm whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="w-full max-w-4xl z-10 p-6 md:p-8 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-cyan-500/20 flex flex-col items-center"
      >
        <div className="flex items-center space-x-2 mb-6 self-start md:self-center px-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
            Yearly Commit History
          </p>
        </div>

        <div className="text-gray-400 w-full overflow-x-auto custom-scrollbar flex justify-start lg:justify-center p-2">
          <GitHubCalendar
            username="Emil-Binoy"
            theme={githubTheme}
            colorScheme="dark"
            hideTotalCount={false}
            hideColorLegend={false}
            blockSize={12}
            blockMargin={4}
          />
        </div>
      </div>
    </section>
  );
};
