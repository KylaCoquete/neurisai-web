import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'
import AnimateIn from '../components/AnimateIn'
import GridDots from '../components/GridDots'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22"/>
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93"/>
        <path d="M8.56 13a8 8 0 0 0-2.3 3.5"/>
        <path d="M15.44 13a8 8 0 0 1 2.3 3.5"/>
      </svg>
    ),
    title: 'Behavioral Prediction',
    desc: 'Transformer-based models trained on forensic case data predict behavioral trajectories with 34% higher accuracy than traditional statistical methods.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: '3D Scene Reconstruction',
    desc: 'Generate forensic-grade 3D models from as few as 12 photographs using our NeRF-based reconstruction pipeline with architectural priors.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
      </svg>
    ),
    title: 'Trauma Assessment',
    desc: 'Adaptive clinical evaluation reduces assessment time by 40% while maintaining diagnostic reliability for PCL-5 and CAPS-5 instruments.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
        <path d="M8 12H4"/>
        <path d="M20 12h-4"/>
        <path d="M12 4v4"/>
      </svg>
    ),
    title: 'Cognitive Profiling',
    desc: 'Map behavioral evidence to cognitive patterns using our proprietary ontology built from peer-reviewed forensic psychology literature.',
  },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const tl = anime.timeline({ easing: 'easeOutExpo' })
    tl.add({ targets: '.hero-badge', opacity: [0, 1], translateY: [15, 0], duration: 700 })
      .add({ targets: '.hero-line', opacity: [0, 1], translateY: [40, 0], duration: 900, delay: anime.stagger(100) }, '-=400')
      .add({ targets: '.hero-sub', opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=500')
      .add({ targets: '.hero-btns', opacity: [0, 1], translateY: [15, 0], duration: 700 }, '-=400')
  }, [])

  return (
    <main className="relative z-10">
      <section ref={heroRef} className="min-h-screen flex items-center px-6 md:px-12 pt-24 pb-16 max-w-7xl mx-auto">
        <div className="flex-1 max-w-2xl">
          <div className="hero-badge inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-neuris-light bg-neuris-dim border border-neuris/20 mb-8 opacity-0">
            Coming Q3 2026
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            <span className="hero-line block text-white opacity-0">Decoding</span>
            <span className="hero-line block bg-gradient-to-r from-neuris-light via-purple-400 to-violet-300 bg-clip-text text-transparent opacity-0">
              Criminal Minds
            </span>
            <span className="hero-line block text-white opacity-0">Through AI</span>
          </h1>

          <p className="hero-sub text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl mb-10 opacity-0">
            NeurisAI combines forensic psychology, 3D scene reconstruction,
            and predictive behavioral modeling to help investigators solve cases
            and clinicians accelerate trauma recovery.
          </p>

          <div className="hero-btns flex flex-wrap gap-4 opacity-0">
            <Link
              to="/about"
              className="px-7 py-3 rounded-lg bg-neuris text-white font-medium text-sm hover:bg-neuris-light hover:shadow-[0_0_30px_rgba(109,90,205,0.4)] transition-all duration-300"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 rounded-lg border border-white/10 text-zinc-300 font-medium text-sm hover:border-neuris/50 hover:text-neuris-light transition-all duration-300"
            >
              Get Early Access
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 justify-center items-center">
          <GridDots />
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24 max-w-6xl mx-auto">
        <AnimateIn className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Core Capabilities
          </h2>
          <p className="text-zinc-500 mt-3 max-w-lg">
            Four interconnected modules working together to decode behavior and reconstruct events.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <AnimateIn key={i} delay={i * 80}>
              <div className="group bg-surface border border-border rounded-xl p-7 hover:border-neuris/30 hover:shadow-[0_0_50px_rgba(109,90,205,0.06)] transition-all duration-400">
                <div className="text-neuris-light mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24 max-w-6xl mx-auto">
        <AnimateIn>
          <div className="bg-surface border border-border rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Built for those who protect and heal
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto mb-8 leading-relaxed">
              NeurisAI is designed in collaboration with forensic investigators, law enforcement agencies,
              and licensed psychiatrists to ensure every tool meets real operational needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 rounded-lg bg-neuris-dim border border-neuris/15 text-neuris-light text-sm font-mono">Law Enforcement</span>
              <span className="px-4 py-2 rounded-lg bg-neuris-dim border border-neuris/15 text-neuris-light text-sm font-mono">Forensic Labs</span>
              <span className="px-4 py-2 rounded-lg bg-neuris-dim border border-neuris/15 text-neuris-light text-sm font-mono">Psychiatry</span>
              <span className="px-4 py-2 rounded-lg bg-neuris-dim border border-neuris/15 text-neuris-light text-sm font-mono">Research</span>
            </div>
          </div>
        </AnimateIn>
      </section>
    </main>
  )
}
