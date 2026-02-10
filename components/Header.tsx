import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-brand-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-wider text-brand-text transition-colors hover:text-brand-accent">
          MS2 <span className="font-light text-brand-muted">INSTRUMENTS</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/tr-xxx" className="text-brand-muted transition-colors hover:text-brand-accent">
            TR-XXX
          </Link>
          <Link href="/unhinged" className="text-brand-muted transition-colors hover:text-brand-accent">
            Unhinged
          </Link>
          <Link href="/privacy" className="text-brand-muted transition-colors hover:text-brand-accent">
            Privacy
          </Link>
        </div>
      </nav>
    </header>
  );
}
