'use client'

import { FC, useEffect, useRef } from 'react'

const MAP_WIDTH = 480  // 调整宽度以适应24个格子
const MAP_HEIGHT = 300
const HOUR_WIDTH = MAP_WIDTH / 24  // 每小时占据的宽度

const GameMap: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const drawMap = async (ctx: CanvasRenderingContext2D) => {
    // 清空画布
    ctx.clearRect(0, 0, MAP_WIDTH, MAP_HEIGHT)
    
    // 加载并绘制SVG地图
    const img = new Image()
    img.src = '/amCharts.pixelMap_2.svg'
    await new Promise((resolve) => {
      img.onload = () => {
        // 计算缩放比例以适应画布
        const scale = Math.min(
          (MAP_WIDTH) / img.width,
          (MAP_HEIGHT - 30) / img.height
        )
        
        // 计算居中位置
        const x = (MAP_WIDTH - img.width * scale) / 2
        const y = (MAP_HEIGHT - 30 - img.height * scale) / 2
        
        // 绘制地图
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale)
        resolve(null)
      }
    })
    
    // 计算月蚀区位置
    const currentHour = new Date().getHours()
    const nightStart = (currentHour - 4 + 24) % 24  // 当前时间前4小时开始
    const startX = ((nightStart + 4) * HOUR_WIDTH) % MAP_WIDTH  // +4 调整基准点
    
    // 绘制月蚀区（8小时宽度）
    ctx.fillStyle = 'rgba(0, 0, 50, 0.2)'
    if (startX + (8 * HOUR_WIDTH) > MAP_WIDTH) {
      // 跨越地图边界时需要分两部分绘制
      const firstWidth = MAP_WIDTH - startX
      ctx.fillRect(startX, 0, firstWidth, MAP_HEIGHT - 30)
      ctx.fillRect(0, 0, (8 * HOUR_WIDTH) - firstWidth, MAP_HEIGHT - 30)
    } else {
      ctx.fillRect(startX, 0, 8 * HOUR_WIDTH, MAP_HEIGHT - 30)
    }
    
    // 标注文字
    ctx.font = '12px "Press Start 2P"'
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'left'
    const nightX = startX + (4 * HOUR_WIDTH)  // 在夜间中心位置标注文字
    const textX = nightX > MAP_WIDTH ? nightX - MAP_WIDTH : nightX
    ctx.fillText('月蚀区', textX - 30, 20)

    // 绘制时区轴
    ctx.strokeStyle = '#666'
    ctx.fillStyle = '#666'
    ctx.font = '10px "Press Start 2P"'
    ctx.textAlign = 'center'
    
    // 绘制轴线
    ctx.beginPath()
    ctx.moveTo(20, MAP_HEIGHT - 20)
    ctx.lineTo(MAP_WIDTH - 20, MAP_HEIGHT - 20)
    ctx.stroke()

    // 绘制时区标记
    for (let timezone = -12; timezone <= 12; timezone++) {
      const x = MAP_WIDTH * (timezone + 12) / 24
      // 绘制刻度线
      ctx.beginPath()
      ctx.moveTo(x, MAP_HEIGHT - 25)
      ctx.lineTo(x, MAP_HEIGHT - 15)
      ctx.stroke()
      
      // 标注时区
      if (timezone % 3 === 0) {  // 每隔3个时区标注一次
        const label = timezone > 0 ? `+${timezone}` : timezone
        ctx.fillText(label.toString(), x, MAP_HEIGHT)
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 初始绘制
    drawMap(ctx)

    // 每分钟更新
    const timer = setInterval(() => {
      drawMap(ctx)
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="nes-container">
      <canvas 
        ref={canvasRef}
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
        className="w-full"
      />
    </div>
  )
}

export default GameMap 