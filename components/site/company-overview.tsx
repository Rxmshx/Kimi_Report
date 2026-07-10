'use client'

import { Code2, Smartphone, BrainCircuit, Boxes } from 'lucide-react'
import { Reveal } from './reveal'

const pillars = [
  {
    icon: Code2,
    name: 'Studio',
    desc: 'Enterprise-grade software development',
  },
  {
    icon: Smartphone,
    name: 'Apps',
    desc: 'iOS, Android, Flutter, React Native & PWA development',
  },
  {
    icon: BrainCircuit,
    name: 'Intelligence',
    desc: 'AI agents, enterprise automation & machine learning',
  },
  {
    icon: Boxes,
    name: 'Blockchain',
    desc: 'Smart contracts, tokenization & Web3 platforms',
  },
]

const clients = [
  'duPay',
  'SOBHA Realty',
  'Al Rostamani Group',
  'Ingeni Health',
  'U-Vault',
  'FedEx',
]

const verticals = [
  { v: 'Health & Fitness', d: 'AI-powered personalization' },
  { v: 'Fintech', d: 'Multi-chain crypto wallets' },
  { v: 'Real Estate', d: 'Metaverse solutions' },
  { v: 'Media', d: 'CRM systems' },
  { v: 'Gaming', d: 'Custom applications' },
]

export function CompanyOverview() {
  return (
    <section id="company" className="relative overflow-hidden py-28">
      <div
        className="absolute left-0 top-10 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Company Research
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Elchai Group — a Dubai AI, blockchain & digital transformation
            consultancy.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Elchai World FZCO was founded in 2022 and has delivered 150+
            completed projects across four core pillars. As a firm whose
            business is building AI and automation for enterprise clients,
            evaluating new open-source models is mission-critical to its
            competitive edge.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-6 font-mono text-sm">
          <div className="rounded-xl border border-border bg-card/40 px-5 py-3">
            <span className="text-primary">Founded</span>
            <span className="ml-3 text-foreground">2022</span>
          </div>
          <div className="rounded-xl border border-border bg-card/40 px-5 py-3">
            <span className="text-primary">Projects</span>
            <span className="ml-3 text-foreground">150+</span>
          </div>
          <div className="rounded-xl border border-border bg-card/40 px-5 py-3">
            <span className="text-primary">HQ</span>
            <span className="ml-3 text-foreground">Dubai, UAE</span>
          </div>
          <div className="rounded-xl border border-border bg-card/40 px-5 py-3">
            <span className="text-primary">Entity</span>
            <span className="ml-3 text-foreground">Elchai World FZCO</span>
          </div>
        </div>

        {/* pillars */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                  <p.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* clients + verticals */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card/40 p-7">
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                Key Clientele
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {clients.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-card/40 p-7">
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                Industry Verticals
              </h3>
              <ul className="mt-5 grid gap-3">
                {verticals.map((x) => (
                  <li
                    key={x.v}
                    className="flex items-center justify-between border-b border-border/60 pb-2 last:border-0"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {x.v}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {x.d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
