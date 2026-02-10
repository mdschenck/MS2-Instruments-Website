import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        {/* Subtle radial glow behind hero */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/5 blur-[120px]" />
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            MS2{' '}
            <span className="font-light text-brand-muted">INSTRUMENTS</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-brand-muted sm:text-xl">
            Instruments for the future, inspired by the past.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="inline-block h-1 w-12 rounded-full bg-brand-accent" />
            <span className="inline-block h-1 w-4 rounded-full bg-brand-accent/40" />
            <span className="inline-block h-1 w-2 rounded-full bg-brand-accent/20" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-muted">
          Products
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* TR-XXX Card */}
          <Link
            href="/tr-xxx"
            className="group relative overflow-hidden rounded-xl border border-white/5 bg-brand-surface p-6 transition-all duration-300 hover:border-brand-accent/30 hover:border-glow-orange"
          >
            {/* LED indicator dot */}
            <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-brand-green shadow-[0_0_6px_rgba(0,255,136,0.6)]" />

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-panel">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-brand-accent">
                <rect x="3" y="3" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.6" />
                <rect x="10" y="3" width="4" height="4" rx="0.5" fill="currentColor" />
                <rect x="17" y="3" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.6" />
                <rect x="3" y="10" width="4" height="4" rx="0.5" fill="currentColor" />
                <rect x="10" y="10" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.6" />
                <rect x="17" y="10" width="4" height="4" rx="0.5" fill="currentColor" />
                <rect x="3" y="17" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.6" />
                <rect x="10" y="17" width="4" height="4" rx="0.5" fill="currentColor" />
                <rect x="17" y="17" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.6" />
              </svg>
            </div>

            <h3 className="text-xl font-bold tracking-wide text-brand-text">
              TR-XXX
            </h3>
            <p className="mt-1 text-sm font-medium text-brand-accent">
              Analog Drum Machine
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              Physical modeling synthesis engine with 16-step sequencer, per-voice
              tuning, sample import, and master effects. Available on Android.
            </p>

            <div className="mt-6 flex items-center text-sm font-medium text-brand-accent transition-transform group-hover:translate-x-1">
              Learn more
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Coming Soon placeholder */}
          <div className="flex items-center justify-center rounded-xl border border-dashed border-white/10 p-6">
            <p className="text-sm text-brand-muted">More instruments coming soon</p>
          </div>
        </div>
      </section>

      {/* Unhinged Instruments */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-muted">
          Experimental
        </h2>
        <Link
          href="/unhinged"
          className="group relative block overflow-hidden rounded-xl border border-white/5 bg-brand-surface p-8 transition-all duration-300 hover:border-brand-accent/30 hover:border-glow-orange"
        >
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-brand-panel">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-brand-accent">
                <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-wide text-brand-text">
                Unhinged Instruments
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-muted">
                Unique and offbeat browser-based instruments that push the boundaries
                of what synths and drum machines can (and probably should) do.
              </p>
              <div className="mt-4 flex items-center justify-center text-sm font-medium text-brand-accent transition-transform group-hover:translate-x-1 md:justify-start">
                Explore the collection
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
