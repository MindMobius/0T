import React from 'react';

const factions = [
  {
    name: "逐光号",
    enName: "THE SUN CHASER",
    role: "环球游牧商会",
    tech: "光晶科技",
    desc: "永远在移动，追逐背光面。拥有全球轨道网络，擅长净化与护盾。",
    color: "border-yellow-500 text-yellow-500",
    bg: "bg-yellow-900/10",
    id: "FAC-01"
  },
  {
    name: "浮空城",
    enName: "AERO CITY",
    role: "赛博天空都市",
    tech: "反重力引擎",
    desc: "城市底朝天翻转。高机动性，拥有飞行模块与尖端机器人。",
    color: "border-blue-400 text-blue-400",
    bg: "bg-blue-900/10",
    id: "FAC-02"
  },
  {
    name: "绿盟",
    enName: "GREEN ALLIANCE",
    role: "生物共生群落",
    tech: "生物魔控",
    desc: "控制巨型植物覆盖建筑。擅长生物兵器、再生医疗。",
    color: "border-green-500 text-green-500",
    bg: "bg-green-900/10",
    id: "FAC-03"
  },
  {
    name: "熔核区",
    enName: "MAGMA CORE",
    role: "地下重工帝国",
    tech: "魔核工业",
    desc: "全员下潜至地下。擅长超重型装甲、热能武器、钻探机械。",
    color: "border-red-600 text-red-600",
    bg: "bg-red-900/10",
    id: "FAC-04"
  },
  {
    name: "岛联",
    enName: "ISLAND FEDERATION",
    role: "海洋潜行联邦",
    tech: "海魔晶",
    desc: "潜入深海。擅长反射涂层、水下推进、光学迷彩。",
    color: "border-cyan-400 text-cyan-400",
    bg: "bg-cyan-900/10",
    id: "FAC-05"
  }
];

const FactionsSection = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl text-center mb-16 font-black uppercase tracking-[0.5em] text-ds-gray">
          Global Factions Database
        </h3>
        
        <div className="grid grid-cols-1 gap-6">
          {factions.map((faction, index) => (
            <div key={index} className={`relative border-l-4 ${faction.color} ${faction.bg} p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start hover:bg-white/5 transition-colors group`}>
                {/* ID Background */}
                <div className="absolute right-4 top-4 text-4xl font-black opacity-10 font-mono select-none">
                    {faction.id}
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                         <h4 className={`text-2xl font-black uppercase ${faction.color}`}>{faction.name}</h4>
                         <span className="text-xs font-mono text-ds-gray tracking-wider">/ {faction.enName}</span>
                    </div>
                    <div className="inline-block px-2 py-1 bg-black border border-ds-gray/50 text-xs font-mono text-ds-light mb-4">
                        ROLE: {faction.role}
                    </div>
                    <p className="text-ds-light max-w-2xl leading-relaxed">
                        {faction.desc}
                    </p>
                </div>

                <div className="md:w-1/3 w-full border-t border-ds-gray/20 pt-4 md:pt-0 md:border-t-0 md:border-l md:pl-8">
                    <p className="text-xs font-mono text-ds-gray mb-1 uppercase tracking-widest">Core Tech</p>
                    <p className={`text-lg font-bold ${faction.color}`}>{faction.tech}</p>
                    
                    <div className="mt-4 h-1 w-full bg-ds-dark relative overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-2/3 bg-current opacity-50"></div>
                        <div className="absolute top-0 left-0 h-full w-full animate-pulse bg-white/10"></div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactionsSection;
