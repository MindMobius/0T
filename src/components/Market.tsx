import { gameData } from '@/services/GameData'

type PriceData = {
  resource: string
  currentPrice: number
  trend: number[]
  currency: string
  city: string
  changePercent: number
  demand: '高' | '中' | '低'
}

function generatePrices(): PriceData[] {
  // 先随机选择不同的城市
  const cities = Array.from(
    { length: 5 }, 
    () => gameData.getRandomCity()
  ).filter((city, index, self) => self.indexOf(city) === index) // 去重

  const currency = gameData.getRandomElement('resources', 'currency')
  
  // 为每个城市生成不同的矿物
  const minerals = Array.from(
    { length: 3 }, 
    () => gameData.getRandomMineral()
  ).filter((mineral, index, self) => self.indexOf(mineral) === index) // 去重
  
  return cities.flatMap(city => {
    // 每个城市随机选择2-3种矿物
    const cityMinerals = minerals
      .sort(() => Math.random() - 0.5)
      .slice(0, 2 + Math.floor(Math.random() * 2))
    
    return cityMinerals.map(mineral => {
      const basePrice = Math.floor(Math.random() * 1000) + 100
      // 基于基础价格生成趋势，添加一些随机波动
      const trend = Array.from({ length: 6 }, () => 
        Math.floor(basePrice * (0.8 + Math.random() * 0.4))
      )
      const changePercent = ((trend[5] - trend[0]) / trend[0] * 100).toFixed(2)
      const demand = ['高', '中', '低'][Math.floor(Math.random() * 3)] as '高' | '中' | '低'
      
      return {
        resource: mineral,
        currentPrice: trend[5],
        trend,
        currency,
        city,
        changePercent: Number(changePercent),
        demand
      }
    })
  })
}

export default function Market() {
  const prices = generatePrices()
  
  // 按资源分组
  const groupedPrices = prices.reduce((acc, price) => {
    if (!acc[price.resource]) {
      acc[price.resource] = []
    }
    acc[price.resource].push(price)
    return acc
  }, {} as Record<string, PriceData[]>)

  return (
    <div className="space-y-4">
      {Object.entries(groupedPrices).map(([resource, cityPrices]) => (
        <div key={resource} className="nes-container">
          <h3 className="text-lg mb-2">{resource}</h3>
          <table className="nes-table is-bordered is-centered w-full">
            <thead>
              <tr>
                <th>城市</th>
                <th>价格</th>
                <th>趋势</th>
                <th>需求</th>
              </tr>
            </thead>
            <tbody>
              {cityPrices.map((item, index) => (
                <tr key={index}>
                  <td>{item.city}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>{item.currentPrice} {item.currency}</span>
                      <span className={item.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}>
                        {item.changePercent >= 0 ? '▲' : '▼'} 
                        {Math.abs(item.changePercent)}%
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-0.5 h-4">
                      {item.trend.map((price, i) => (
                        <div 
                          key={i}
                          className={`w-1 ${price <= item.trend[i-1] ? 'bg-red-500' : 'bg-green-500'}`}
                          style={{height: `${(price/1100)*100}%`}}
                        />
                      ))}
                    </div>
                  </td>
                  <td>
                    <span className={
                      item.demand === '高' ? 'text-red-600' : 
                      item.demand === '中' ? 'text-yellow-600' : 
                      'text-green-600'
                    }>
                      {item.demand}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
} 