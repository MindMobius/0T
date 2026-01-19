'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Train,
  Shield,
  Leaf,
  Flame,
  Waves,
  Zap,
  Cpu,
  Heart,
  Users,
  Rocket,
  Settings,
  Building2,
  Sword,
  TrendingUp,
  Globe,
  Sparkles,
  Navigation,
  Lock,
  Unlock,
  Factory,
  Skull,
  Lightbulb,
  Anchor,
  ChevronRight,
  ChevronDown,
  Target,
  Grid3X3,
  Radio,
  Database,
  Hexagon,
  Crosshair,
  Activity,
  Box,
  Map,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react'

interface Faction {
  id: string
  name: string
  icon: React.ElementType
  location: string
  tech: string
  position: string
  description: string
  protection: string
}

interface GameComparison {
  game: string
  aspects: {
    category: string
    ourGame: string
    otherGame: string
  }[]
}

interface GameplayDetail {
  id: string
  title: string
  icon: React.ElementType
  description: string
  features: string[]
  mechanics: string[]
}

const factions: Faction[] = [
  {
    id: 'zhuguang',
    name: '逐光号',
    icon: Train,
    location: '环地球地面轨道',
    tech: '光晶 - 净化异变',
    position: '贸易与运输',
    description: '利用漂移板块技术将大陆连接，铺设环地球的地面轨道。数不尽的魔轨列车加超巨型悬浮平台拼接，打造人类奇迹——逐光号，一辆永远不会被魔星照射的超大型列车，它永远在追逐光的路上。',
    protection: '永远在追逐光的路上，避免魔星直射'
  },
  {
    id: 'fukong',
    name: '浮空城',
    icon: Anchor,
    location: '近陆海洋上空',
    tech: '魔能反重力引擎',
    position: '高端科技孵化',
    description: '利用反重力引擎打造的空中城市，拥有最尖端的魔能实验室和先进机器人技术。浮空魔卫队制霸天空，为全世界提供核心的魔能反重力引擎技术。',
    protection: '辐照期间城市整体翻转，底面朝上遮挡辐照'
  },
  {
    id: 'lvcheng',
    name: '绿盟',
    icon: Leaf,
    location: '西大陆密林区',
    tech: '魔控技术 - 控制异变生物',
    position: '生物与食物',
    description: '西大陆密林区松散的联盟，分布广泛。统御异变植物和异变生物，有丰富的食品物资。利用魔控技术与特殊的异变植物共生共存。',
    protection: '使用魔控使植物覆盖建筑，释放绿茵庇护吸收辐照'
  },
  {
    id: 'ronghe',
    name: '熔核区',
    icon: Flame,
    location: '东大陆火山裂谷',
    tech: '魔核 - 富集魔能火山的充能核心',
    position: '工业与制造',
    description: '在地下打造了无比繁复的地下魔轨网络。火山地底魔矿资源丰富，利用魔火山核作为天然冶炼热源，拥有世界最好的矿藏冶炼技术和魔矿工业能力。',
    protection: '辐照期间集体转移地下'
  },
  {
    id: 'daolian',
    name: '岛联',
    icon: Waves,
    location: '北海区域',
    tech: '海魔晶 - 反射辐照',
    position: '海洋专精',
    description: '上百座海岛联合形成，采集利用特殊的海洋生物和矿藏资源，发展特殊的海洋科技。利用海魔晶改造的列车可以在海中行驶。',
    protection: '转移到水面下，使用海魔晶构筑的岛链隧道生活'
  }
]

