import { FC } from 'react'
import StatusBar from '@/components/StatusBar'
import GameMap from '@/components/GameMap'

const Home: FC = () => {
  return (
    <main className="min-h-screen p-4 font-pixel max-w-4xl mx-auto">
      <h1 className="nes-text mb-8">巴啦面板</h1>
      <StatusBar />

      
      <div className="space-y-6">
        {/* 魔轨新闻 */}
        <section className="nes-container with-title">
          <h2 className="title">魔轨新闻</h2>
          <div className="space-y-4">
            {/* TODO: 接入RSS数据 */}
            <article>
              <h3>世界动态示例</h3>
              <p>这里将显示新闻内容...</p>
            </article>
          </div>
        </section>

        {/* 市集 */}
        <section className="nes-container with-title">
          <h2 className="title">市集</h2>
          <div>
            {/* TODO: 接入价格数据 */}
            <p>资源价格走势图表将显示在这里...</p>
          </div>
        </section>

        {/* 公共牌 */}
        <section className="nes-container with-title">
          <h2 className="title">公共牌</h2>
          <div className="space-y-4">
            {/* TODO: 接入委托和求购数据 */}
            <div>
              <h3>委托任务</h3>
              <p>任务列表将显示在这里...</p>
            </div>
            <div>
              <h3>资源求购</h3>
              <p>求购信息将显示在这里...</p>
            </div>
            <div>
              <h3>商品促销</h3>
              <p>促销信息将显示在这里...</p>
            </div>
          </div>
        </section>

        {/* 信息 */}
        <section className="nes-container with-title">
          <h2 className="title">地图</h2>
          <div className="space-y-4">
            <GameMap />
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
