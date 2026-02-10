import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for MS2 Instruments apps and services.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-bold text-brand-text">{title}</h2>
      <div className="space-y-3 text-brand-muted leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold text-brand-text">Privacy Policy</h1>
      <p className="mt-2 text-sm text-brand-muted">
        Effective Date: February 9, 2026
      </p>
      <div className="my-8 h-px bg-white/10" />

      <Section title="Introduction">
        <p>
          MS2 Instruments (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) builds
          music creation apps including TR-XXX. This Privacy Policy explains what
          information is collected, how it is used, and the choices available to
          users of our apps and website.
        </p>
        <p>
          We are committed to respecting user privacy. Our apps are designed to
          function with minimal data collection.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p>
          <strong className="text-brand-text">Data collected directly by our apps:</strong>{' '}
          Our apps do not collect, store, or transmit personal information. All
          music, patterns, and settings created within the app are stored locally
          on the device and are not sent to any server.
        </p>
        <p>
          <strong className="text-brand-text">Data collected by third-party services:</strong>{' '}
          Our apps integrate with the following third-party services that may
          collect data independently:
        </p>
        <ul className="ml-6 list-disc space-y-2">
          <li>
            <strong className="text-brand-text">Google Play Store:</strong>{' '}
            Handles app distribution and may collect device information, usage
            data, and crash reports as described in{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent underline decoration-brand-accent/30 transition-colors hover:text-brand-accent/80"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong className="text-brand-text">RevenueCat:</strong>{' '}
            Manages in-app purchases and subscriptions. RevenueCat processes
            purchase transaction data (such as product identifiers and transaction
            IDs) but does not collect personal information such as names or email
            addresses through our integration. See{' '}
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent underline decoration-brand-accent/30 transition-colors hover:text-brand-accent/80"
            >
              RevenueCat&apos;s Privacy Policy
            </a>
            .
          </li>
        </ul>
      </Section>

      <Section title="How We Use Information">
        <p>
          We do not collect personal data directly, so there is no personal data
          for us to use. The third-party services listed above use data solely
          for the purposes of app distribution (Google Play) and purchase
          management (RevenueCat).
        </p>
      </Section>

      <Section title="Data Sharing">
        <p>
          We do not sell, trade, or share personal data with third parties. The
          only data sharing that occurs is between the device and the third-party
          services listed above, which is necessary for app distribution and
          in-app purchase functionality.
        </p>
      </Section>

      <Section title="Data Retention and Deletion">
        <p>
          Since our apps do not collect personal data, there is no personal data
          retained on our systems. All app data (patterns, settings, samples) is
          stored locally on the device and can be deleted by uninstalling the app
          or clearing app data through device settings.
        </p>
        <p>
          For data held by third-party services, please refer to their respective
          privacy policies for information on data retention and deletion
          procedures.
        </p>
      </Section>

      <Section title="Children&apos;s Privacy">
        <p>
          Our apps are not directed at children under 13. We do not knowingly
          collect personal information from children. Since our apps do not
          collect personal data from any users, no special provisions for
          children&apos;s data are necessary.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. Continued use of
          our apps after changes constitutes acceptance of the updated policy.
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          For questions or concerns about this Privacy Policy, please contact us
          at:
        </p>
        <p>
          <a
            href="mailto:ms2instruments@gmail.com"
            className="text-brand-accent underline decoration-brand-accent/30 transition-colors hover:text-brand-accent/80"
          >
            ms2instruments@gmail.com
          </a>
        </p>
      </Section>
    </div>
  );
}
