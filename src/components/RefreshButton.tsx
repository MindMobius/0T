'use client'

import { FC } from 'react'
import { useRouter } from 'next/navigation'

const RefreshButton: FC = () => {
  const router = useRouter()

  return (
    <button 
      onClick={() => router.refresh()}
      className="nes-btn is-primary px-4 py-2 flex items-center gap-2"
    >
      <i className="nes-icon is-small refresh"></i>
      <span>刷新</span>
    </button>
  )
}

export default RefreshButton 