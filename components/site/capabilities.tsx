'use client'

import {
  Code2,
  Network,
  Clock,
  Palette,
  FileStack,
  Eye,
} from 'lucide-react'
import { Reveal } from './reveal'

const capabilities = [
  {
    icon: Code2,
    title: 'State-of-the-Art Coding',
    body: 'Full-stack development from front-end to back-end. Generates production-ready code in Rust, Go, Python and more.',
  },
  {
    icon: Network,
    title: 'Agent Swarm Orchestration',
    body: 'Coordinates up to 300 specialized sub-agents executing 4,000 coordinated steps in a single run — up from 100 agents / 1,500 steps in K2.5.',
  },
  {
    icon: Clock,
    title: 'Long-Horizon Autonomy',
    body: 'Continuous background execution for 12+ hours with thousands of tool calls, enabling complex unattended workflows.',
  },
  {
    icon: Palette,
    title: 'Visual Design & UI Generation',
    body: 'Turns simple prompts into Awwwards-level interfaces with interactive elements, scroll animations and high-UX design.',
  },
  {
    icon: FileStack,
    title: 'Document-to-Skills Pipeline',
    body: 'Converts high-quality documents into reusable, evolvable skills that improve output consistency across future tasks.',
  },
  {
    icon: Eye,
    title: 'Multimodal Understanding',
    body: 'Processes text and visual input for cross-modal reasoning and code generation from UI mockups.',
  },
]

const specs = [
  { k: 'Architecture', v: 'Mixture-of-Experts (MoE)' },
  { k: 'Total Parameters', v: '1 Trillion' },
  { k: 'Active Parameters', v: '32 Billion per token' },
  { k: 'Experts', v: '384 total · 8 per token' },
  { k: 'Context Window', v: '256,000 tokens (262,144)' },
  { k: 'Attention', v: 'Multi-Head Latent (MLA)' },
  { k: 'Vision Encoder', v: '400M-param MoonViT' },
  { k: 'License', v: 'Modified MIT (open source)' },
  { k: 'Inference', v: 'vLLM · SGLang · KTransformers' },
  { k: 'Released', v: 'April 20, 2026 · Moonshot AI' },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-7xl px-5 py-28 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Core Capabilities
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Six superpowers, one open-source model.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 0.08}>
            <div className="group h-full rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <c.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-balance">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* full spec table */}
      <div className="mt-10">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-card/40">
            <div className="border-b border-border px-6 py-4">
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                Technical Specifications
              </h3>
            </div>
            <dl className="grid sm:grid-cols-2">
              {specs.map((s, i) => (
                <div
                  key={s.k}
                  className={`flex items-center justify-between gap-4 px-6 py-4 ${
                    i % 2 === 0 ? 'sm:border-r border-border' : ''
                  } border-b border-border/60`}
                >
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {s.k}
                  </dt>
                  <dd className="text-right text-sm font-medium text-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
