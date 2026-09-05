import { useEffect, useRef } from 'react';
import profile from '../../assets/images/Profile.jpg';
import Tilt from "react-parallax-tilt";

import { 
  SiReact, 
  SiVite, 
  SiTailwindcss, 
  SiNextdotjs,  
  SiExpress,
} from "react-icons/si"; 
import { FaGitAlt, FaGithub, FaNodeJs  } from "react-icons/fa";

const orbitConfigs = [
  { Icon: SiReact,       label: "React",      color: "#61DAFB", startAngle: 0,   duration: 8,  radius: 130, tilt: 0.3, rotation: 0 },
  { Icon: SiVite,        label: "Vite",       color: "#646CFF", startAngle: 60,  duration: 11, radius: 140, tilt: 0.4, rotation: 45 },
  { Icon: SiTailwindcss, label: "Tailwind",   color: "#38BDF8", startAngle: 120, duration: 13, radius: 125, tilt: 0.35, rotation: -30 },
  { Icon: SiNextdotjs,   label: "Next.js",    color: "#FFFFFF", startAngle: 180, duration: 9,  radius: 145, tilt: 0.3, rotation: 90 },
  { Icon: SiExpress,   label: "Express.js",   color: "#FFFFFF", startAngle: 200, duration: 10,  radius: 150, tilt: 0.35, rotation: -90 },
  { Icon: FaGithub,      label: "Github",     color: "#FFFFFF", startAngle: 240, duration: 14, radius: 135, tilt: 0.4, rotation: 120 },
  { Icon: FaGitAlt,      label: "Git",        color: "#F05032", startAngle: 300, duration: 10, radius: 128, tilt: 0.25, rotation: -60 },
  { Icon: FaNodeJs ,      label: "NodeJs ",   color: "#336633", startAngle: 50, duration: 12, radius: 135, tilt: 0.5, rotation: 60 },
];

const OrbitalLogo = ({ Icon, label, color, startAngle, duration, radius, tilt, rotation }) => {
  const nodeRef = useRef(null);
  const angleRef = useRef((startAngle * Math.PI) / 180);
  const rafRef = useRef(null);
  const lastRef = useRef(null);

  useEffect(() => {
    const speedPerMs = (2 * Math.PI) / (duration * 1000);

    const tick = (timestamp) => {
      if (!lastRef.current) lastRef.current = timestamp;
      const dt = timestamp - lastRef.current;
      lastRef.current = timestamp;

      angleRef.current += speedPerMs * dt;
      const angle = angleRef.current;

      const rawX = Math.cos(angle) * radius;
      const rawY = Math.sin(angle) * radius * tilt;
      
      const rad = (rotation * Math.PI) / 180;
      const x = rawX * Math.cos(rad) - rawY * Math.sin(rad);
      const y = rawX * Math.sin(rad) + rawY * Math.cos(rad);

      const sinVal = Math.sin(angle);
      const scale = 0.72 + 0.42 * ((sinVal + 1) / 2);
      const opacity = 0.45 + 0.55 * ((sinVal + 1) / 2);
      const zIndex = sinVal < 0 ? 10 : 30;

      if (nodeRef.current) {
        nodeRef.current.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        nodeRef.current.style.opacity = opacity;
        nodeRef.current.style.zIndex = zIndex;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [duration, radius, tilt, rotation]);

  return (
    <div
      ref={nodeRef}
      className="absolute"
      style={{
        top: '50%',
        left: '50%',
        marginTop: '-24px',
        marginLeft: '-24px',
        willChange: 'transform, opacity, z-index',
      }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_0_12px_rgba(59,130,246,0.25)] hover:shadow-[0_0_22px_rgba(59,130,246,0.6)] hover:bg-white/15 transition-colors duration-300">
        <Icon style={{ color: color }} size={24} />
      </div>
    </div>
  );
};

export const HeroAnimation = () => {
  return (
    <div
      className="animate-float relative shrink-0 flex items-center justify-center z-10"
      style={{ width: 320, height: 320 }}
    >
      {orbitConfigs.map((cfg) => (
        <OrbitalLogo key={cfg.label} {...cfg} />
      ))}

      <div
        className="absolute shrink-0"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 20,
          width: '200px',  
          height: '200px', 
        }}
      >
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          glareEnable={false}
          scale={1.05}
          transitionSpeed={1000}
          className="rounded-full w-full h-full"
        >
          <img
            src={profile}
            alt="profile"
            className="rounded-full w-full h-full object-cover border-4 border-blue-500/50 shadow-2xl"
            style={{ 
              aspectRatio: '1/1', 
              display: 'block' 
            }}
          />
        </Tilt>
      </div>
    </div>
  );
};