const gameComparisons: GameComparison[] = [
  {
    game: '我的世界 / 泰拉瑞亚',
    aspects: [
      {
        category: '建筑系统',
        ourGame: '列车模块化构筑，可回收可部署，塔防+移动',
        otherGame: '固定建筑，重建成本高，缺乏移动性'
      },
      {
        category: '资源管理',
        ourGame: '自动化采集+处理，无需手动重复劳动',
        otherGame: '大量手动采集，重复劳动多'
      },
      {
        category: '目标导向',
        ourGame: '探索+战斗+贸易，清晰的游戏目标',
        otherGame: '自由度高但目标模糊，后期缺乏动力'
      },
      {
        category: '装备发展',
        ourGame: '多样化科技树，每个装备都有独特生态位',
        otherGame: '单纯数值升级，旧装备沦为废品'
      }
    ]
  },
  {
    game: '饥荒 / 缺氧',
    aspects: [
      {
        category: '生存压力',
        ourGame: '适度的生存压力，服务于探索体验',
        otherGame: '硬核生存，细节繁琐，压力过大'
      },
      {
        category: '基地移动',
        ourGame: '基地跟随玩家移动，无需重建',
        otherGame: '固定基地，搬迁困难，耗时耗力'
      },
      {
        category: '失败惩罚',
        ourGame: '温和的死亡机制，保留积累',
        otherGame: '死亡重开，一切归零，挫败感强'
      },
      {
        category: '内容节奏',
        ourGame: '剧情+战斗+建设平衡，持续推进',
        otherGame: '生存压力主导，难以推进其他内容'
      }
    ]
  },
  {
    game: '死亡搁浅',
    aspects: [
      {
        category: '核心理念',
        ourGame: '移动堡垒+塔防，主动探索和战斗',
        otherGame: '送货模拟，被动避开战斗'
      },
      {
        category: '社交互动',
        ourGame: '多人联机协作，商会系统',
        otherGame: '异步社交，间接互助'
      },
      {
        category: '游戏节奏',
        ourGame: '多种玩法并存，自由选择',
        otherGame: '单一送货玩法，节奏固定'
      },
      {
        category: '战斗系统',
        ourGame: '丰富的战斗+塔防体验',
        otherGame: '战斗元素少，以逃跑为主'
      }
    ]
  },
  {
    game: 'RimWorld / 环世界',
    aspects: [
      {
        category: '控制粒度',
        ourGame: '直接操控角色，自由度更高',
        otherGame: '指令式管理，间接控制'
      },
      {
        category: '移动性',
        ourGame: '移动基地，随时可撤退',
        otherGame: '固定基地，移动成本高'
      },
      {
        category: '难度曲线',
        ourGame: '循序渐进，可选择难度',
        otherGame: '随机事件主导，难度波动大'
      },
      {
        category: '目标自由度',
        ourGame: '探索/战斗/贸易，多目标并存',
        otherGame: '生存优先，目标单一'
      }
    ]
  }
]

