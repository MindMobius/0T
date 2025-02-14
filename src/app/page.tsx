import { FC } from 'react'

const Home: FC = () => {
  return (
    <main className="min-h-screen p-4 font-pixel">
      <h1 className="nes-text mb-8">魔轨世界</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* 贾德市集 */}
        <section className="nes-container with-title">
          <h2 className="title">贾德市集</h2>
          <div>
            {/* TODO: 接入价格数据 */}
            <p>资源价格走势图表将显示在这里...</p>
          </div>
        </section>

        {/* 广而告之 */}
        <section className="nes-container with-title">
          <h2 className="title">广而告之</h2>
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
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
