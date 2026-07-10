export function SiteFooter() {
  const pillars = ['Studio', 'Apps', 'Intelligence', 'Blockchain']
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/40">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-sm">
                Elchai <span className="text-muted-foreground">×</span>{' '}
                <span className="text-primary">Kimi K2.6</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              An internal proof-of-concept exploring Moonshot AI’s Kimi K2.6 as
              the autonomous engine for Elchai Group — Dubai’s AI, blockchain &
              digital transformation consultancy.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Elchai Pillars
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {pillars.map((p) => (
                <li key={p} className="text-sm text-foreground">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>Sources: Elchai AI Assessment & Executive Summary · Moonshot AI.</p>
          <p>
            Internal concept only. Benchmark figures reflect the assessment
            document.
          </p>
        </div>
      </div>
    </footer>
  )
}
