import React from 'react';

const features = [
  {
    title: "NO NUMERICAL GRIND",
    subtitle: "拒绝数值堆砌",
    desc: "科技树横向发展。不同势力代表不同生态位，科技是玩法的改变，而非单纯的数值碾压。每一件装备都有其存在的战术价值。",
    id: "01"
  },
  {
    title: "MOBILE FORTRESS",
    subtitle: "列车就是家",
    desc: "基地随身带。集成仓储、制造、防御。在这个破碎的世界里，只有你的列车是唯一的避风港。鼓励探索，不再被“回家存东西”束缚。",
    id: "02"
  },
  {
    title: "AUTOMATION NETWORK",
    subtitle: "自动化生存",
    desc: "拒绝重复劳动。建立你的工业流水线，琐碎工作交给AI和无人机。你的时间应该花在构筑、策略与战斗上。",
    id: "03"
  },
  {
    title: "HYBRID COMBAT",
    subtitle: "移动塔防",
    desc: "结合塔防爽感与动作灵活性。坐车指挥自动炮台，或穿上外骨骼下车冲锋陷阵。打不过？直接开车跑！",
    id: "04"
  },
  {
    title: "PERSISTENT PROGRESS",
    subtitle: "软生存强体验",
    desc: "死亡不清零。挑战Boss和恶劣环境，体验刺激而非重头再来的挫败感。所有的积累都将成为你下一次冒险的基石。",
    id: "05"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-ds-black text-white relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute right-0 top-20 text-[200px] leading-none font-bold text-ds-dark/30 pointer-events-none select-none opacity-50 rotate-90 origin-top-right">
            CORE
        </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-16 border-l-4 border-ds-gold pl-6">
             <h3 className="text-4xl font-black uppercase tracking-tighter mb-2">Core Philosophies</h3>
             <p className="text-ds-gray font-mono uppercase tracking-widest text-sm">Design Values // Version 1.0</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative border border-ds-dark bg-ds-dark/20 p-8 hover:border-ds-blue hover:bg-ds-blue/5 transition-all duration-300">
              {/* Corner markers */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ds-gray group-hover:border-ds-blue transition-colors"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-ds-gray group-hover:border-ds-blue transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-ds-gray group-hover:border-ds-blue transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ds-gray group-hover:border-ds-blue transition-colors"></div>

              <div className="flex justify-between items-start mb-6">
                 <span className="text-4xl font-black text-ds-dark group-hover:text-ds-blue/20 transition-colors select-none">
                    {feature.id}
                 </span>
                 <div className="w-12 h-[2px] bg-ds-gold group-hover:w-full transition-all duration-500"></div>
              </div>

              <h4 className="text-lg font-bold uppercase tracking-wider mb-1 text-ds-light group-hover:text-ds-blue transition-colors">
                {feature.title}
              </h4>
              <h5 className="text-sm font-mono text-ds-gold mb-4">
                {feature.subtitle}
              </h5>
              
              <p className="text-sm text-ds-gray leading-relaxed text-justify">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
