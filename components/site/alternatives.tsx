'use client'

import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const headers = [
  'Model',
  'Open Source',
  'Context',
  'Cost',
  'Coding',
  'Agent Swarm',
  'Recommendation',
]

const rows = [
  {
    model: 'Kimi K2.6',
    cells: ['Yes (MIT)', '256K', 'Very Low', 'Excellent', '300 agents / 4K steps', 'Primary Test'],
    primary: true,
  },
  {
    model: 'Qwen 3.6-35B',
    cells: ['Yes', '1M', 'Low', 'Very Good', 'Limited', 'Secondary test'],
  },
  {
    model: 'Claude Opus 4.6',
    cells: ['No', '200K', 'Very High', 'Excellent', 'Basic', 'Current baseline'],
  },
  {
    model: 'GPT-5.4',
    cells: ['No', '128K', 'High', 'Excellent', 'Basic', 'Current baseline'],
  },
  {
    model: 'GLM-5.1',
    cells: ['Yes', '128K', 'Low', 'Good', 'Limited', 'Monitor'],
  },
  {
    model: 'MiniMax M3',
    cells: ['Partial', '1M', 'Medium', 'Good', 'Moderate', 'Evaluate later'],
  },
]

export function Alternatives() {
  return (
    <section id="alternatives" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Comparison with Alternatives
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Kimi K2.6 leads the open-source field.
        </h2>
      </Reveal>

      <Reveal>
        <div className="mt-14 overflow-x-auto rounded-2xl border border-border bg-card/40">
          <table className="w-full min-w-[820px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                {headers.map((h, i) => (
                  <th
                    key={h}
                    className={cn(
                      'px-5 py-4 font-mono text-xs uppercase tracking-widest text-muted-foreground',
                      i === 0 ? 'text-left' : 'text-left',
                    )}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.model}
                  className={cn(
                    'border-b border-border/60 last:border-0',
                    r.primary && 'bg-primary/5',
                  )}
                >
                  <td
                    className={cn(
                      'px-5 py-4 font-semibold',
                      r.primary ? 'text-primary' : 'text-foreground',
                    )}
                  >
                    {r.model}
                  </td>
                  {r.cells.map((c, i) => (
                    <td
                      key={i}
                      className="px-5 py-4 text-muted-foreground"
                    >
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  )
}
