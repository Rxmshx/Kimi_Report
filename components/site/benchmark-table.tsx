'use client'

import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const cols = ['Kimi K2.6', 'GPT-5.4', 'Claude Opus 4.6', 'Gemini 3.1 Pro']

const rows: { name: string; vals: (number | null)[] }[] = [
  { name: 'HLE-Full (w/ tools)', vals: [54.0, 52.1, 53.0, 51.4] },
  { name: 'DeepSearchQA', vals: [83.0, 63.7, 80.6, 60.2] },
  { name: 'SWE-Bench Pro', vals: [58.6, 57.7, 53.4, 54.2] },
  { name: 'SWE-Bench Verified', vals: [80.2, null, 80.8, null] },
  { name: 'AIME 2026', vals: [96.4, 99.2, 96.7, 98.3] },
]

function isLeader(vals: (number | null)[], idx: number) {
  const max = Math.max(...(vals.filter((v) => v !== null) as number[]))
  return vals[idx] === max
}

export function BenchmarkTable() {
  return (
    <Reveal>
      <div className="overflow-x-auto rounded-2xl border border-border bg-card/40">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-5 py-4 text-left font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Benchmark
              </th>
              {cols.map((c) => (
                <th
                  key={c}
                  className={cn(
                    'px-5 py-4 text-right font-mono text-xs uppercase tracking-widest',
                    c === 'Kimi K2.6' ? 'text-primary' : 'text-muted-foreground',
                  )}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.name}
                className="border-b border-border/60 last:border-0"
              >
                <td className="px-5 py-4 font-medium text-foreground">
                  {r.name}
                </td>
                {r.vals.map((v, i) => (
                  <td
                    key={i}
                    className={cn(
                      'px-5 py-4 text-right font-mono tabular-nums',
                      v === null
                        ? 'text-muted-foreground/50'
                        : isLeader(r.vals, i)
                          ? 'font-semibold text-primary'
                          : 'text-foreground',
                    )}
                  >
                    {v === null ? '—' : v.toFixed(1)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
        Kimi K2.6 leads on agentic and coding benchmarks (DeepSearchQA,
        SWE-Bench Pro) while remaining competitive on pure reasoning. Highlighted
        values mark the category leader.
      </p>
    </Reveal>
  )
}