const gameplayDetails: GameplayDetail[] = [
  {
    id: 'survival',
    title: '生存系统',
    icon: Skull,
    description: '辐照浓度越高的地区资源越丰富，但魔物也越强大。你需要平衡风险与收益，在异变的世界中生存下去。',
    features: [
      '异变值系统：长期暴露在辐照区会积攒异变值，类似掉San，但可以通过特定方式恢复',
      '环境适应：不同地区的辐照浓度、魔物种类、资源类型各不相同',
      '时间循环：魔星360天一周期，每个阶段有不同的环境和资源变化',
      '资源分布：高辐照区稀有资源丰富，低辐照区基础资源充足'
    ],
    mechanics: [
      '辐照监测：实时显示当前区域的辐照浓度和安全等级',
      '魔物感知：通过探测模块提前发现魔物活动',
      '庇护所机制：建立临时或永久庇护所来恢复异变值',
      '应急处理：遇到魔物潮时的撤退和应对策略'
    ]
  },
  {
    id: 'building',
    title: '列车构筑',
    icon: Train,
    description: '每一节标准车厢能搭载2x3格的体素空间，你可以根据需求挂载各种功能模块，打造专属于你的移动堡垒。',
    features: [
      '模块化设计：武器、防御、加工、采集、探测、信号基站等各种功能模块',
      '灵活部署：可将模块挂载到矿骡上脱离车厢移动，或部署在地面作为固定工事',
      '即时回收：随时可以回收或重新部署，快速调整战术配置',
      '模块升级：每个模块都可以升级，增强其功能和性能'
    ],
    mechanics: [
      '车厢扩展：通过拼接车厢增加列车长度和载货空间',
      '模块槽位：每个车厢有固定的模块槽位，需要合理规划配置',
      '能量管理：模块运行消耗魔能，需要配置足够的能源模块',
      '防御布局：合理安排武器和防御模块的位置，形成交叉火力'
    ]
  },
  {
    id: 'combat',
    title: '战斗与塔防',
    icon: Crosshair,
    description: '既是直接的战斗者，也是塔防的指挥官。构筑防御设施对抗一波又一波魔物，既可以直接参与战斗，也可以坐镇指挥。',
    features: [
      '个人战斗：使用各种魔能武器装备与魔物直接对抗',
      '列车塔防：配置自动武器模块，自动攻击范围内的敌人',
      '矿骡支援：部署矿骡携带独立模块，形成移动火力点',
      '固定工事：在关键位置部署固定防御设施',
      '魔物潮：夜晚时分富集的魔矿会吸引魔物潮袭来'
    ],
    mechanics: [
      '瞄准射击：第三人称视角，使用鼠标+键盘瞄准射击',
      '技能系统：各种主动和被动技能，增加战斗深度',
      '武器切换：根据敌人和情况快速切换武器',
      '战术撤退：战况不利时可以驾驶列车快速撤离',
      'AI助手：巴啦提供战斗建议和敌人分析'
    ]
  },
  {
    id: 'trade',
    title: '贸易系统',
    icon: TrendingUp,
    description: '利用五大势力的特色科技和资源，在各地区间进行贸易。利用你的以太网信息优势，赚取丰厚利润。',
    features: [
      '价格波动：不同地区的商品价格会因供应、需求、事件等因素波动',
      '势力特供：每个势力都有其特色商品和科技，需要建立良好关系',
      '信息优势：利用以太网提前获取市场信息，把握商机',
      '商会系统：招募NPC建立商会，扩大贸易规模',
      '风险运输：高价值货物运输会吸引强盗和魔物'
    ],
    mechanics: [
      '市场分析：查看各地价格趋势，制定贸易路线',
      '货物管理：合理规划货物装载和存储空间',
      '护卫配置：根据货物价值配置相应等级的护卫',
      '事件应对：遭遇抢劫、自然灾害等事件的应对策略',
      '建立关系：通过贸易和任务与各势力建立良好关系'
    ]
  },
  {
    id: 'exploration',
    title: '探索与采集',
    icon: Map,
    description: '探索未知区域，采集各种魔矿资源。每个地区都有独特的生态和环境，等待你去发现。',
    features: [
      '地图系统：逐步探索并完善地图，标记资源点',
      '探测扫描：使用探测模块扫描周围环境，发现隐藏资源',
      '多种采集方式：人力、机械、魔能等多种采集方式',
      '遗迹探索：发现并探索古代遗迹，获取稀有科技和资源',
      '生态观察：记录各地的生态和魔物习性'
    ],
    mechanics: [
      '自动采集：配置采集模块，自动收集周围的魔矿',
      '矿骡运输：矿骡可以脱离车厢，将采集的物资运回列车',
      '危险评估：评估新区域的危险等级，制定探索计划',
      '资源分类：不同类型的魔矿有不同的用途和价值',
      '环境互动：利用环境因素辅助采集和生存'
    ]
  },
  {
    id: 'automation',
    title: '自动化系统',
    icon: Cpu,
    description: '拒绝一切重复劳动。无论是科技、魔法还是生物，都可以实现自动化生产。',
    features: [
      '生产线自动化：配置加工模块，自动处理原材料',
      '采集自动化：自动采集模块持续收集资源',
      '管理自动化：NPC自动管理商会和业务',
      '战斗自动化：自动武器模块自主攻击敌人',
      '运输自动化：矿骡和无人机自动运输物资'
    ],
    mechanics: [
      '模块配置：配置各种自动化模块，设置工作参数',
      '能源管理：自动化系统消耗魔能，需要稳定的能源供应',
      '优先级设置：设置不同自动化任务的优先级',
      '监控维护：定期监控自动化系统的运行状态',
      'AI优化：巴啦可以优化自动化系统的效率'
    ]
  }
]

