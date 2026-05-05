import { useEffect } from 'react'
import anime from 'animejs'
import AnimateIn from '../components/AnimateIn'

const modules = [
  {
    title: 'Behavioral Prediction Engine',
    desc: 'Transformer-based architecture fine-tuned on anonymized forensic case studies. Processes temporal sequences of actions, environmental factors, and psychological indicators to generate probability distributions over behavioral outcomes.',
    tags: ['PyTorch', 'Transformers', 'CUDA', 'ONNX'],
  },
  {
    title: '3D Scene Reconstruction',
    desc: 'NeRF-based pipeline with custom forensic extensions. Generates metrically accurate interactive 3D models from as few as 12 calibrated photographs with architectural priors and physical constraints.',
    tags: ['NeRF', 'Three.js', 'WebGL', 'COLMAP'],
  },
  {
    title: 'Trauma Assessment Module',
    desc: 'Adaptive testing framework implementing validated clinical instruments (PCL-5, CAPS-5, CTQ). Real-time response analysis adjusts evaluation depth dynamically, reducing assessment time by approximately 40%.',
    tags: ['FastAPI', 'pgvector', 'IRT Models', 'WebSocket'],
  },
  {
    title: 'Cognitive Profiling System',
    desc: 'Maps behavioral evidence to cognitive patterns using a proprietary ontology derived from peer-reviewed forensic psychology literature. Full explainability chains for every generated profile.',
    tags: ['GraphQL', 'Neo4j', 'XAI', 'Knowledge Graphs'],
  },
]

const infra = [
  'Kubernetes-orchestrated microservices with custom operators for model lifecycle management',
  'Apache Kafka event streaming for real-time evidence processing',
  'PostgreSQL 16 with pgvector for hybrid structured and embedding-based retrieval',
  'Multi-region deployment with data residency controls for jurisdiction compliance',
  'End-to-end encryption with hardware security modules for evidence chain-of-custody',
  'Sub-30-second pipeline latency from evidence ingestion through analysis',
]

export default function Technology() {
  useEffect(() => {
    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: '.pg-title', opacity: [0, 1], translateY: [30, 0], duration: 900 })
      .add({ targets: '.pg-lead', opacity: [0, 1], translateY: [20, 0], duration: 700 }, '-=500')
  }, [])

  return (
    <main className="relative z-10">
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-3xl mx-auto">
        <h1 className="pg-title text-4xl md:text-5xl font-extrabold tracking-tight text-white opacity-0">
          Technology
        </h1>
        <p className="pg-lead text-lg text-zinc-400 leading-relaxed mt-6 opacity-0">
          Four interconnected modules working together to decode behavior, reconstruct events, and support clinical decisions.
        </p>
      </section>

      <section className="px-6 md:px-12 pb-16 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
          {modules.map((m, i) => (
            <AnimateIn key={i} delay={i * 70}>
              <div className="bg-surface border border-border rounded-xl p-7 hover:border-neuris/25 transition-colors h-full">
                <h3 className="text-neuris-light font-semibold text-lg mb-3">{m.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">{m.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {m.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-neuris-dim border border-neuris/15 text-neuris-light text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 pb-24 max-w-3xl mx-auto">
        <AnimateIn>
          <h2 className="text-2xl font-bold text-white mb-6">Infrastructure</h2>
          <div className="space-y-3">
            {infra.map((item, i) => (
              <AnimateIn key={i} delay={i * 40}>
                <div className="flex gap-3 items-start">
                  <span className="text-neuris-light mt-1.5 text-xs">&#9670;</span>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn className="mt-16">
          <div className="bg-surface-2 border border-border rounded-xl p-8">
            <h3 className="text-white font-semibold mb-3">Research Foundation</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Every module in our platform is grounded in peer-reviewed research. We publish our methodologies
              and evaluation results to enable independent verification by the forensic science community.
              See our{' '}
              <a
                href="https://github.com/KylaCoquete/neurisai-research"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neuris-light hover:underline"
              >
                research repository
              </a>{' '}
              for published papers and datasets.
            </p>
          </div>
        </AnimateIn>
      </section>
    </main>
  )
}
