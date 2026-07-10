'use client'

import { Reveal } from './reveal'
import { BenchmarkTable } from './benchmark-table'

const kimi = [
  { k: 'Input', v: '$0.75', sub: 'per 1M tokens' },
  { k: 'Output', v: '$3.50', sub: 'per 1M tokens' },
  { k: 'Cached Input', v: '$0.15', sub: 'per 1M tokens' },
]

const claude = [
  { k: 'Input', v: '$3.00', sub: 'per 1M tokens' },
  { k: 'Output', v: '$15.00', sub: 'per 1M tokens' },
]

export function Pricing() {
  return (
    <section id="benchmarks" className="relative overflow-hidden py-28">
      <div
        className="absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Benchmarks & Pricing
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Frontier performance at ~5x lower cost.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            DeepInfra API pricing puts Kimi K2.6 roughly 5x cheaper on input and
            4x cheaper on output than Claude Sonnet 4.6 — and self-hosting the
            open weights drops marginal cost to zero.
          </p>
        </Reveal>

        <div className="mt-14">
          <BenchmarkTable />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-primary/40 bg-primary/5 p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">
                  Kimi K2.6 — DeepInfra
                </h3>
                <span className="rounded-full bg-primary/15 px-3 py-1 font-mono text-xs text-primary">
                  best value
                </span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {kimi.map((p) => (
                  <div key={p.k}>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {p.k}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-primary">
                      {p.v}
                    </p>
                    <p className="font-mono text-[11px] text-muted-foreground">
                      {p.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-card/40 p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">
                  Claude Sonnet 4.6
                </h3>
                <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
                  baseline
                </span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {claude.map((p) => (
                  <div key={p.k}>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {p.k}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-foreground">
                      {p.v}
                    </p>
                    <p className="font-mono text-[11px] text-muted-foreground">
                      {p.sub}
                    </p>
                  </div>
                ))}
                <div className="flex flex-col justify-end">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Self-host
                  </p>
                  <p className="mt-2 text-2xl font-bold text-foreground">FREE</p>
                  <p className="font-mono text-[11px] text-muted-foreground">
                    open weights
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
