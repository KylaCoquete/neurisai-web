import { useEffect, useRef } from 'react'
import anime from 'animejs'

export default function AnimateIn({ children, className = '', delay = 0, y = 30 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: el,
            opacity: [0, 1],
            translateY: [y, 0],
            duration: 900,
            delay,
            easing: 'easeOutExpo',
          })
          obs.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, y])

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}
