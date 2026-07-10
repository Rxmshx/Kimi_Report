'use client'

import { motion } from 'framer-motion'
import { AgentSwarm } from './agent-swarm'
import { CountUp } from './count-up'

const stats = [
  { value: 1, suffix: 'T', label: 'Parameters' },
  { value: 256, suffix: 'K', label: 'Context Window' },
  { value: 12, suffix: '+ hr', label: 'Autonomous Runs' },
  { value: 8, suffix: '/10', label: 'Fit Score' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pt-28 pb-16 sm:px-8"
    >
      {/* backgrounds */}
      <div className="absolute inset-0 grid-mesh radial-fade opacity-70" aria-hidden="true" />
      <AgentSwarm className="absolute inset-0 h-full w-full" />
      <div
        className="absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Proof of Concept · Moonshot AI × Elchai Group
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          300 AI Agents.
          <br />
          One Prompt.{' '}
          <span className="text-primary text-glow">Zero Limits.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          Kimi K2.6 gives Elchai Group an autonomous swarm of AI engineers,
          designers, and researchers — building production-ready code, decks,
          and Web3 platforms at 5× lower cost.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#plan"
            className="group relative rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.03] box-glow"
          >
            Launch the Proof-of-Concept
          </a>
          <a
            href="#solution"
            className="rounded-full border border-border bg-card/40 px-7 py-3.5 font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-primary"
          >
            See the Benchmarks
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card/40 px-4 py-5 backdrop-blur"
            >
              <dd className="font-mono text-3xl font-semibold text-primary sm:text-4xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Scroll to explore
      </div>
    </section>
  )
}
