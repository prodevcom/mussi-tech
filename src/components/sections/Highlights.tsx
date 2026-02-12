import {useTranslations} from 'next-intl';

interface CaseItem {
  title: string;
  subtitle: string;
  bullets: string[];
  appstore?: string;
  playstore?: string;
}

const HIGHLIGHT_ICONS = [
  '\u{1F680}',
  '\u{1F3AF}',
  '\u{1F30D}',
  '\u{1F4B0}',
  '\u{1F465}',
];

const CASE_COLORS = ['#3b82f6', '#74b062', '#a855f7'];

export default function Highlights() {
  const t = useTranslations('portfolio');
  const highlightsItems = t.raw('highlights_items') as string[];
  const cases = t.raw('cases') as CaseItem[];

  return (
    <section
      id="highlights"
      className="py-20 md:py-32 bg-dark-paper relative overflow-hidden"
    >
      <div className="absolute inset-0 glow-blue opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
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
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            {t('sections.highlights')}
          </span>
          <h2 className="section-title">
            {t('highlights_title')}{' '}
            <span className="gradient-text">{t('highlights_title_gradient')}</span>
          </h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {highlightsItems.map((item, index) => (
            <div
              key={index}
              className={`card card-hover group p-6 md:p-8 reveal reveal-delay-${(index % 3) + 1}`}
            >
              <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                {HIGHLIGHT_ICONS[index] ?? '\u2713'}
              </span>
              <p className="text-white/70 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* Cases Header */}
        <div className="text-center mt-8 mb-16 reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {t('sections.cases')}
          </h3>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => {
            const color = CASE_COLORS[index] ?? '#3b82f6';
            return (
              <div
                key={index}
                className={`card card-hover relative overflow-hidden group p-6 md:p-8 reveal reveal-delay-${index + 1}`}
              >
                {/* Color accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{background: color}}
                />
                <div
                  className="absolute top-0 left-0 w-full h-24 opacity-10"
                  style={{
                    background: `linear-gradient(to bottom, ${color}, transparent)`,
                  }}
                />

                <div className="relative">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {caseItem.title}
                  </h4>
                  <p className="text-sm mb-5" style={{color}}>
                    {caseItem.subtitle}
                  </p>
                  <ul className="space-y-3">
                    {caseItem.bullets.map((bullet, bIndex) => (
                      <li
                        key={bIndex}
                        className="flex items-start gap-2 text-white/60 text-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mt-0.5 flex-shrink-0"
                          style={{color}}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {(caseItem.appstore || caseItem.playstore) && (
                    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/5">
                      {caseItem.appstore && (
                        <a
                          href={caseItem.appstore}
                          target="_blank"
                          rel="noreferrer"
                          className="store-badge"
                          style={{'--store-color': color} as React.CSSProperties}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          App Store
                        </a>
                      )}
                      {caseItem.playstore && (
                        <a
                          href={caseItem.playstore}
                          target="_blank"
                          rel="noreferrer"
                          className="store-badge"
                          style={{'--store-color': color} as React.CSSProperties}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302c.7.7.7 1.68 0 2.38l-1.895 1.098-2.707-2.707 2.3-3.073zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
                          </svg>
                          Google Play
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
