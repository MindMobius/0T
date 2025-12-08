import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 bg-black border-t-2 border-ds-gold/50 text-center relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-5 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="w-16 h-16 border-2 border-ds-gold rotate-45 mx-auto mb-12 flex items-center justify-center">
            <div className="w-8 h-8 bg-ds-gold rotate-45"></div>
        </div>

        <h3 className="text-2xl mb-8 font-black uppercase tracking-widest text-white">Join the Network</h3>
        <p className="mb-12 text-ds-gray max-w-xl mx-auto leading-relaxed">
          如果你对<span className="text-ds-gold">机械组装</span>、<span className="text-ds-gold">异世界探索</span>、<span className="text-ds-gold">移动塔防</span>感兴趣，
          请加入我们，一起把“逐光号”Pro Max造出来。
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16">
           <a href="#" className="px-8 py-3 border border-ds-gray text-ds-gray hover:text-black hover:bg-ds-gray transition-colors uppercase font-bold tracking-wider text-sm">
             GitHub
           </a>
           <a href="#" className="px-8 py-3 bg-ds-gold text-black hover:bg-white transition-colors uppercase font-bold tracking-wider text-sm">
             Discord / QQ
           </a>
        </div>
        
        <div className="border-t border-ds-dark pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ds-dark font-mono uppercase tracking-widest">
            <p>© 2024 PROJECT MAGIC RAIL</p>
            <p>SYSTEM STATUS: NORMAL</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
