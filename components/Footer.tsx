import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-lg font-bold tracking-wider">
              MS2 <span className="font-light text-brand-muted">INSTRUMENTS</span>
            </p>
            <p className="mt-1 text-sm text-brand-muted">
              Instruments for the future, inspired by the past.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-brand-muted">
            <Link href="/privacy" className="transition-colors hover:text-brand-accent">
              Privacy Policy
            </Link>
            <a href="mailto:ms2instruments@gmail.com" className="transition-colors hover:text-brand-accent">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-brand-muted">
          &copy; {new Date().getFullYear()} MS2 Instruments. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
