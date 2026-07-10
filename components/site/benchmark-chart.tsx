'use client'

import { motion } from 'framer-motion'

const benchmarks = [
  { label: 'HLE — Full', value: 54.0 },
  { label: 'DeepSearchQA', value: 83.0 },
  { label: 'SWE-Bench Pro', value: 58.6 },
  { label: 'SWE-Bench Verified', value: 80.2 },
  { label: 'AIME 2026', value: 96.4 },
]

export function BenchmarkChart() {
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          Kimi K2.6 · Agentic Benchmarks
        </h3>
        <span className="font-mono text-xs text-primary">score %</span>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {benchmarks.map((b, i) => (
          <div key={b.label}>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-sm text-foreground">{b.label}</span>
              <span className="font-mono text-sm font-semibold text-primary">
                {b.value.toFixed(1)}
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                initial={{ width: 0 }}
                whileInView={{ width: `${b.value}%` }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-7 border-t border-border pt-5 font-mono text-xs leading-relaxed text-muted-foreground">
        Leading open-source agentic performance — competitive with GPT-5.4,
        Claude Opus 4.6 and Gemini 3.1 Pro at a fraction of the cost.
      </p>
    </div>
  )
}
