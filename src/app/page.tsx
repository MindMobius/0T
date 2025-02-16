import { FC } from 'react'
import StatusBar from '@/components/StatusBar'
import NewsItem, { generateDailyNews, generateBreakingNews } from '@/components/NewsItem'
import Market from '@/components/Market'
import PublicBoard from '@/components/PublicBoard'


const Home: FC = () => {

  return (
    <main className="min-h-screen p-4 font-pixel max-w-4xl mx-auto">
      <h1 className="nes-text mb-8">巴啦面板</h1>
 

      
      <div className="space-y-6">
        {/* 魔轨新闻 */}
        <section className="nes-container with-title">
          <h2 className="title">魔轨新闻</h2>
          <div className="space-y-8">
            <div>
              <h3 className="nes-text is-primary mb-4">今日日报</h3>
              <div className="space-y-4">
                {generateDailyNews(1).map(item => (
                  <NewsItem key={item.id} news={item} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="nes-text is-error mb-4">最新快讯</h3>
              <div className="space-y-4">
                {generateBreakingNews(3).map(item => (
                  <NewsItem key={item.id} news={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 公共牌 */}
        <section className="nes-container with-title">
          <h2 className="title">公共牌</h2>
          <PublicBoard />
        </section>

        {/* 市集 */}
        <section className="nes-container with-title">
          <h2 className="title">市集</h2>
          <Market />
        </section>

        <StatusBar />
      </div>
    </main>
  )
}

export default Home