const systemInnovations = [
  {
    id: '3d-2d',
    title: '3D-2D 动态视角切换',
    icon: Grid3X3,
    description: '根据游戏场景和玩家需求，智能或手动切换3D和2D视角，提供最佳的游戏体验。',
    features: [
      '3D探索模式：沉浸式探索环境和战斗，第三人称视角，自由观察世界',
      '2D建筑模式：俯视角进行列车模块布局和策略规划，精准配置',
      '2D塔防模式：俯视角指挥战斗，全局掌控防御布局',
      '2D管理界面：库存、技能树、科技树的2D视图，信息密度高',
      '智能切换：根据当前活动自动推荐最佳视角'
    ]
  },
  {
    id: 'genre-hybrid',
    title: '多类型玩法无缝切换',
    icon: Activity,
    description: '在一个游戏中体验RPG、FPS、RTS、塔防等多种游戏类型的魅力。',
    features: [
      'FPS战斗：第三人称射击，直接操控角色进行战斗',
      'RPG成长：角色升级、技能树、装备养成',
      'RTS指挥：塔防模式下，控制多个模块和矿骡进行策略部署',
      '模拟经营：商会管理、贸易运营、资源调度',
      '探索解谜：遗迹探索、环境谜题、剧情任务'
    ]
  },
  {
    id: 'perspective-flexibility',
    title: '视角与操作的灵活性',
    icon: Radio,
    description: '不同玩法类型使用最合适的操作方式，无缝切换不破坏沉浸感。',
    features: [
      '角色视角：以角色为中心，沉浸体验',
      '自由视角：可360度旋转观察，寻找最佳角度',
      '战术视角：拉远距离，全局掌控战局',
      '编辑视角：在构筑模式下，自由拖拽、放置、旋转模块',
      '自动过渡：视角切换时平滑过渡，避免突兀'
    ]
  },
  {
    id: 'dynamic-ui',
    title: '动态UI自适应',
    icon: Cpu,
    description: 'UI界面根据当前视角和玩法类型动态调整，优化信息展示和操作效率。',
    features: [
      '3D模式：HUD式界面，最小化干扰',
      '2D模式：密集信息展示，便于管理',
      '战斗状态：简化UI，专注战斗',
      '建筑模式：详细的模块信息和属性面板',
      '管理界面：清晰的分类和筛选系统'
    ]
  }
]

const corePrinciples = [
  {
    title: '服务于游戏性',
    description: '真实性和合理性都是为游戏性服务的。设定自洽是必须的，但不能为了"真实"而牺牲游戏体验。',
    points: [
      '移动基地：现实中不可能，但解决了固定基地的痛点',
      '魔能科技：为游戏机制提供合理性框架',
      '辐照系统：游戏机制的自然设定，而非生硬的数值限制'
    ]
  },
  {
    title: '玩家自主权',
    description: '给玩家足够的选择权，而不是单一的"正确答案"。游戏应该支持多种玩法风格。',
    points: [
      '路线自由：可以选择独行侠、跑商大亨、魔卫队长等不同路线',
      '难度选择：通过地区选择控制游戏难度，而非全局硬性设定',
      '节奏掌控：玩家可以主动选择推进剧情还是自由探索'
    ]
  },
  {
    title: '渐进式体验',
    description: '游戏内容应该逐步展开，让玩家在每个阶段都有清晰的目标和新的发现。',
    points: [
      '第一年环游大陆：了解世界，建立基础',
      '逐光号时期：跟随引导，学习基础玩法',
      '独立发展：利用优势，开辟自己的道路',
      '商会崛起：招募团队，扩大影响力'
    ]
  },
  {
    title: '系统协同',
    description: '各个游戏系统之间应该相互支撑，形成有机的整体，而不是割裂的模块。',
    points: [
      '贸易促进战斗：赚钱购买武器，武装列车应对强敌',
      '战斗促进探索：击败强敌后才能深入危险区域',
      '探索促进科技：发现遗迹获得新科技蓝图',
      '科技促进贸易：新科技提高生产效率，增加贸易利润'
    ]
  }
]

