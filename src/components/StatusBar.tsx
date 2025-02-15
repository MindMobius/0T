'use client'

import { FC, useEffect, useState } from 'react'

const StatusBar: FC = () => {
  const [time, setTime] = useState(new Date())
  const [crosshairPos, setCrosshairPos] = useState<{ x: number, y: number } | null>(null)
  const [localTime, setLocalTime] = useState<Date | null>(null)
  const [isManualTime, setIsManualTime] = useState(false)
  
  // 获取当前小时和分钟的小数表示 (例如 14.5 表示 14:30)
  const getCurrentTimeValue = () => {
    const hours = time.getHours()
    const minutes = time.getMinutes()
    return hours + (minutes / 60)
  }

  // 处理滑动条变化
  const handleTimeSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    const hours = Math.floor(value)
    const minutes = Math.floor((value - hours) * 60)
    
    const newTime = new Date()
    newTime.setHours(hours, minutes)
    setTime(newTime)
    setIsManualTime(true)

    // 如果已有选中位置，更新本地时间
    if (crosshairPos) {
      const hourOffset = Math.floor((crosshairPos.x / 100) * 24) + 7 
      const newLocalTime = new Date(newTime.getTime() + hourOffset * 60 * 60 * 1000)
      setLocalTime(newLocalTime)
    }
  }

  // 重置时间
  const handleReset = () => {
    const currentTime = new Date()
    setTime(currentTime)
    setIsManualTime(false)
    
    if (crosshairPos) {
      const hourOffset = Math.floor((crosshairPos.x / 100) * 24) + 7 
      const newLocalTime = new Date(currentTime.getTime() + hourOffset * 60 * 60 * 1000)
      setLocalTime(newLocalTime)
    }
  }

  // 只在非手动模式下更新时间
  useEffect(() => {
    if (!isManualTime) {
      const timer = setInterval(() => {
        setTime(new Date())
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isManualTime])

  // 计算夜晚时间 (20:00-04:00 是夜晚)
  const isNight = () => {
    const hour = time.getHours()
    return hour >= 20 || hour < 4
  }

  const getTimeRemaining = () => {
    const hour = time.getHours()
    const minutes = time.getMinutes()
    if (isNight()) {
      const totalMinutes = ((3 + 24 - hour) * 60) - minutes
      const hours = Math.floor(totalMinutes / 60)
      const mins = totalMinutes % 60
      return `月蚀时刻: ${hours}小时${mins}分后结束`
    } else {
      const totalMinutes = (20 - hour) * 60 - minutes
      const hours = Math.floor(totalMinutes / 60)
      const mins = totalMinutes % 60
      return `月蚀时刻: ${hours}小时${mins}分后开始`
    }
  }

  // 计算魔素浓度
  const getMagicLevel = (currentTime: Date) => {
    const hour = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const totalHours = hour + minutes / 60
    
    if (totalHours >= 20) {
      // 20:00 - 23:59 浓度从 0 上升到 100
      return Math.floor(((totalHours - 20) / 4) * 100)
    } else if (totalHours < 4) {
      // 00:00 - 03:59 保持在 100
      return 100
    } else if (totalHours < 8) {
      // 04:00 - 07:59 浓度从 100 下降到 0
      return Math.floor(100 - ((totalHours - 4) / 4) * 100)
    } else {
      // 08:00 - 19:59 保持在 0
      return 0
    }
  }

  const magicLevel = getMagicLevel(time)

  // 处理地图点击 - 更新计算本地时间
  const handleMapClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width * 100  // 转换为百分比
    const y = (e.clientY - rect.top) / rect.height * 100  // 转换为百分比
    setCrosshairPos({ x, y })
    
    // 调整时差计算，天穹时间位于 GMT+6
    const hourOffset = Math.floor((x / 100) * 24) + 7 
    const newLocalTime = new Date(time.getTime() + hourOffset * 60 * 60 * 1000)
    setLocalTime(newLocalTime)
  }

  return (
    <div className="nes-container is-rounded p-4">
      {/* 时间滑动条 */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          {/* 时间刻度 */}
          <div className="relative w-full h-6 mb-1">
            <div className="absolute inset-0 flex">
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i}
                  className="flex-1 text-center text-xs relative"
                >
                  <span className="absolute left-1/2 -translate-x-1/2">
                    {(i * 3).toString().padStart(2, '0')}:00
                  </span>
                  {i > 0 && <div className="absolute left-0 top-4 h-2 w-px bg-gray-400"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* 滑动条 */}
          <div className="relative nes-progress">
            <progress 
              className="nes-progress"
              value={getCurrentTimeValue()} 
              max="24"
              style={{
                width: '100%',
                height: '24px',
                WebkitAppearance: 'none',
                appearance: 'none'
              }}
            />
            <input
              type="range"
              className="absolute inset-0 w-full opacity-0 cursor-pointer"
              min="0"
              max="24"
              step="0.016667"
              value={getCurrentTimeValue()}
              onChange={handleTimeSliderChange}
            />
          </div>
        </div>
        <button 
          className="nes-btn is-primary"
          onClick={handleReset}
        >
          重置
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {/* 天穹时间信息 */}
        <div className="grid grid-cols-3 gap-4">
          <div className="nes-text">
            ⏰ 天穹时间: {time.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
          </div>
          <div className="nes-text text-center">
            {isNight() ? '🌙' : '☀️'} {getTimeRemaining()}
          </div>
          <div className="nes-text text-right">
            ✨ 魔素浓度: <span className={`
              ${magicLevel === 0 ? 'text-green-500' : ''}
              ${magicLevel > 0 && magicLevel < 50 ? 'text-yellow-500' : ''}
              ${magicLevel >= 50 && magicLevel < 100 ? 'text-red-500' : ''}
              ${magicLevel === 100 ? 'text-purple-500' : ''}
            `}>{magicLevel}</span>%
          </div>
        </div>

        {/* 本地时间信息 */}
        {localTime && (
          <div className="grid grid-cols-3 gap-4">
            <div className="nes-text">
              🌍 选中时间: {localTime.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="nes-text text-center">
              {localTime.getHours() >= 20 || localTime.getHours() < 4 ? '🌙' : '☀️'} 
              {(() => {
                const hour = localTime.getHours()
                const minutes = localTime.getMinutes()
                if (hour >= 20 || hour < 4) {
                  const totalMinutes = ((3 + 24 - hour) * 60) - minutes
                  const hours = Math.floor(totalMinutes / 60)
                  const mins = totalMinutes % 60
                  return `月蚀时刻: ${hours}小时${mins}分后结束`
                } else {
                  const totalMinutes = (20 - hour) * 60 - minutes
                  const hours = Math.floor(totalMinutes / 60)
                  const mins = totalMinutes % 60
                  return `月蚀时刻: ${hours}小时${mins}分后开始`
                }
              })()}
            </div>
            <div className="nes-text text-right">
              ✨ 魔素浓度: <span className={`
                ${getMagicLevel(localTime) === 0 ? 'text-green-500' : ''}
                ${getMagicLevel(localTime) > 0 && getMagicLevel(localTime) < 50 ? 'text-yellow-500' : ''}
                ${getMagicLevel(localTime) >= 50 && getMagicLevel(localTime) < 100 ? 'text-red-500' : ''}
                ${getMagicLevel(localTime) === 100 ? 'text-purple-500' : ''}
              `}>{getMagicLevel(localTime)}</span>%
            </div>
          </div>
        )}
      </div>
      
      {/* 地图区域 */}
      <div className="relative mt-4 nes-container is-dark">
        {/* 地图和时区线 */}
        <div className="absolute inset-0" style={{ aspectRatio: '2.5/1' }}>
          <svg
            className="w-full h-full"
            onClick={handleMapClick}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 250 100"
            style={{ 
              backgroundImage: 'url(/amCharts.pixelMap_2.svg)', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat' 
            }}
          >
            {/* 时区分隔线 */}
            {[...Array(23)].map((_, i) => (
              <line
                key={i}
                x1={`${(i + 1) * (100 / 24)}%`}
                y1="0"
                x2={`${(i + 1) * (100 / 24)}%`}
                y2="100%"
                stroke="#666"
                strokeWidth="1"
                strokeDasharray="4"
                opacity="0.3"
              />
            ))}
            
            {/* 十字线 */}
            {crosshairPos && (
              <>
                <line
                  x1="0"
                  y1={`${crosshairPos.y}%`}
                  x2="100%"
                  y2={`${crosshairPos.y}%`}
                  stroke="red"
                  strokeWidth="1"
                  strokeDasharray="4"
                />
                <line
                  x1={`${crosshairPos.x}%`}
                  y1="0"
                  x2={`${crosshairPos.x}%`}
                  y2="100%"
                  stroke="red"
                  strokeWidth="1"
                  strokeDasharray="4"
                />
              </>
            )}
          </svg>
        </div>
        
        {/* 添加一个占位 div 来保持容器高度 */}
        <div style={{ aspectRatio: '2.5/1' }}></div>
        
        {/* 时区标签 */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <div className="relative h-6">
            <div className="absolute inset-0 flex">
              {[...Array(25)].map((_, i) => {
                const timezone = i - 12
                const label = timezone === 6 ? '天穹' : `${timezone >= 0 ? '+' : ''}${timezone}`
                return (
                  <div 
                    key={i}
                    className={`flex-1 text-center text-xs ${timezone === 6 ? 'text-blue-500 font-bold' : ''}`}
                    style={{ width: `${100/24}%` }}
                  >
                    {label}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatusBar 