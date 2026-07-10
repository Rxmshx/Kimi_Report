'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  Boxes,
  Code2,
  ShieldCheck,
  LayoutTemplate,
  Rocket,
} from 'lucide-react'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const pipeline = [
  { icon: FileText, label: 'Client Brief' },
  { icon: Boxes, label: 'Agent Swarm Dispatch' },
  { icon: Code2, label: 'Code + Smart Contract Gen' },
  { icon: ShieldCheck, label: 'Auto Review & Testing' },
  { icon: LayoutTemplate, label: 'UI / Deck Generation' },
  { icon: Rocket, label: 'Deploy' },
]

const cases = [
  {
    id: 'smartfit',
    tab: 'SmartFit',
    sector: 'Health',
    text: 'Personalized fitness plans and adaptive coaching logic generated and tuned by the agent swarm against real user data.',
  },
  {
    id: 'wallet',
    tab: 'Crypto Wallet',
    sector: 'Fintech',
    text: 'Solidity smart-contract generation with automated auditing and vulnerability review before a human ever signs off.',
  },
  {
    id: 'metaverse',
    tab: 'Metaverse',
    sector: 'Real Estate',
    text: '3D environment code and interactive property walkthroughs scaffolded end-to-end for immersive client showcases.',
  },
  {
    id: 'crm',
    tab: 'CRM',
    sector: 'Media',
    text: 'Workflow automation and data pipelines wired together, turning a proposal into a running internal tool in hours.',
  },
]

const departments = [
  { k: 'Engineering', v: '50–70% faster prototyping' },
  { k: 'Product', v: 'Hours saved per proposal' },
  { k: 'Strategy / BD', v: 'Richer data-driven pitches' },
]

export function WorkflowDemo() {
  const [active, setActive] = useState(cases[0].id)
  const activeCase = cases.find((c) => c.id === active)!

  return (
    <section id="demo" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 grid-mesh radial-fade opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Live Workflow
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Watch a client project build itself.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            One brief enters the swarm. Six automated stages later, a tested,
            deployable product comes out the other side.
          </p>
        </Reveal>

        {/* pipeline */}
        <Reveal>
          <div className="mt-14 flex flex-col gap-4 lg:flex-row lg:items-stretch">
            {pipeline.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.label} className="flex flex-1 items-center gap-4 lg:flex-col">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.14, duration: 0.5 }}
                    className="relative flex w-full items-center gap-4 rounded-xl border border-border bg-card/50 p-4 lg:flex-col lg:text-center"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/40">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium leading-tight">
                      {step.label}
                    </span>
                    <span className="absolute -left-1 top-1/2 hidden font-mono text-[10px] text-muted-foreground lg:block lg:left-2 lg:top-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                  {i < pipeline.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.14 + 0.1 }}
                      className="mx-auto h-6 w-px bg-gradient-to-b from-primary/60 to-transparent lg:h-px lg:w-6 lg:bg-gradient-to-r"
                      aria-hidden="true"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* case studies */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {cases.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={cn(
                    'rounded-xl border px-5 py-4 text-left transition-all',
                    active === c.id
                      ? 'border-primary/60 bg-primary/10 text-foreground'
                      : 'border-border bg-card/40 text-muted-foreground hover:text-foreground',
                  )}
                >
                  <span className="block font-medium">{c.tab}</span>
                  <span className="font-mono text-xs uppercase tracking-widest opacity-70">
                    {c.sector}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card/50 p-8"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-primary">
                  {activeCase.sector} · Case Study
                </span>
                <h3 className="mt-3 text-2xl font-semibold">{activeCase.tab}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {activeCase.text}
                </p>
              </div>
              <div className="mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-3">
                {departments.map((d) => (
                  <div key={d.k}>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {d.k}
                    </p>
                    <p className="mt-1 text-sm font-medium text-primary">{d.v}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
