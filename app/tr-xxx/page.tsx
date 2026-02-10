import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TR-XXX Analog Drum Machine',
  description: 'Physical modeling drum synthesis with 16-step sequencer, sample import, and master effects. Available on Android.',
};

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/5 bg-brand-panel p-6 transition-all duration-300 hover:border-brand-green/20 hover:border-glow-green">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-surface text-brand-green">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-brand-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{description}</p>
    </div>
  );
}

function StepIndicator() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-sm ${
            [0, 4, 8, 12].includes(i)
              ? 'bg-brand-accent shadow-[0_0_4px_rgba(255,107,53,0.5)]'
              : i % 2 === 0
              ? 'bg-brand-green/60'
              : 'bg-white/10'
          }`}
        />
      ))}
    </div>
  );
}

export default function TrXxxPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16">
        {/* Background glow effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-brand-accent/5 blur-[150px]" />
          <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-green/5 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Step indicator as decoration */}
          <div className="mb-8 flex justify-center">
            <StepIndicator />
          </div>

          <h1 className="text-glow-orange text-5xl font-bold tracking-wider sm:text-7xl">
            TR-<span className="text-brand-accent">XXX</span>
          </h1>
          <p className="mt-3 text-xl font-light tracking-wide text-brand-muted sm:text-2xl">
            Analog Drum Machine
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-brand-muted">
            A physical modeling drum synthesizer inspired by classic analog rhythm
            machines. Every sound is generated in real-time — no samples, no
            recordings — just raw synthesis shaped by the same physics that made
            the originals legendary.
          </p>

          {/* Play Store CTA */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.ms2instruments.trxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-brand-accent px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-brand-accent/90 hover:shadow-[0_0_30px_rgba(255,107,53,0.3)]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 3.458L16.8 9.79l-2.302 2.302-8.635-8.635z" />
              </svg>
              Get it on Google Play
            </a>
            <span className="text-sm text-brand-muted">Free with optional Pro upgrade</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-green">
          Features
        </h2>
        <p className="mb-10 text-2xl font-bold text-brand-text">
          Built from the ground up for sound design.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Synthesis Engine"
            description="11 physically-modeled analog voices — kick, snare, toms, hats, clap/snap, cowbell, claves, rimshot, and maracas. Each voice uses the same mathematical models that define the classic analog sound."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18M5.5 8l13-2M5.5 16l13 2" strokeLinecap="round" />
              </svg>
            }
          />
          <FeatureCard
            title="Step Sequencer"
            description="16-step sequencer with per-step velocity, accent control, and pattern chaining. Program beats with the intuitive pad grid and switch between patterns on the fly."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="4" height="18" rx="1" />
                <rect x="10" y="8" width="4" height="13" rx="1" />
                <rect x="17" y="5" width="4" height="16" rx="1" />
              </svg>
            }
          />
          <FeatureCard
            title="Per-Voice Controls"
            description="Tune, decay, tone, and level controls on every voice. Shape each drum sound independently to craft exactly the texture and character needed."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="8" cy="8" r="3" />
                <line x1="8" y1="11" x2="8" y2="21" />
                <circle cx="16" cy="14" r="3" />
                <line x1="16" y1="3" x2="16" y2="11" />
                <line x1="16" y1="17" x2="16" y2="21" />
              </svg>
            }
          />
          <FeatureCard
            title="Sample Slots"
            description="Import custom WAV samples alongside the synthesis engine. Layer samples with synthesized voices or use them standalone for hybrid drum kits."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18M3 12h18" strokeLinecap="round" />
                <rect x="5" y="5" width="14" height="14" rx="2" />
              </svg>
            }
          />
          <FeatureCard
            title="Master Effects"
            description="Global effects chain with bit reduction, delay, and distortion. Process the entire mix through analog-inspired effects for grit, space, and character."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12c2-3 4-6 6-6s4 6 6 6 4-6 6-6" strokeLinecap="round" />
              </svg>
            }
          />
          <FeatureCard
            title="Song Mode"
            description="Chain patterns together into full arrangements. Build complete tracks with verse, chorus, and breakdown sections — all sequenced internally."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h10M4 18h14" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
      </section>

      {/* Screenshots Placeholder */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-green">
          Screenshots
        </h2>
        <p className="mb-10 text-2xl font-bold text-brand-text">
          See it in action.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex aspect-[9/16] items-center justify-center rounded-xl border border-white/5 bg-brand-panel"
            >
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-brand-muted">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                <p className="text-xs text-brand-muted">Screenshot {i}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/5 bg-brand-surface px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-text sm:text-4xl">
            Start making beats.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-brand-muted">
            Download TR-XXX for free on Android. Unlock Pro features including Song
            Mode, Master Effects, and WAV Export for a one-time purchase.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.ms2instruments.trxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-brand-accent px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-brand-accent/90 hover:shadow-[0_0_30px_rgba(255,107,53,0.3)]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 3.458L16.8 9.79l-2.302 2.302-8.635-8.635z" />
            </svg>
            Get it on Google Play
          </a>
        </div>
      </section>
    </>
  );
}
