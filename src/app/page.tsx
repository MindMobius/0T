import { FC } from 'react'
import HeroSection from '@/components/landing/HeroSection'
import VideoSection from '@/components/landing/VideoSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import FactionsSection from '@/components/landing/FactionsSection'
import GameplaySection from '@/components/landing/GameplaySection'
import Footer from '@/components/landing/Footer'

const Home: FC = () => {

  return (
    <main className="min-h-screen bg-black text-white selection:bg-ds-gold selection:text-black">
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <GameplaySection />
      <FactionsSection />
      <Footer />
    </main>
  )
}

export default Home
