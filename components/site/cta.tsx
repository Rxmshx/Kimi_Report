'use client'

import { AgentSwarm } from './agent-swarm'
import { Reveal } from './reveal'

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-32">
      <AgentSwarm className="absolute inset-0 h-full w-full opacity-60" />
      <div
        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            Give Elchai a first-mover edge in{' '}
            <span className="text-primary text-glow">Dubai’s AI market.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Test it internally this week — open-source means zero financial
            risk.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#top"
              className="rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-transform hover:scale-[1.03] box-glow"
            >
              Start the 2-Week Internal Test
            </a>
            <a
              href="#solution"
              className="rounded-full border border-border bg-card/40 px-8 py-4 font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
            >
              Download the Full Assessment
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
