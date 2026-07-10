'use client'

import { motion } from 'framer-motion'
import { CountUp } from './count-up'

const axes = [
  { label: 'Capability Fit', score: 9 },
  { label: 'Cost', score: 9 },
  { label: 'Privacy', score: 6 },
  { label: 'Integration', score: 8 },
  { label: 'Risk', score: 7 },
  { label: 'Competitive Edge', score: 9 },
]

const SIZE = 260
const CENTER = SIZE / 2
const RADIUS = 96
const MAX = 10

function point(i: number, value: number) {
  const angle = (Math.PI * 2 * i) / axes.length - Math.PI / 2
  const r = (value / MAX) * RADIUS
  return [CENTER + r * Math.cos(angle), CENTER + r * Math.sin(angle)]
}

export function Scorecard() {
  const polygon = axes.map((a, i) => point(i, a.score).join(',')).join(' ')
  const rings = [0.25, 0.5, 0.75, 1]

  return (
    <div className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          Assessment Scorecard
        </h3>
        <span className="font-mono text-sm text-primary">
          <CountUp to={8} />/10 overall
        </span>
      </div>

      <div className="mt-6 flex flex-col items-center gap-8 lg:flex-row">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="h-56 w-56 shrink-0"
          role="img"
          aria-label="Radar chart of assessment scores"
        >
          {rings.map((r) => (
            <polygon
              key={r}
              points={axes
                .map((_, i) => point(i, r * MAX).join(','))
                .join(' ')}
              fill="none"
              stroke="oklch(0.3 0.02 250 / 50%)"
              strokeWidth="1"
            />
          ))}
          {axes.map((_, i) => {
            const [x, y] = point(i, MAX)
            return (
              <line
                key={i}
                x1={CENTER}
                y1={CENTER}
                x2={x}
                y2={y}
                stroke="oklch(0.3 0.02 250 / 50%)"
                strokeWidth="1"
              />
            )
          })}
          <motion.polygon
            points={polygon}
            fill="oklch(0.82 0.15 185 / 22%)"
            stroke="oklch(0.82 0.15 185)"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'center' }}
          />
          {axes.map((a, i) => {
            const [x, y] = point(i, a.score)
            return <circle key={i} cx={x} cy={y} r="3" fill="oklch(0.82 0.15 185)" />
          })}
        </svg>

        <ul className="grid w-full grid-cols-2 gap-3">
          {axes.map((a) => (
            <li
              key={a.label}
              className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-3 py-2.5"
            >
              <span className="text-sm text-muted-foreground">{a.label}</span>
              <span className="font-mono text-sm font-semibold text-primary">
                {a.score}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
