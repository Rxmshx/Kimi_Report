'use client'

import { Globe, Search, FileText, Calculator } from 'lucide-react'
import { Reveal } from './reveal'

const tools = [
  {
    icon: Globe,
    tool: 'Web Browser',
    purpose:
      'Elchai website analysis (elchaigroup.com) — services, case studies, clientele, 4-pillar structure — plus Instagram reference-video page.',
  },
  {
    icon: Search,
    tool: 'Web Search',
    purpose:
      'Kimi K2.6 specs, benchmarks, pricing & architecture; Qwen 3.6, MiniMax and GLM comparison data.',
  },
  {
    icon: FileText,
    tool: 'Document Editor',
    purpose: 'Report compilation and formatting.',
  },
  {
    icon: Calculator,
    tool: 'Calculator',
    purpose: 'Cost comparison calculations (API + infrastructure scenarios).',
  },
]

const queries = [
  'Kimi K2.6 open source AI model 2026 features',
  'Kimi K2.6 benchmark performance SWE-Bench',
  'Kimi K2.6 API pricing DeepInfra',
  'Qwen 3.6 Plus 35B open source model 2026',
  'MiniMax GLM open source AI models China 2026 comparison',
]

const sources = [
  'kimi.com (official)',
  'platform.kimi.ai/docs',
  'GitHub / MoonshotAI',
  'deepinfra.com (hosting)',
  'buildfastwithai.com',
  'GitHub / QwenLM',
  'Wikipedia / MiniMax',
  'mindstudio.ai',
]

export function Methodology() {
  return (
    <section id="methodology" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Prompts & Tools Used
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          How this assessment was built.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {tools.map((t, i) => (
          <Reveal key={t.tool} delay={(i % 2) * 0.08}>
            <div className="flex h-full gap-4 rounded-2xl border border-border bg-card/40 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <t.icon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <h3 className="font-semibold">{t.tool}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t.purpose}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-card/40 p-7">
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Search Queries
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {queries.map((q) => (
                <li
                  key={q}
                  className="rounded-lg border border-border/60 bg-secondary px-4 py-2.5 font-mono text-xs text-foreground"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-border bg-card/40 p-7">
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              Key Sources
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {sources.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary px-4 py-2 font-mono text-xs text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 border-t border-border pt-5">
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Analysis Method
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Mapped Elchai’s service offerings against model capabilities,
                compared benchmarks across coding / agent / reasoning tasks,
                calculated cost differentials, assessed privacy risk against
                UAE regulation, and scored on six dimensions to reach the
                recommendation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
