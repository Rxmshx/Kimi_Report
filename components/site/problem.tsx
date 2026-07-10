'use client'

import { Reveal } from './reveal'

const pains = [
  {
    tag: '01',
    title: 'High Cost',
    body: 'Premium closed models like Claude Opus and GPT-5.4 carry steep per-token pricing and rate limits that shrink margins on every client engagement.',
  },
  {
    tag: '02',
    title: 'Slow Prototyping',
    body: 'Manual iteration across code, smart contracts, UI and decks bottlenecks delivery — slowing 150+ projects across Studio, Apps, Intelligence & Blockchain.',
  },
  {
    tag: '03',
    title: 'Data & Privacy Risk',
    body: 'Sending sensitive client code and smart contracts to third-party clouds creates a data-residency and compliance risk under Dubai’s PDPL.',
  },
]

export function Problem() {
  return (
    <section id="problem" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          The Bottleneck
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Elchai ships world-class work — but the AI stack is holding margins hostage.
        </h2>
        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Since 2022, Elchai Group has delivered for SOBHA Realty, duPay, Al
          Rostamani and FedEx. Yet premium closed models are expensive,
          rate-limited, and route confidential IP through external clouds.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {pains.map((p, i) => (
          <Reveal key={p.tag} delay={i * 0.1}>
            <div className="group h-full rounded-2xl border border-border bg-card/50 p-7 transition-colors hover:border-destructive/40">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-muted-foreground">
                  {p.tag}
                </span>
                <span className="h-2 w-2 rounded-full bg-destructive/70" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
