import { FC } from 'react'
import { gameData } from '@/services/GameData'

type Mission = {
  id: string
  title: string
  reward: string
  location: string
  npcId: number
}

type ResourceRequest = {
  id: string
  resource: string
  price: number
  quantity: number
  requester: string
  requesterId: number
}

type Promotion = {
  id: string
  item: string
  discount: number
  vendor: string
  location: string
}

const generateMissions = (count: number): Mission[] => {
  return Array(count).fill(null).map((_, i) => {
    const type = Math.random();
    let title, reward, npcId;
    
    if (type < 0.4) {
      const npc = gameData.getRandomNPCWithId();
      npcId = npc.id;
      title = `协助${npc.name}清理${gameData.getRandomMonster()}`;
    } else if (type < 0.7) {
      const npc = gameData.getRandomNPCWithId();
      npcId = npc.id;
      title = `${npc.name}悬赏击杀${gameData.getRandomBoss()}`;
    } else {
      const npc = gameData.getRandomNPCWithId();
      npcId = npc.id;
      title = `护送${npc.name}前往${gameData.getRandomCity()}`;
    }

    const rewardType = Math.random();
    if (rewardType < 0.4) {
      reward = `${Math.floor(Math.random() * 1000 + 500)}金币`;
    } else if (rewardType < 0.7) {
      reward = `${Math.floor(Math.random() * 10 + 1)}${gameData.getRandomMineral()}`;
    } else {
      reward = `${gameData.getRandomToken()}`;
    }

    return {
      id: `mission-${i}`,
      title,
      reward,
      location: gameData.getRandomCity(),
      npcId
    }
  })
}

const generateResourceRequests = (count: number): ResourceRequest[] => {
  return Array(count).fill(null).map((_, i) => {
    const npc = gameData.getRandomNPCWithId();
    return {
      id: `request-${i}`,
      resource: gameData.getRandomMineral(),
      price: Math.floor(Math.random() * 100 + 50),
      quantity: Math.floor(Math.random() * 20 + 1),
      requester: npc.name,
      requesterId: npc.id
    }
  })
}

const generatePromotions = (count: number): Promotion[] => {
  return Array(count).fill(null).map((_, i) => ({
    id: `promo-${i}`,
    item: `${gameData.getRandomModifier()}${Math.random() > 0.5 ? gameData.getRandomWeapon() : gameData.getRandomArmor()}`,
    discount: Math.floor(Math.random() * 10 + 1),
    vendor: gameData.getRandomCompany(),
    location: gameData.getRandomCity()
  }))
}

const PublicBoard: FC = () => {
  const missions = generateMissions(2)
  const requests = generateResourceRequests(1)
  const promotions = generatePromotions(3)

  return (
    <div className="space-y-4">
      <div>
        <h3 className="nes-text is-primary mb-4">任务与交易</h3>
        <div className="space-y-2">
          {missions.map(mission => (
            <div key={mission.id} className="nes-container is-rounded flex items-start gap-4">
              <img 
                src={`/avatar/avatar_${mission.npcId}.png`}
                alt="NPC头像"
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <p>
                  {mission.title.includes('清理') ? (
                    <>
                      协助<span className="text-blue-600">{mission.title.split('协助')[1].split('清理')[0]}</span>
                      清理<span className="text-red-600">{mission.title.split('清理')[1]}</span>
                    </>
                  ) : mission.title.includes('击杀') ? (
                    <>
                      <span className="text-blue-600">{mission.title.split('悬赏')[0]}</span>
                      悬赏击杀<span className="text-red-600">{mission.title.split('击杀')[1]}</span>
                    </>
                  ) : (
                    <>
                      护送<span className="text-blue-600">{mission.title.split('护送')[1].split('前往')[0]}</span>
                      前往<span className="text-green-600">{mission.title.split('前往')[1]}</span>
                    </>
                  )}
                </p>
                <p className="text-sm text-gray-600">
                  地点: <span className="text-green-600">{mission.location}</span> | 
                  报酬: <span className="text-amber-600">{mission.reward}</span>
                </p>
              </div>
            </div>
          ))}
          {requests.map(request => (
            <div key={request.id} className="nes-container is-rounded flex items-start gap-4">
              <img 
                src={`/avatar/avatar_${request.requesterId}.png`}
                alt="NPC头像"
                className="w-12 h-12 object-cover rounded-full"
              />
              <div>
                <p>
                  <span className="text-blue-600">{request.requester}</span>
                  正在收购
                  <span className="text-amber-600">{request.quantity}</span>
                  单位
                  <span className="text-green-600">{request.resource}</span>
                </p>
                <p className="text-sm text-gray-600">
                  单价: <span className="text-amber-600">{request.price}{gameData.getRandomCurrency()}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="nes-text is-error mb-4">商品促销</h3>
        <div className="space-y-2">
          {promotions.map(promo => (
            <div key={promo.id} className="nes-container is-rounded">
              <p>
                <span className="text-blue-600">{promo.vendor}</span>
                推出
                <span className="text-purple-600">{promo.item}</span>
                限时
                <span className="text-amber-600">{promo.discount}</span>
                折优惠
              </p>
              <p className="text-sm text-gray-600">
                促销地点: <span className="text-green-600">{promo.location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PublicBoard 