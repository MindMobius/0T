import React from 'react';

interface SimplePlayerProps {
  src: string;
  title?: string;
  poster?: string;
}

const SimplePlayer: React.FC<SimplePlayerProps> = ({ src, title }) => {
  return (
    <div className="relative group w-full">
        {/* Frame */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ds-gold"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ds-gold"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-ds-gold"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ds-gold"></div>

        <div className="border border-ds-dark bg-black p-1 relative aspect-video flex items-center justify-center overflow-hidden">
            <video 
            controls 
            className="w-full h-full object-contain block opacity-90 hover:opacity-100 transition-opacity"
            playsInline
            preload="metadata"
            >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            
            {/* Scanlines overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-10"></div>
        </div>
        
        {title && (
            <div className="flex justify-between items-center mt-2 px-1">
                <p className="text-xs font-mono text-ds-gold uppercase tracking-wider">
                    RECORDING // <span className="text-white">{title}</span>
                </p>
                 <div className="h-[1px] flex-1 mx-4 bg-ds-dark"></div>
                 <p className="text-[10px] text-ds-gray font-mono">REC</p>
            </div>
        )}
    </div>
  );
};

export default SimplePlayer;