const developmentRoadmap = {
  0: {
    title: '概念阶段',
    description: '完善游戏核心概念，建立世界观基础，确定核心玩法',
    milestones: [
      '完善世界观和势力设定',
      '确定核心玩法系统',
      '编写基础剧情框架',
      '完成初步美术风格定位',
      '寻找志同道合的伙伴'
    ]
  },
   1: {
    title: '原型验证',
    description: '开发可玩的原型版本，验证核心玩法的可行性',
    milestones: [
      '开发基础移动和战斗系统',
      '实现列车构筑的核心逻辑',
      '制作简化的地形和资源系统',
      '内部测试，收集反馈',
      '调整和优化核心玩法'
    ]
  },
  10: {
    title: 'Alpha版本',
    description: '完成主要系统，推出可体验的Alpha版本',
    milestones: [
      '实现完整的列车构筑系统',
      '基础生存和采集系统',
      '简化版的贸易系统',
      '第一个可玩区域',
      '面向小范围玩家测试'
    ]
  },
  30: {
    title: 'Beta版本',
    description: '完善核心内容，推出Beta版本进行大规模测试',
    milestones: [
      '完成五大势力基础区域',
      '主要玩法系统完善',
      '基础剧情任务实现',
      '联机功能初步实现',
      '面向玩家社区测试'
    ]
  },
  60: {
    title: 'Early Access',
    description: '正式上线抢先体验，持续更新内容',
    milestones: [
      'Steam抢先体验版本上线',
      '定期更新新内容和功能',
      '收集社区反馈，持续优化',
      '逐步解锁更多区域和势力',
      '建立稳定的玩家社区'
    ]
  },
   80: {
    title: '正式版准备',
    description: '完善和打磨，准备正式发布',
    milestones: [
      '完成所有计划内容',
      '全面性能优化',
      '完善本地化和配音',
      '准备宣发材料',
      '预约和预热活动'
    ]
  },
  100: {
    title: '正式发布',
    description: '正式版发布，持续更新DLC和后续内容',
    milestones: [
      'Steam正式版发布',
      '主机平台版本',
      '首个DLC或大型更新',
      '持续运营和内容更新',
      '根据玩家反馈继续完善'
    ]
  }
}

