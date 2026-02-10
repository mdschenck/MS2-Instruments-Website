import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unhinged Instruments',
  description: 'Unique and offbeat browser-based instruments that push the boundaries of what synths and drum machines can (and probably should) do.',
};

const instruments = [
  {
    title: 'The Meat Grinder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    image: '/images/unhinged-01.png',
  },
  {
    title: 'Spectral Theremin',
    description:
      'Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    image: '/images/unhinged-02.png',
  },
  {
    title: 'Doom Organ',
    description:
      'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ut facilisis in, egestas eget quam.',
    image: '/images/unhinged-03.png',
  },
  {
    title: 'Chaos Harp',
    description:
      'Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    image: '/images/unhinged-04.png',
  },
  {
    title: 'Particle Drums',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo.',
    image: '/images/unhinged-05.png',
  },
];

function InstrumentBlock({
  title,
  description,
  image,
  reversed,
}: {
  title: string;
  description: string;
  image: string;
  reversed: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-8 md:items-center lg:gap-12 ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      {/* Image */}
      <div className="shrink-0 md:w-[450px]">
        <div className="relative aspect-[450/700] w-full overflow-hidden rounded-xl border border-white/5 bg-brand-panel">
          {/* Placeholder content */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-brand-muted">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <p className="text-sm text-brand-muted">450 &times; 700</p>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold tracking-wide text-brand-text sm:text-3xl">
          {title}
        </h3>
        <div className="mt-2 h-1 w-12 rounded-full bg-brand-accent" />
        <p className="mt-6 leading-relaxed text-brand-muted">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function UnhingedPage() {
  return (
    <div className="px-6 py-16">
      {/* Header */}
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
          Unhinged Instruments
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted">
          Unique and offbeat browser-based instruments that push the boundaries
          of what synths and drum machines can (and probably should) do. These
          are experiments in sound — some beautiful, some abrasive, all
          unapologetically weird.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="inline-block h-1 w-12 rounded-full bg-brand-accent" />
          <span className="inline-block h-1 w-4 rounded-full bg-brand-accent/40" />
          <span className="inline-block h-1 w-2 rounded-full bg-brand-accent/20" />
        </div>
      </div>

      {/* Instrument Blocks */}
      <div className="mx-auto mt-20 flex max-w-6xl flex-col gap-24">
        {instruments.map((instrument, i) => (
          <InstrumentBlock
            key={instrument.title}
            title={instrument.title}
            description={instrument.description}
            image={instrument.image}
            reversed={i % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}
