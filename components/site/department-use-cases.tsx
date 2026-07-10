'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Package, TrendingUp, Wallet } from 'lucide-react'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const departments = [
  {
    id: 'engineering',
    label: 'Engineering / IT',
    icon: Cpu,
    rows: [
      ['Rapid Prototyping', 'Generate functional web/apps from client briefs in hours instead of days'],
      ['Smart Contract Dev', 'Code, audit and optimize Solidity/Rust contracts with autonomous multi-step analysis'],
      ['Code Review & QA', 'Automated review across multiple files with deep reasoning traces'],
      ['Full-Stack Projects', 'Build complete websites (front-end + back-end + database) from single prompts'],
      ['CI/CD Automation', 'Agent swarm manages deployment workflows autonomously'],
    ],
  },
  {
    id: 'product',
    label: 'Product',
    icon: Package,
    rows: [
      ['UI/UX Generation', 'Create Awwwards-level interfaces with interactive elements and animations'],
      ['Presentation Dev', 'Kimi Slides generates polished, professional client decks from prompts'],
      ['Documentation', 'Auto-generate docs, user guides and technical specifications'],
      ['Market Strategy', 'Agent swarm produces multi-phase strategies across PDF, PPT and Excel'],
      ['Competitive Analysis', 'Deep research agents analyze competitor landscapes autonomously'],
    ],
  },
  {
    id: 'strategy',
    label: 'Strategy / BD',
    icon: TrendingUp,
    rows: [
      ['Client Proposals', 'Create detailed, data-rich proposals tailored to specific industries'],
      ['Industry Research', 'Autonomous deep research on health, fintech, real estate, gaming trends'],
      ['Due Diligence', 'Multi-agent analysis of blockchain projects, tokenomics and market viability'],
      ['Content Marketing', 'Generate blog posts, case studies and thought-leadership content'],
    ],
  },
  {
    id: 'operations',
    label: 'Operations / Finance',
    icon: Wallet,
    rows: [
      ['Cost Estimation', 'Analyze requirements and generate accurate project scope/timeline estimates'],
      ['Internal Automation', 'Automate reporting, data entry and email drafting'],
      ['Financial Modeling', 'Build and analyze spreadsheets for client tokenomics and ROI projections'],
    ],
  },
]

const projectFit = [
  { tag: 'Health', name: 'SmartFit', d: 'Enhanced personalization algorithms, meal-plan generation, predictive analytics' },
  { tag: 'Fintech', name: 'Crypto Wallet', d: 'Smart contract auditing, security analysis, multi-chain integration code' },
  { tag: 'Real Estate', name: 'Metaverse', d: '3D environment code generation, interactive UI components' },
  { tag: 'Media', name: 'CRM', d: 'Automated CRM customization, workflow automation, reporting dashboards' },
]

export function DepartmentUseCases() {
  const [active, setActive] = useState(departments[0].id)
  const current = departments.find((d) => d.id === active)!

  return (
    <section id="use-cases" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Use Case for Elchai
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Mapped to every department in the business.
        </h2>
      </Reveal>

      {/* tabs */}
      <Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          {departments.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className={cn(
                'flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all',
                active === d.id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:text-foreground',
              )}
            >
              <d.icon className="h-4 w-4" />
              {d.label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* table */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-8 overflow-hidden rounded-2xl border border-border bg-card/40"
      >
        {current.rows.map(([app, help], i) => (
          <div
            key={app}
            className={cn(
              'grid gap-2 px-6 py-5 sm:grid-cols-[240px_1fr] sm:gap-6',
              i !== current.rows.length - 1 && 'border-b border-border/60',
            )}
          >
            <p className="font-medium text-foreground">{app}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {help}
            </p>
          </div>
        ))}
      </motion.div>

      {/* project fit */}
      <Reveal>
        <h3 className="mt-16 font-mono text-sm uppercase tracking-widest text-muted-foreground">
          Immediate Fit — Elchai Case Studies
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projectFit.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/40">
              <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent">
                {p.tag}
              </span>
              <h4 className="mt-4 text-lg font-semibold">{p.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.d}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
