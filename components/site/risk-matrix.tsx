'use client'

import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type Sev = 'High' | 'Medium' | 'Low-Medium' | 'Low'

const groups: {
  title: string
  items: { risk: string; sev: Sev; detail: string }[]
  mitigation: string
}[] = [
  {
    title: '1 · Privacy & Data Security',
    mitigation:
      'Self-host on Elchai’s UAE infrastructure for sensitive projects; restrict cloud API to non-sensitive prototyping only.',
    items: [
      { risk: 'Data Residency', sev: 'High', detail: 'Moonshot AI is a Chinese company; API data may fall under CSL, DSL & PIPL.' },
      { risk: 'Client Confidentiality', sev: 'High', detail: 'Cloud API risks exposing proprietary code, smart contracts and business logic.' },
      { risk: 'GDPR / PDPL Compliance', sev: 'High', detail: 'Dubai PDPL and EU client GDPR may conflict with processing in China.' },
      { risk: 'Self-Hosting Alternative', sev: 'Medium', detail: 'Open weights enable local deployment but require significant infrastructure.' },
    ],
  },
  {
    title: '2 · Accuracy & Hallucination',
    mitigation:
      'Mandatory human code review for all generated code; automated testing pipelines; use thinking mode for complex logic.',
    items: [
      { risk: 'Code Hallucinations', sev: 'Medium', detail: 'May generate plausible but incorrect code for niche blockchain protocols.' },
      { risk: 'Reasoning Gaps', sev: 'Medium', detail: 'Trails GPT-5.4 on pure math (AIME 96.4 vs 99.2) — may affect financial models.' },
      { risk: 'Benchmark vs Reality', sev: 'Medium', detail: 'Benchmark scores don’t always translate to real-world complex projects.' },
      { risk: '12-Hour Execution Drift', sev: 'Low-Medium', detail: 'Long autonomous runs may accumulate errors or drift from original intent.' },
    ],
  },
  {
    title: '3 · Integration & Technical',
    mitigation:
      'Assign an engineer for a 1–2 week integration sprint; chunk large codebases; monitor version pinning.',
    items: [
      { risk: 'Context vs Competitors', sev: 'Medium', detail: '256K context is smaller than Qwen 3.6 Plus (1M) and Gemini (1M+).' },
      { risk: 'No API Image Input', sev: 'Medium', detail: 'Vision encoder works internally but image input is not exposed via API.' },
      { risk: 'Chinese-First Docs', sev: 'Low-Medium', detail: 'English documentation improving but lags OpenAI / Anthropic.' },
      { risk: 'Version Pinning', sev: 'Low', detail: 'Unified model name makes reproducible CI/CD workflows difficult.' },
    ],
  },
  {
    title: '4 · Cost & Infrastructure',
    mitigation:
      'Use cheap API for non-sensitive work; reserve local deployment for sensitive projects; budget engineering time.',
    items: [
      { risk: 'Local Deployment Cost', sev: 'High', detail: 'Self-hosting needs GPU servers (~$1,500–$3,000/month for equivalent performance).' },
      { risk: 'API Rate Limits', sev: 'Medium', detail: '300–1,200 calls per 5-hour window; max concurrency of 30 may bottleneck.' },
      { risk: 'Hidden Operational Costs', sev: 'Medium', detail: 'Integration, prompt engineering, monitoring and maintenance time.' },
      { risk: 'Vendor Lock-in', sev: 'Low', detail: 'Open weights mitigate lock-in; API pricing very competitive.' },
    ],
  },
  {
    title: '5 · Strategic & Reputational',
    mitigation:
      'Frame as open-source technology; emphasize data stays in UAE; monitor regulatory shifts.',
    items: [
      { risk: 'Client Perception', sev: 'Medium', detail: 'Some enterprise clients may have concerns about Chinese-origin AI models.' },
      { risk: 'Regulatory Changes', sev: 'Medium', detail: 'Potential future export controls or usage restrictions.' },
      { risk: 'Production Reliability', sev: 'Medium', detail: 'Open-weight ecosystem gaps vs established providers (versioning, reproducibility).' },
      { risk: 'Training Data Concerns', sev: 'Low', detail: 'Feb 2026 reports of data scraping raise ethical questions.' },
    ],
  },
]

const sevStyles: Record<Sev, string> = {
  High: 'bg-destructive/15 text-destructive ring-destructive/30',
  Medium: 'bg-primary/15 text-primary ring-primary/30',
  'Low-Medium': 'bg-accent/15 text-accent ring-accent/30',
  Low: 'bg-secondary text-muted-foreground ring-border',
}

export function RiskMatrix() {
  return (
    <section id="risks" className="relative overflow-hidden py-28">
      <div
        className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-destructive/5 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Risks & Limitations
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            A clear-eyed risk assessment — with mitigations for each.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={(gi % 2) * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6">
                <h3 className="font-semibold text-foreground">{g.title}</h3>
                <ul className="mt-5 flex flex-col gap-4">
                  {g.items.map((it) => (
                    <li key={it.risk} className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-foreground">
                          {it.risk}
                        </span>
                        <span
                          className={cn(
                            'rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ring-1',
                            sevStyles[it.sev],
                          )}
                        >
                          {it.sev}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {it.detail}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                    Mitigation
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {g.mitigation}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
