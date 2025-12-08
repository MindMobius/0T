import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-ds-gold/30">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-10 pointer-events-none"></div>
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-10 w-[1px] h-full bg-ds-gold/20"></div>
      <div className="absolute top-0 right-10 w-[1px] h-full bg-ds-gold/20"></div>
      
      <div className="z-10 text-center max-w-5xl px-4 relative">
        {/* Top Marker */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-ds-gold text-xs font-mono tracking-[0.5em]">
          WARNING: VOIDOUT IMMINENT
        </div>

        <h2 className="text-ds-blue font-mono text-sm md:text-base tracking-widest mb-4 uppercase">
          Project Magic Rail // <span className="text-ds-gold">Ver. 0.9.1</span>
        </h2>
        
        <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-2" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
          魔轨列车
        </h1>
        
        <div className="h-[2px] w-full bg-ds-gold/50 my-6 relative">
             <div className="absolute top-0 left-0 h-full w-1/3 bg-ds-gold"></div>
             <div className="absolute top-0 right-0 h-full w-1/6 bg-ds-gold"></div>
        </div>

        <p className="text-xl md:text-2xl text-ds-light max-w-3xl mx-auto leading-relaxed font-light">
          驾驶可高度自定义的<span className="text-ds-gold font-bold">移动堡垒</span><br/>
          在破碎的世界中穿梭、贸易、战斗
        </p>
        
        <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-center">
          <button className="group relative px-8 py-4 bg-transparent border border-ds-gold text-ds-gold font-bold uppercase tracking-widest hover:bg-ds-gold hover:text-black transition-all duration-300">
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-ds-gold"></span>
            <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-ds-gold"></span>
            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-ds-gold"></span>
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-ds-gold"></span>
            Initialize Journey
          </button>
          
           <button className="group relative px-8 py-4 bg-transparent border border-ds-blue text-ds-blue font-bold uppercase tracking-widest hover:bg-ds-blue hover:text-black transition-all duration-300">
            System Data
          </button>
        </div>
      </div>
      
      {/* Bottom Data Overlay */}
      <div className="absolute bottom-10 left-20 text-xs font-mono text-ds-gray">
        <p>LAT: 45.2132 N</p>
        <p>LNG: 12.4321 E</p>
      </div>
      <div className="absolute bottom-10 right-20 text-xs font-mono text-ds-gray text-right">
        <p>STATUS: ONLINE</p>
        <p>NET: CONNECTED</p>
      </div>
    </section>
  );
};

export default HeroSection;
