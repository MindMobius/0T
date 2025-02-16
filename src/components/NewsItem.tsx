import { faker } from '@faker-js/faker'
import { gameData } from '@/services/GameData'

export interface NewsItem {
  id: string
  content: string
  date: Date
  type: '日报' | '快讯'
}

// 词元系统
const tokens = {
  actions: [
    '宣布', '发现', '完成', '启动', '突破', '建立', '研发', '测试', 
    '部署', '投资', '收购', '联合', '开发', '探索', '改革', '优化'
  ],
  achievements: [
    '重大突破', '关键进展', '显著成果', '重要发现', '历史性跨越',
    '革命性创新', '里程碑成就', '战略性胜利', '惊人发现'
  ],
  impacts: [
    '将对魔轨产业产生深远影响', '标志着魔轨技术进入新纪元',
    '为星际传送领域带来新机遇', '引发业界广泛关注',
    '将重塑魔轨产业格局', '开创了魔轨发展新篇章'
  ],
  projects: [
    '量子魔轨引擎', '次元壁垒系统', '星际传送门网络', 
    '虚空能量提取器', '时空稳定装置', '跨维度通讯阵列',
    '反重力推进系统', '魔轨能量矩阵', '空间跃迁装置'
  ],
  status: [
    '正在紧锣密鼓地进行中', '已进入最后测试阶段',
    '取得突破性进展', '即将正式投入使用',
    '已完成初步验证', '进展顺利', '成果显著'
  ]
}

// 为快讯添加专门的词元
const emergencyTokens = {
  alerts: [
    '⚠️ 紧急通知', '⚡ 突发警报', '🚨 安全预警', 
    '❗ 重要快讯', '⚠️ 异常警告', '🔔 即时通报'
  ],
  anomalies: [
    '次元裂缝波动', '空间异常扰动', '魔轨能量暴走',
    '未知信号干扰', '虚空风暴来袭', '时空震荡现象',
    '跨维度入侵事件', '能量矩阵失控'
  ],
  threats: [
    '未知生物入侵', '机械族袭击', '虚空污染扩散',
    '列车意外失控', '能量核心过载', '防护罩系统故障'
  ],
  locations: [
    '中央车站', '主控制塔', '能量枢纽', 
    '维修工厂', '研究中心', '观测站',
    '防御工事', '传送门节点'
  ],
  responses: [
    '已启动应急预案', '正在紧急处理中', '已派出应急小组',
    '正在进行疏散', '已开始封锁隔离', '正在展开调查',
    '已调集增援力量', '正在部署防御系统'
  ],
  impacts: [
    '所有魔轨列车暂停运行', '区域传送系统临时关闭',
    '附近居民请勿靠近', '相关区域已实施管制',
    '请魔轨师保持警惕', '周边设施暂停使用'
  ]
}

// 日报段落模板
const dailyReportTemplates = {
  headline: [
    '{city}魔轨管理局{actions}：{org}{actions}全新{projects}，{impacts}。',
    '{org}在{city}{actions}的{projects}{status}，{name}表示{impacts}。',
    '由{name}领衔的{org}团队{actions}了{achievements}，{impacts}。'
  ],
  technology: [
    '{org}{actions}的{projects}在{city}{status}，预计将{impacts}。',
    '{city}实验室{actions}{projects}研究{status}，{name}称这是{achievements}。',
    '{org}投资的{projects}项目{status}，{impacts}。'
  ],
  economy: [
    '{org}斥资百亿在{city}{actions}{projects}，{impacts}。',
    '{city}魔轨交易所报告：{org}的{projects}估值创新高，{impacts}。',
    '{name}宣布{org}将在{city}{actions}新型{projects}，{impacts}。'
  ],
  society: [
    '{city}{actions}首个{projects}培训中心，{org}提供技术支持。',
    '{name}提出的{projects}改革方案在{city}试点，{status}。',
    '{org}联合{city}多家机构{actions}{projects}科普计划，{impacts}。'
  ]
}

// 快讯模板
const breakingNewsTemplates = [
  '{alerts}：{city}{locations}附近探测到{anomalies}，{impacts}。',
  '{alerts}：{org}的{locations}发生{threats}事件，{name}{responses}。',
  '{alerts}：{city}边境出现{anomalies}，{name}带队{responses}。',
  '{alerts}：{org}的{locations}报告{threats}，{impacts}。',
  '{alerts}：{city}{locations}遭遇{threats}，{responses}，{impacts}。',
  '{alerts}：{monster}群体在{city}{locations}附近出现，{responses}。',
  '{alerts}：强大的{boss}现身{city}{locations}，{name}正在组织应对。',
  '{alerts}：{city}发现{monster}和{boss}互相争斗，{impacts}。',
  '{alerts}：{boss}率领{monster}群攻击{city}{locations}，{responses}。'
]

export const generateDailyNews = (count: number = 1): NewsItem[] => {
  return Array.from({ length: count }, () => {
    const content = Object.values(dailyReportTemplates)
      .map(templates => faker.helpers.arrayElement(templates))
      .map(template => {
        let result = template
        // 替换所有词元
        Object.entries(tokens).forEach(([key, values]) => {
          const pattern = new RegExp(`{${key}}`, 'g')
          while (result.includes(`{${key}}`)) {
            result = result.replace(pattern, faker.helpers.arrayElement(values))
          }
        })
        // 使用游戏数据替换基础信息
        return result
          .replace(/{city}/g, gameData.getRandomCity())
          .replace(/{org}/g, gameData.getRandomCompany())
          .replace(/{name}/g, gameData.getRandomNPC())
      })
      .join('')

    return {
      id: faker.string.uuid(),
      content,
      date: faker.date.recent(),
      type: '日报'
    }
  })
}

export const generateBreakingNews = (count: number = 3): NewsItem[] => {
  return Array.from({ length: count }, () => {
    let content = faker.helpers.arrayElement(breakingNewsTemplates)
    
    // 替换紧急词元
    Object.entries(emergencyTokens).forEach(([key, values]) => {
      const pattern = new RegExp(`{${key}}`, 'g')
      while (content.includes(`{${key}}`)) {
        content = content.replace(pattern, faker.helpers.arrayElement(values))
      }
    })
    
    // 使用游戏数据替换基础信息
    content = content
      .replace(/{city}/g, gameData.getRandomCity())
      .replace(/{org}/g, gameData.getRandomCompany())
      .replace(/{name}/g, gameData.getRandomNPC())
      .replace(/{monster}/g, gameData.getRandomMonster())
      .replace(/{boss}/g, gameData.getRandomBoss())

    return {
      id: faker.string.uuid(),
      content,
      date: faker.date.recent(),
      type: '快讯'
    }
  })
}

const NewsItem: React.FC<{ news: NewsItem }> = ({ news }) => {
  return (
    <article className="nes-container is-rounded">
      <div className="flex justify-between items-center mb-2">
        <span className="nes-text is-primary">{news.type}</span>
        <small>{news.date.toLocaleDateString()}</small>
      </div>
      <div className="text-sm whitespace-pre-line">
        {news.content}
      </div>
    </article>
  )
}

export default NewsItem 