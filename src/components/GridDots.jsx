import { useEffect, useRef } from 'react'
import anime from 'animejs'

export default function GridDots() {
  const ref = useRef(null)

  useEffect(() => {
    anime({
      targets: ref.current.querySelectorAll('.gdot'),
      scale: [
        { value: 1.6, easing: 'easeOutSine', duration: 500 },
        { value: 1, easing: 'easeInOutQuad', duration: 1200 },
      ],
      opacity: [
        { value: 0.7, easing: 'easeOutSine', duration: 500 },
        { value: 0.15, easing: 'easeInOutQuad', duration: 1200 },
      ],
      delay: anime.stagger(35, { grid: [14, 14], from: 'center' }),
      loop: true,
    })
  }, [])

  return (
    <div ref={ref} className="grid grid-cols-[repeat(14,1fr)] gap-[7px] w-[340px] h-[340px]">
      {Array.from({ length: 196 }).map((_, i) => (
        <div
          key={i}
          className="gdot w-[5px] h-[5px] rounded-full bg-neuris-light opacity-15"
        />
      ))}
    </div>
  )
}
