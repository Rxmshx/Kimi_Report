'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Reveal } from './reveal'
import { Scorecard } from './scorecard'
import { cn } from '@/lib/utils'

const phases = [
  {
    phase: 'Phase 1',
    when: 'Weeks 1–2',
    title: 'Internal Prototyping Only',
    body: 'Benchmark Kimi K2.6 on real Elchai tasks — smart contracts, React components and documentation. No client data leaves the building.',
  },
  {
    phase: 'Phase 2',
    when: 'Weeks 3–6',
    title: 'Controlled Pilot',
    body: 'Deploy on 2–3 non-sensitive client projects with human review gates on every output.',
  },
  {
    phase: 'Phase 3',
    when: 'Month 3+',
    title: 'Scale or Discontinue',
    body: 'Decide based on measured results. Continue if output exceeds 80% of Claude quality and delivers 20%+ efficiency gains.',
  },
]

const risks = [
  {
    q: 'Privacy',
    a: 'Self-host on Elchai’s own UAE servers so no client data is sent to external clouds.',
  },
  {
    q: 'Security',
    a: 'Local deployment for all client work keeps proprietary code and smart contracts in-house.',
  },
  {
    q: 'Accuracy',
    a: 'Mandatory human review plus automated test suites gate every generated artifact.',
  },
  {
    q: 'Client Perception',
    a: 'Framed as open-source innovation with data guaranteed to stay in the UAE.',
  },
]

function RiskItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className="w-full rounded-xl border border-border bg-card/40 p-5 text-left transition-colors hover:border-primary/40"
    >
      <div className="flex items-center justify-between">
        <span className="font-medium">{q}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-primary transition-transform',
            open && 'rotate-180',
          )}
        />
      </div>
      <motion.p
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden text-sm leading-relaxed text-muted-foreground"
      >
        <span className="block pt-3">{a}</span>
      </motion.p>
    </button>
  )
}

export function PocPlan() {
  return (
    <section id="plan" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          The Safe Rollout
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          A phased proof-of-concept with zero financial risk.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        {/* timeline */}
        <Reveal>
          <ol className="relative border-l border-border pl-8">
            {phases.map((p, i) => (
              <motion.li
                key={p.phase}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="mb-10 last:mb-0"
              >
                <span className="absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary box-glow" />
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">
                    {p.phase}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {p.when}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </Reveal>

        <div className="flex flex-col gap-4">
          <Reveal>
            <div className="grid gap-3">
              {risks.map((r) => (
                <RiskItem key={r.q} {...r} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-10">
        <Reveal>
          <Scorecard />
        </Reveal>
      </div>
    </section>
  )
}
