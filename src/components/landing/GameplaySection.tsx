import React from 'react';
import SimplePlayer from '@/components/common/SimplePlayer';

const GameplaySection = () => {
  return (
    <section className="py-24 bg-ds-dark border-y border-ds-gold/20 relative">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-20">
             <div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Mission Cycle</h3>
                <p className="text-ds-blue font-mono text-sm tracking-[0.3em] mt-2">OPERATIONAL GUIDE</p>
             </div>
             <div className="hidden md:block text-right text-xs font-mono text-ds-gray">
                 <p>REF: 77-A2</p>
                 <p>SEC: LEVEL 5</p>
             </div>
        </div>
        
        <div className="space-y-32">
          {/* Step 1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
             {/* Connecting Line */}
             <div className="absolute left-1/2 top-full h-32 w-[1px] bg-gradient-to-b from-ds-gold to-transparent hidden lg:block -translate-x-1/2"></div>
            
            <div className="order-2 lg:order-1">
              <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-6xl font-black text-ds-gold/20">01</span>
                  <h4 className="text-2xl font-bold text-white uppercase">The Build</h4>
              </div>
              <h5 className="text-ds-gold font-mono text-sm mb-6 tracking-wider">UNIT CONSTRUCTION & CONFIGURATION</h5>
              
              <div className="bg-black/50 border-l-2 border-ds-blue p-6 mb-8 backdrop-blur-sm">
                  <p className="text-ds-light leading-relaxed mb-4">
                    你的列车不仅是载具，更是你在荒原上唯一的<span className="text-white font-bold">移动堡垒</span>。基于 2x3 体素网格标准车厢，你可以像拼装精密仪器一样定制你的生存平台。
                  </p>
                  <ul className="space-y-2 text-sm text-ds-gray font-mono">
                    <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-ds-gold"></span>
                        MODULE: FUNCTIONAL / COMBAT / RESOURCE
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-ds-gold"></span>
                        SYSTEM: DRONE HIVE & SENTRY
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-ds-gold"></span>
                        DEPLOY: MOBILE OUTPOST CAPABILITY
                    </li>
                  </ul>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
               <div className="absolute -inset-4 border border-ds-gray/20 z-0"></div>
               <div className="absolute top-0 right-0 p-2 bg-ds-gold text-black text-xs font-bold z-20">FIG. 01</div>
               <div className="relative z-10">
                 <SimplePlayer 
                    src="/promo_2.mp4" 
                    title="CONSTRUCTION_TIMELAPSE"
                />
               </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
             {/* Connecting Line */}
             <div className="absolute left-1/2 top-full h-32 w-[1px] bg-gradient-to-b from-ds-blue to-transparent hidden lg:block -translate-x-1/2"></div>

            <div className="order-1 lg:order-1 relative">
               <div className="absolute -inset-4 border border-ds-gray/20 z-0"></div>
               <div className="absolute top-0 left-0 p-2 bg-ds-blue text-black text-xs font-bold z-20">FIG. 02</div>
               <div className="relative z-10">
                 <SimplePlayer 
                    src="/promo_4.mp4" 
                    title="TRADE_ROUTE_ANALYSIS"
                />
               </div>
            </div>

            <div className="order-2 lg:order-2 text-right">
              <div className="flex items-baseline gap-4 mb-4 justify-end">
                  <h4 className="text-2xl font-bold text-white uppercase">The Journey</h4>
                  <span className="text-6xl font-black text-ds-blue/20">02</span>
              </div>
              <h5 className="text-ds-blue font-mono text-sm mb-6 tracking-wider">EXPLORATION & LOGISTICS</h5>
              
              <div className="bg-black/50 border-r-2 border-ds-gold p-6 mb-8 backdrop-blur-sm inline-block text-left">
                  <p className="text-ds-light leading-relaxed mb-4">
                    利用<span className="text-white font-bold">以太场 (Ether Field)</span> 感知周边环境，获取情报，在五大势力间穿梭贸易。赚取差价，升级科技。
                  </p>
                  <ul className="space-y-2 text-sm text-ds-gray font-mono text-right">
                    <li className="flex items-center gap-2 justify-end">
                        CROSS-FACTION TRADE PROTOCOLS
                        <span className="w-1 h-1 bg-ds-blue"></span>
                    </li>
                    <li className="flex items-center gap-2 justify-end">
                        ETHER FIELD: REMOTE HACKING & SCAN
                        <span className="w-1 h-1 bg-ds-blue"></span>
                    </li>
                    <li className="flex items-center gap-2 justify-end">
                        AI COMPANION 'BALA' SUPPORT
                        <span className="w-1 h-1 bg-ds-blue"></span>
                    </li>
                  </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
            
            <div className="order-2 lg:order-1">
              <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-6xl font-black text-red-900/40">03</span>
                  <h4 className="text-2xl font-bold text-white uppercase">The Fight</h4>
              </div>
              <h5 className="text-red-500 font-mono text-sm mb-6 tracking-wider">HOSTILE ENGAGEMENT</h5>
              
              <div className="bg-black/50 border-l-2 border-red-500 p-6 mb-8 backdrop-blur-sm">
                  <p className="text-ds-light leading-relaxed mb-4">
                    双层级战斗体验：宏观上驾驶列车进行<span className="text-white font-bold">移动塔防</span>对抗兽潮；微观上穿戴外骨骼下车探索遗迹，直面BOSS。
                  </p>
                  <ul className="space-y-2 text-sm text-ds-gray font-mono">
                    <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-red-500"></span>
                        MACRO: MOBILE TOWER DEFENSE
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-red-500"></span>
                        MICRO: EXOSKELETON COMBAT
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-red-500"></span>
                        HAZARD: RADIATION MANAGEMENT
                    </li>
                  </ul>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
               <div className="absolute -inset-4 border border-ds-gray/20 z-0"></div>
               <div className="absolute top-0 right-0 p-2 bg-red-500 text-black text-xs font-bold z-20">FIG. 03</div>
               <div className="relative z-10">
                 <SimplePlayer 
                    src="/promo_3.mp4" 
                    title="COMBAT_FOOTAGE_RAW"
                />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GameplaySection;
