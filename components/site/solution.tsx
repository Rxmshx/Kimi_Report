'use client'

import { Reveal } from './reveal'
import { BenchmarkChart } from './benchmark-chart'

const specs = [
  { k: 'Architecture', v: 'Mixture-of-Experts' },
  { k: 'Parameters', v: '1T total · 32B active' },
  { k: 'Experts', v: '384 (8 routed / token)' },
  { k: 'Context', v: '256K tokens' },
  { k: 'Vision', v: 'MoonViT encoder' },
  { k: 'Inference', v: 'vLLM · SGLang · KTransformers' },
]

export function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden py-28">
      <div
        className="absolute right-0 top-1/4 h-[36rem] w-[36rem] rounded-full bg-primary/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            The Solution
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Enter Kimi K2.6 — an open-source, trillion-parameter agent engine.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            A Modified-MIT licensed Mixture-of-Experts model with native
            multimodal input and industry-leading agentic execution. Self-host
            it on Elchai’s own UAE infrastructure for total privacy — or run it
            via API at a fraction of the cost.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="grid h-full grid-cols-2 gap-3">
              {specs.map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl border border-border bg-card/40 p-5"
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {s.k}
                  </p>
                  <p className="mt-2 font-medium text-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <BenchmarkChart />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
