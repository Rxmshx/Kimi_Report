'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Company', href: '#company' },
  { label: 'Solution', href: '#solution' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Risks', href: '#risks' },
  { label: 'Plan', href: '#plan' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/70 backdrop-blur-xl py-3'
          : 'py-5',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/40">
            <span className="h-2.5 w-2.5 rounded-full bg-primary box-glow" />
          </span>
          <span className="font-mono text-sm tracking-tight text-foreground">
            Elchai<span className="text-muted-foreground"> × </span>
            <span className="text-primary">Kimi K2.6</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="rounded-full border border-primary/50 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Start Test
        </a>
      </nav>
    </header>
  )
}
