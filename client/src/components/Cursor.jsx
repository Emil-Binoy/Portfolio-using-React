import React, { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); //

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.animate({
          transform: `translate3d(${clientX}px, ${clientY}px, 0)`
        }, { duration: 800, fill: "forwards" });
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-[9999] hidden md:block transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        ref={dotRef}
        className="absolute w-1 h-1 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
      />
      
      <div 
        ref={ringRef}
        className="absolute w-10 h-10 border border-cyan-500/40 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <div className="w-8 h-8 border border-cyan-500/10 rounded-full" />
        
        <div className="absolute w-[4px] h-[1px] bg-cyan-400 left-0" />
        <div className="absolute w-[4px] h-[1px] bg-cyan-400 right-0" />
        <div className="absolute h-[4px] w-[1px] bg-cyan-400 top-0" />
        <div className="absolute h-[4px] w-[1px] bg-cyan-400 bottom-0" />
      </div>
    </div>
  );
};

export default Cursor;