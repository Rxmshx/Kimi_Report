'use client'

import { FileCode2, Presentation, LayoutTemplate } from 'lucide-react'
import { Reveal } from './reveal'

const qa = [
  ['What is it?', 'Open-source 1T-parameter MoE AI model by Moonshot AI'],
  ['Why use it?', 'Best-in-class coding + agent swarm (300 agents, 4,000 steps)'],
  ['How much?', '$0.75 / 1M input tokens (API) — or FREE (self-hosted)'],
  ['Where to get it?', 'kimi.com, Hugging Face, GitHub'],
  ['Best for Elchai?', 'Code generation, automation, client deliverables, research'],
  ['Main risk?', 'Data privacy (Chinese company) — mitigate with self-hosting'],
  ['Verdict?', 'Test internally first, then pilot on non-sensitive projects'],
]

const quickWins = [
  {
    icon: FileCode2,
    title: 'Smart Contract Development',
    body: 'Use Kimi Code (terminal coding agent) to accelerate Solidity development with 5x cost savings vs Claude.',
  },
  {
    icon: Presentation,
    title: 'Client Presentation Generation',
    body: 'Kimi Slides for rapid, professional proposal decks generated from a prompt.',
  },
  {
    icon: LayoutTemplate,
    title: 'UI Prototyping',
    body: 'Generate high-fidelity front-end interfaces from client briefs in hours, not days.',
  },
]

export function QuickReference() {
  return (
    <section className="relative overflow-hidden py-28">
      <div
        className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Quick Reference
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Kimi K2.6 at a glance.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card/40">
              {qa.map(([q, a], i) => (
                <div
                  key={q}
                  className={`grid gap-1 px-6 py-4 sm:grid-cols-[200px_1fr] sm:gap-6 ${
                    i !== qa.length - 1 ? 'border-b border-border/60' : ''
                  }`}
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    {q}
                  </p>
                  <p className="text-sm text-foreground">{a}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                Top 3 Quick Wins
              </h3>
              {quickWins.map((w) => (
                <div
                  key={w.title}
                  className="rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                      <w.icon className="h-4 w-4 text-primary" />
                    </span>
                    <h4 className="font-semibold">{w.title}</h4>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {w.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