const painPoints = [
  {
    icon: Skull,
    title: '有挑战的生存',
    description: '丰富的生态、Boss和剧情，不是被动生存，而是主动探索'
  },
  {
    icon: Rocket,
    title: '移动的基地',
    description: '拒绝琐碎细节，基地跟着人跑，自动化生产，机器拉货'
  },
  {
    icon: Shield,
    title: '移动塔防',
    description: '构筑防御设施对抗敌人，随时可以撤退，安全感拉满'
  },
  {
    icon: Unlock,
    title: '保留积累',
    description: '不靠清零增加难度，用温和的方式让玩家认真面对游戏'
  },
  {
    icon: Lightbulb,
    title: '多样的科技',
    description: '拒绝无趣的上下位替代，每个科技都有独特的生态位'
  },
  {
    icon: Cpu,
    title: '全面自动化',
    description: '拒绝重复劳动，科技、魔法、生物自动化任你选择'
  },
  {
    icon: Users,
    title: '联机体验',
    description: '游戏如果不能联机，那玩给谁看？'
  }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedComparison, setSelectedComparison] = useState(0)
  const [selectedGameplay, setSelectedGameplay] = useState(0)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#0f0f11] text-[#f5f5f5] font-sans antialiased relative">
      {/* 装饰性背景 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 minimal-grid opacity-50" />
        <div className="absolute top-20 left-10 w-96 h-96 border border-white/5 opacity-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-white/5 opacity-10" />
      </div>

      {/* 毛玻璃顶部状态栏 */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="status-dot active pulse" />
              <span className="text-white/90 tracking-wide">系统在线</span>
            </div>
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="魔轨列车" width={20} height={20} className="w-5 h-5" />
              <span className="text-white font-semibold tracking-wide">魔轨列车</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="data-label">版本 0.1.0</span>
            <div className="flex items-center gap-2">
              <Radio className="w-3 h-3 text-red-500" />
              <span className="text-white/90 tracking-wide">以太网：活跃</span>
            </div>
          </div>
        </div>
      </div>

      {/* 主容器 */}
      <div className="relative">
        {/* Hero 区域 */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* 顶部标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card animate-fadeInUp">
              <Database className="w-3 h-3 text-red-500" />
              <span className="data-label">游戏设计文档 // 机密</span>
            </div>

            {/* 主标题 */}
            <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white animate-fadeInUp">
                魔轨列车
              </h1>
              <div className="modern-title">
                <h2 className="text-2xl md:text-3xl font-medium text-white/80 tracking-widest">
                  MAGIC RAIL TRAIN
                </h2>
              </div>
            </div>

            {/* 副标题 */}
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-normal animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              在追逐光的道路上，筑建你的移动堡垒
            </p>

            {/* 数据展示 */}
            <div className="pt-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div>
                  <div className="data-label mb-2 text-white/50">势力</div>
                  <div className="text-3xl font-bold text-white">05</div>
                </div>
                <div>
                  <div className="data-label mb-2 text-white/50">玩法</div>
                  <div className="text-3xl font-bold text-white">多元</div>
                </div>
                <div>
                  <div className="data-label mb-2 text-white/50">系统</div>
                  <div className="text-3xl font-bold text-white">生存</div>
                </div>
                <div>
                  <div className="data-label mb-2 text-white/50">模式</div>
                  <div className="text-3xl font-bold text-white">联机</div>
                </div>
              </div>
            </div>
          </div>

          {/* 按钮组 */}
          <div className="flex flex-wrap gap-4 justify-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="modern-button-primary px-8 py-6 text-sm tracking-wide"
              onClick={() => scrollToSection('world')}
            >
              <Navigation className="w-4 h-4 mr-2" />
              开始探索
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="modern-button px-8 py-6 text-sm tracking-wide"
              onClick={() => scrollToSection('gameplay')}
            >
              <Target className="w-4 h-4 mr-2" />
              查看核心机制
            </Button>
          </div>

          {/* 向下箭头 */}
          <div className="mt-24 animate-pulse">
            <ChevronDown className="w-6 h-6 text-white/30" />
          </div>
        </section>

        {/* 世界观背景 */}
        <section id="world" className="px-4 py-24 max-w-7xl mx-auto">
          <div className="glass-card p-12 line-decoration animate-fadeInUp">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="status-dot active" />
                <span className="data-label">世界观背景数据库</span>
              </div>
              <h2 className="text-4xl font-bold text-white modern-title">世界观背景</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="info-card corner-lines">
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-box icon-box-red">
                    <Zap className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">魔星循环</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  魔星每360天环绕地球一周，其辐照引发世界异变。辐照浓度过高会产生魔物、魔矿、魔植，既是威胁也是资源。
                </p>
              </div>
              <div className="info-card corner-lines">
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-box">
                    <Sparkles className="w-5 h-5 text-white/50" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">魔能科技</h3>
                </div>
                <p className="text/white/70 leading-relaxed">
                  人类从异变中提炼魔晶，开发出魔能科技体系。不同的地区根据其独特的地理优势，演化出各异的魔能利用手段。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 五大势力 */}
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <div className="mb-12 animate-fadeInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="status-dot active" />
              <span className="data-label">势力数据库</span>
            </div>
            <h2 className="text-4xl font-bold text-white modern-title">五大势力</h2>
            <p className="text-white/60 mt-4 text-lg max-w-2xl">
              世界五大势力各据一方，根据地区优势发展独特的魔能科技，共同构筑这个多元世界
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {factions.map((faction, index) => {
              const Icon = faction.icon
              return (
                <div key={faction.id} className="glass-card p-8 corner-lines animate-fadeInUp" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="icon-box">
                      <Icon className="w-6 h-6 text-white/70" />
                    </div>
                    <span className="tag">{faction.position}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{faction.name}</h3>
                  <p className="text-sm text-white/40 mb-8">{faction.location}</p>

                  <div className="space-y-6">
                    <div>
                      <div className="data-label mb-2">特色科技</div>
                      <p className="text-sm text-white/80">{faction.tech}</p>
                    </div>
                    <div>
                      <div className="data-label mb-2">防护手段</div>
                      <p className="text-sm text-white/80">{faction.protection}</p>
                    </div>
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-sm text-white/50 leading-relaxed">
                        {faction.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 玩家设定 */}
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <div className="glass-card p-12 line-decoration animate-fadeInUp">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="status-dot active" />
                <span className="data-label">玩家档案数据库</span>
              </div>
              <h2 className="text-4xl font-bold text-white modern-title">玩家身份</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="info-card corner-lines">
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-box">
                    <Unlock className="w-6 h-6 text-white/70" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">0号避难所</h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  从0号避难所苏醒，你拥有独特的能力——可以使用的以太场，利用世界上任何通信设备获取或传递信息。
                </p>
                <div className="p-4 bg-white/5 border border-white/10">
                  <div className="data-label mb-2">能力</div>
                  <p className="text-sm text-white/80">
                    以太网通信 // 信息优势 // 实时连接
                  </p>
                </div>
              </div>

              <div className="info-card corner-lines">
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-box icon-box-red">
                    <Cpu className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">AI 巴啦</h3>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  玩家VM设备上的AI助手，提供信息收集整合和必要的引导。就像Cortana或哔哔小子一样。
                </p>
                <div className="p-4 bg-white/5 border border-white/10">
                  <div className="data-label mb-2">功能</div>
                  <p className="text-sm text-white/80">
                    信息收集 // 任务引导 // 决策辅助
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 市场对比 */}
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <div className="mb-12 animate-fadeInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="status-dot active" />
              <span className="data-label">对比分析</span>
            </div>
            <h2 className="text-4xl font-bold text-white modern-title">市场对比</h2>
            <p className="text-white/60 mt-4 text-lg max-w-2xl">
              与市场上相似游戏的对比，展示《魔轨列车》的独特优势
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {gameComparisons.map((comparison, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => setSelectedComparison(index)}
                className={`tab-item ${
                  selectedComparison === index ? 'active' : ''
                }`}
              >
                {comparison.game}
              </Button>
            ))}
          </div>

          <div className="glass-card p-12 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-8">
              {gameComparisons[selectedComparison].aspects.map((aspect, index) => (
                <div key={index} className="border-l-2 border-white/10 pl-8 hover:border-red-500 transition-colors">
                  <h4 className="text-lg font-semibold text-white mb-6">{aspect.category}</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="info-card info-card-red">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-4 h-4 text-red-500" />
                        <span className="data-label text-red-500">本作</span>
                      </div>
                      <p className="text-sm text-white/80">{aspect.ourGame}</p>
                    </div>
                    <div className="info-card">
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="w-4 h-4 text-white/30" />
                        <span className="data-label">{gameComparisons[selectedComparison].game.toUpperCase()}</span>
                      </div>
                      <p className="text-sm text-white/60">{aspect.otherGame}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 具体玩法介绍 */}
        <section id="gameplay" className="px-4 py-24 max-w-7xl mx-auto">
          <div className="mb-12 animate-fadeInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="status-dot active" />
              <span className="data-label">玩法机制</span>
            </div>
            <h2 className="text-4xl font-bold text-white modern-title">具体玩法</h2>
            <p className="text-white/60 mt-4 text-lg max-w-2xl">
              详细的游戏机制说明，展示《魔轨列车》的核心玩法系统
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3 mb-8">
            {gameplayDetails.map((detail, index) => {
              const Icon = detail.icon
              return (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => setSelectedGameplay(index)}
                  className={`tab-item ${
                    selectedGameplay === index ? 'active' : ''
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {detail.title}
                </Button>
              )
            })}
          </div>

          <div className="glass-card p-12 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            {(() => {
              const detail = gameplayDetails[selectedGameplay]
              const Icon = detail.icon
              return (
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="icon-box icon-box-red animate-liquid">
                      <Icon className="w-8 h-8 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{detail.title}</h3>
                      <p className="text-sm text-white/50 mt-2">{detail.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="status-dot active" />
                        <h4 className="text-lg font-semibold text-white data-label">核心特色</h4>
                      </div>
                      <ul className="space-y-3">
                        {detail.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                            <span className="text-red-500 mt-1 flex-shrink-0">▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="status-dot active" />
                        <h4 className="text-lg font-semibold text-white data-label">机制说明</h4>
                      </div>
                      <ul className="space-y-3">
                        {detail.mechanics.map((mechanic, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                            <span className="text-white/30 mt-1 flex-shrink-0">▸</span>
                            <span>{mechanic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </section>

        {/* 系统创新性设计 */}
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <div className="mb-12 animate-fadeInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="status-dot active" />
              <span className="data-label">系统创新</span>
            </div>
            <h2 className="text-4xl font-bold text-white modern-title">系统创新</h2>
            <p className="text-white/60 mt-4 text-lg max-w-2xl">
              打破传统游戏类型的界限，通过视角和玩法的动态切换，提供前所未有的游戏体验
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {systemInnovations.map((innovation, index) => {
              const Icon = innovation.icon
              return (
                <div key={index} className="glass-card p-8 corner-lines animate-fadeInUp" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="icon-box icon-box-red">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{innovation.title}</h3>
                  </div>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    {innovation.description}
                  </p>
                  <div className="space-y-2">
                    {innovation.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-white/70">
                        <span className="text-red-500 mt-0.5">▸</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 核心设计理念 */}
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <div className="mb-12 animate-fInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="status-dot active" />
              <span className="data-label">核心设计理念</span>
            </div>
            <h2 className="text-4xl font-bold text-white modern-title">核心设计理念</h2>
            <p className="text-white/60 mt-4 text-lg max-w-2xl">
              指导游戏设计的核心原则，确保所有系统都能协同工作，提供统一且优秀的游戏体验
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corePrinciples.map((principle, index) => (
              <div key={index} className="glass-card p-10 animate-fadeInUp" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{principle.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
                <div className="space-y-3">
                  {principle.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-white/70">
                      <div className="status-dot active mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 发展路线图 */}
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <div className="mb-12 animate-fadeInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="status-dot active" />
              <span className="data-label">开发路线图</span>
            </div>
            <h2 className="text-4xl font-bold text-white modern-title">发展路线图</h2>
            <p className="text-white/60 mt-4 text-lg max-w-2xl">
              从概念到正式发布的完整发展计划，每一步都清晰明确
            </p>
          </div>

          <div className="relative">
            {/* 进度线 */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <div className="space-y-16">
              {Object.entries(developmentRoadmap).map(([stage, info], index) => (
                <div key={stage} className="relative md:pl-20 animate-fadeInUp" style={{ animationDelay: `${0.1 * index}s` }}>
                  {/* 节点标记 */}
                  <div className="hidden md:flex absolute left-6 top-2 w-4 h-4 rounded-full border-2 border-white/20 bg-[#0f0f11] items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-red-500' : 'bg-white/30'}`} />
                  </div>

                  <div className="glass-card p-8 corner-lines">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`step-number ${index === 0 ? 'active' : ''}`}>
                        {stage}%
                      </div>
                      <h3 className="text-2xl font-bold text-white">{info.title}</h3>
                    </div>
                    <p className="text-sm text-white/70 mb-8 leading-relaxed">
                      {info.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {info.milestones.map((milestone, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-white/70">
                          <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 设计理念 */}
        <section className="px-4 py-24 max-w-7xl mx-auto">
          <div className="mb-12 animate-fadeInUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="status-dot active" />
              <span className="data-label">设计哲学</span>
            </div>
            <h2 className="text-4xl font-bold text-white modern-title">设计理念</h2>
            <p className="text-white/60 mt-4 text-lg max-w-2xl">
              这不是一款为了卖相而堆砌玩法的游戏，而是为了解决那些让我在玩其他游戏时感到不爽的痛点而诞生的
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {painPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div key={index} className="glass-card p-8 corner-lines animate-fadeInUp" style={{ animationDelay: `${0.05 * index}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="icon-box">
                      <Icon className="w-5 h-5 text-white/70" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="glass-card p-10 info-card-red animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="status-dot active" />
              <h3 className="text-2xl font-bold text-white">设定自洽性原则</h3>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              所有科技、材料、装备的发展都必须有自己独特的生态位，服务于特定的群体，不应该只是纯粹的上下位替代。
              <br />
              <span className="text-red-500 font-semibold mt-2 inline-block">
                任何能留存的科技材料发展，在逻辑上都应该有存在的理由。
              </span>
            </p>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="mt-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <div className="status-dot active pulse" />
                <span className="data-label">系统状态：在线</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Image src="/logo.svg" alt="魔轨列车" width={24} height={24} className="w-6 h-6" />
                <h3 className="text-2xl font-bold text-white">魔轨列车</h3>
              </div>
              <p className="text-white/60">寻找志同道合的你，一起探讨可能性</p>
              <div className="minimal-divider" />
              <p className="data-label text-white/40">
                游戏设计文档 // 魔轨列车 // 版本 0.1.0
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
