'use client'

import { CheckCircle2, XCircle } from 'lucide-react'
import { Reveal } from './reveal'

const actions = [
  {
    when: 'This Week',
    tag: 'Immediate',
    items: [
      'Sign up for Kimi API account and Kimi Code subscription ($20–40/month)',
      'Deploy open weights locally on a test server using vLLM or SGLang',
      'Run internal benchmarks on typical Elchai tasks (smart contracts, React components, docs)',
    ],
  },
  {
    when: 'Next 2 Weeks',
    tag: 'Short-Term',
    items: [
      'Create internal guidelines for what can/cannot be processed via cloud API',
      'Develop prompt templates for Elchai’s common use cases',
      'Compare output quality head-to-head with Claude and GPT-4 on identical tasks',
      'Assess integration effort with existing development workflows',
    ],
  },
  {
    when: '1–3 Months',
    tag: 'Medium-Term',
    items: [
      'If benchmarks are positive: pilot on 2–3 non-sensitive client projects',
      'Build an internal “Document-to-Skills” library for reusable workflows',
      'Evaluate self-hosting infrastructure costs vs API usage for production',
      'Develop a client-facing narrative about AI-enhanced delivery',
    ],
  },
]

export function Recommendation() {
  return (
    <section id="recommendation" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Final Recommendation
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Proceed with limited internal testing.
        </h2>
        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          A structured action plan takes Elchai from first API call to a
          production decision — with explicit go/no-go gates at every stage.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {actions.map((a, i) => (
          <Reveal key={a.when} delay={i * 0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  {a.tag}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {a.when}
                </span>
              </div>
              <ul className="mt-5 flex flex-col gap-3">
                {a.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* decision gates */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-primary/40 bg-primary/5 p-7">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">Continue if</h3>
            </div>
            <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
              <li>Output quality exceeds 80% of current tools (Claude / GPT)</li>
              <li>Efficiency gains greater than 20%</li>
              <li>No client complaints during pilot</li>
            </ul>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              Scale/Discontinue gate at Month 3.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-destructive/40 bg-destructive/5 p-7">
            <div className="flex items-center gap-3">
              <XCircle className="h-5 w-5 text-destructive" />
              <h3 className="font-semibold text-foreground">Discontinue if</h3>
            </div>
            <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
              <li>Internal benchmarks show &lt;80% quality of current tools</li>
              <li>Integration takes longer than 2 weeks</li>
              <li>Output quality is inconsistent</li>
            </ul>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              Go/No-Go gate at Week 2.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
