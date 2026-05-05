import { useEffect, useRef } from 'react'

export default function NeuralBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let mouse = { x: -1000, y: -1000 }
    const particles = []
    const count = 90

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.35
        this.vy = (Math.random() - 0.5) * 0.35
        this.r = Math.random() * 1.5 + 0.5
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }
    }

    resize()
    for (let i = 0; i < count; i++) particles.push(new Particle())

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.update()
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        const glow = dm < 200 ? 1 - dm / 200 : 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r + glow * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139,122,232,${0.25 + glow * 0.55})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const d = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (d < 140) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(109,90,205,${0.07 * (1 - d / 140)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('resize', resize)
    document.addEventListener('mousemove', onMove)
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  )
}
