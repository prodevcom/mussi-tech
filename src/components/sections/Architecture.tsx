import {useTranslations} from 'next-intl';

interface Layer {
  icon: string;
  title: string;
  tech: string;
  description: string;
}

const LAYER_COLORS = [
  '#74b062',
  '#3b82f6',
  '#a855f7',
  '#f59e0b',
  '#f87171',
  '#06b6d4',
  '#f97316',
];

const LAYER_SVGS: Record<string, React.ReactNode> = {
  backend: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  ),
  frontend: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  ),
  ai: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  ),
  cache: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  ),
  apps: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  ),
  cdn: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
  infra: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </>
  ),
};

export default function Architecture() {
  const t = useTranslations('portfolio');
  const layers = t.raw('architecture.layers') as Layer[];

  return (
    <section
      id="architecture"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 glow-blue opacity-20 pointer-events-none" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="chip mb-6 inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            {t('sections.architecture')}
          </span>
          <h2 className="section-title">
            {t('architecture.title')}{' '}
            <span className="gradient-text">
              {t('architecture.title_gradient')}
            </span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mt-4">
            {t('architecture.description')}
          </p>
        </div>

        {/* Architecture Chart */}
        <div className="arch-chart">
          {/* Central Spine */}
          <div className="arch-spine">
            <div className="arch-spine-line" />
            <div className="arch-spine-glow" />
          </div>

          {layers.map((layer, index) => (
            <div
              key={index}
              className={`arch-row ${index % 2 === 0 ? 'arch-row-left' : 'arch-row-right'} ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
              style={
                {
                  '--layer-color': LAYER_COLORS[index],
                  '--layer-index': index,
                  transitionDelay: `${index * 0.12}s`,
                } as React.CSSProperties
              }
            >
              {/* Card */}
              <div className="arch-card">
                <div className="arch-card-inner">
                  <div className="arch-card-glow" />
                  <div className="arch-card-border" />
                  <div className="arch-card-body">
                    <div className="arch-card-header">
                      <div className="arch-card-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {LAYER_SVGS[layer.icon] ?? null}
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white leading-tight">
                          {layer.title}
                        </h3>
                        <p
                          className="text-xs font-medium mt-0.5"
                          style={{color: 'var(--layer-color)'}}
                        >
                          {layer.tech}
                        </p>
                      </div>
                    </div>
                    <p className="text-white/45 text-sm leading-relaxed mt-3">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Node on spine */}
              <div className="arch-node">
                <div className="arch-node-ring" />
                <div className="arch-node-dot" />
                <div className="arch-node-pulse" />
                <span className="arch-node-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Connector arm */}
              <div className="arch-arm">
                <div className="arch-arm-line" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
