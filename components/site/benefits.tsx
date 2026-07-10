'use client'

import { CircleDollarSign, Network, Sparkles } from 'lucide-react'
import { Reveal } from './reveal'

const benefits = [
  {
    icon: CircleDollarSign,
    title: '5× Cheaper',
    body: '$0.75/M input · $3.50/M output ($0.15 cached) versus Claude’s $3 / $15. Open weights mean zero licensing lock-in.',
    stat: '≈ 80% lower cost',
  },
  {
    icon: Network,
    title: 'Agent Swarm Automation',
    body: 'Coordinates up to 300 specialized sub-agents across 4,000 steps in a single run — 12+ hours of unattended, tool-calling execution.',
    stat: '300 agents · 4,000 steps',
  },
  {
    icon: Sparkles,
    title: 'Awwwards-Level Building',
    body: 'Turns a single brief into full-stack apps, smart contracts, UI mockups and client decks — state-of-the-art coding in Rust, Go, Python & Solidity.',
    stat: 'Brief → shipped product',
  },
]

export function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Why It Wins
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Three advantages that reset Elchai’s cost, speed and output.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {benefits.map((b, i) => {
          const Icon = b.icon
          return (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 p-8 transition-all hover:border-primary/50 hover:box-glow">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/40">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
                <p className="mt-6 font-mono text-sm text-primary">{b.stat}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
