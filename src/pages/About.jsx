import { useEffect } from 'react'
import anime from 'animejs'
import AnimateIn from '../components/AnimateIn'

const values = [
  { title: 'Augmentation over Automation', desc: 'Our tools enhance human expert judgment. Every AI-generated insight is a hypothesis to be validated, not a verdict.' },
  { title: 'Evidence-Grade Accuracy', desc: 'All outputs meet forensic standards for courtroom presentation and clinical documentation requirements.' },
  { title: 'Ethical by Design', desc: 'Independent ethics review before every deployment. Transparency in model decision-making through explainable AI.' },
  { title: 'Research-Grounded', desc: 'Every module is grounded in peer-reviewed literature. We publish methodologies for independent verification.' },
]

export default function About() {
  useEffect(() => {
    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: '.pg-title', opacity: [0, 1], translateY: [30, 0], duration: 900 })
      .add({ targets: '.pg-lead', opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=500')
  }, [])

  return (
    <main className="relative z-10">
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-3xl mx-auto">
        <h1 className="pg-title text-4xl md:text-5xl font-extrabold tracking-tight text-white opacity-0">
          About NeurisAI
        </h1>
        <p className="pg-lead text-lg text-zinc-400 leading-relaxed mt-6 opacity-0">
          We are building AI that understands the human mind to serve justice and accelerate healing.
        </p>
      </section>

      <section className="px-6 md:px-12 pb-20 max-w-3xl mx-auto space-y-16">
        <AnimateIn>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              NeurisAI exists at the intersection of artificial intelligence, forensic science, and clinical psychology.
              We believe that understanding human behavior at a computational level can fundamentally transform how
              crimes are investigated and how trauma is treated.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Our platform is designed to augment the capabilities of forensic investigators and mental health
              professionals, not to replace them. Every insight our system generates is presented as a hypothesis
              to be validated by human expertise.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Forensic investigators and criminal psychologists work with incomplete information under enormous
              time pressure. Traditional methods of behavioral analysis rely heavily on individual experience and
              intuition, leading to inconsistent outcomes across cases and jurisdictions.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              In clinical settings, trauma assessment remains time-intensive and often re-traumatizing. Standard
              evaluation protocols were designed for a world without computational tools, leaving significant room
              for improvement in both efficiency and patient experience.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <AnimateIn key={i} delay={i * 60}>
                  <div className="bg-surface border border-border rounded-xl p-6 hover:border-neuris/25 transition-colors">
                    <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">The Team</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              NeurisAI was founded by researchers and engineers with backgrounds spanning machine learning,
              computational neuroscience, forensic psychology, and criminal justice. We work closely with law
              enforcement agencies, forensic laboratories, and psychiatric institutions to ensure our tools
              address real operational needs.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              We are based in Canada and are currently in private development, with a planned launch in Q3 2026.
            </p>
          </div>
        </AnimateIn>
      </section>
    </main>
  )
}
