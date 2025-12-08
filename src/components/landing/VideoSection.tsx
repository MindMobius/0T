import React from 'react';
import SimplePlayer from '@/components/common/SimplePlayer';

const VideoSection = () => {
  return (
    <section className="py-20 flex justify-center border-b border-ds-dark relative">
        <div className="absolute top-0 left-0 text-[100px] font-black text-ds-dark/20 pointer-events-none select-none -translate-y-1/2 translate-x-10">
            ARCHIVE
        </div>
      <div className="max-w-4xl w-full px-4 relative z-10">
         <div className="mb-4 flex items-end justify-between">
            <h3 className="text-xl font-mono uppercase tracking-widest text-ds-gray">
                Initial Log
            </h3>
            <span className="text-xs font-mono text-ds-gold">[ ENCRYPTED ]</span>
         </div>
         <SimplePlayer 
           src="/promo_1.mp4" 
           title="PROMO_001_START.MP4" 
         />
      </div>
    </section>
  );
};

export default VideoSection;
