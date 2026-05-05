import { useEffect } from 'react'
import anime from 'animejs'
import AnimateIn from '../components/AnimateIn'

const contacts = [
  { title: 'General Inquiries', value: 'contact@neurisai.me', href: 'mailto:contact@neurisai.me' },
  { title: 'Research', value: 'research@neurisai.me', href: 'mailto:research@neurisai.me' },
  { title: 'Security', value: 'security@neurisai.me', href: 'mailto:security@neurisai.me' },
  { title: 'Careers', value: 'careers@neurisai.me', href: 'mailto:careers@neurisai.me' },
]

export default function Contact() {
  useEffect(() => {
    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: '.pg-title', opacity: [0, 1], translateY: [30, 0], duration: 900 })
      .add({ targets: '.pg-lead', opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=500')
  }, [])

  return (
    <main className="relative z-10">
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-3xl mx-auto">
        <h1 className="pg-title text-4xl md:text-5xl font-extrabold tracking-tight text-white opacity-0">
          Get in Touch
        </h1>
        <p className="pg-lead text-lg text-zinc-400 leading-relaxed mt-6 opacity-0">
          Interested in early access, research collaboration, or partnership opportunities? We would love to hear from you.
        </p>
      </section>

      <section className="px-6 md:px-12 pb-16 max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((c, i) => (
            <AnimateIn key={i} delay={i * 60}>
              <a
                href={c.href}
                className="block bg-surface border border-border rounded-xl p-6 hover:border-neuris/30 transition-all group"
              >
                <h3 className="text-white font-semibold text-sm mb-1">{c.title}</h3>
                <p className="text-zinc-500 text-sm group-hover:text-neuris-light transition-colors">{c.value}</p>
              </a>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24 max-w-3xl mx-auto space-y-12">
        <AnimateIn>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">For Law Enforcement & Clinical Partners</h2>
            <p className="text-zinc-400 leading-relaxed">
              We are actively seeking partnerships with law enforcement agencies, forensic laboratories, and
              psychiatric institutions for our pilot program launching Q3 2026. If your organization is interested
              in evaluating NeurisAI for operational use, please contact us at{' '}
              <a href="mailto:partnerships@neurisai.me" className="text-neuris-light hover:underline">
                partnerships@neurisai.me
              </a>{' '}
              with a brief description of your use case.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">For Investors</h2>
            <p className="text-zinc-400 leading-relaxed">
              NeurisAI is currently in private development. For investment inquiries, please reach out to{' '}
              <a href="mailto:investors@neurisai.me" className="text-neuris-light hover:underline">
                investors@neurisai.me
              </a>.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div className="bg-surface border border-border rounded-xl p-8">
            <h3 className="text-white font-semibold mb-3">Location</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              NeurisAI is headquartered in Canada. We operate as a distributed team with research partners
              across North America and Europe.
            </p>
          </div>
        </AnimateIn>
      </section>
    </main>
  )
}
