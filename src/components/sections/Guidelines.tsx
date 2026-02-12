import {useTranslations} from 'next-intl';

interface GuidelineItem {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  bullets?: string[];
}

export default function Guidelines() {
  const t = useTranslations('portfolio');
  const items = t.raw('guideline.items') as GuidelineItem[];

  return (
    <section
      id="guideline"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 glow-primary opacity-25 pointer-events-none" />
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
                d="M9.75 17L4.5 21.75l1.5-5.25L3 12l5.25-.75L9.75 6l1.5 5.25L16.5 12l-3 4.5 1.5 5.25L9.75 17z"
              />
            </svg>
            {t('sections.guideline')}
          </span>
          <h2 className="section-title">
            {t('guideline.title')}{' '}
            <span className="gradient-text">
              {t('guideline.title_gradient')}
            </span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mt-4">
            {t('guideline.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`card card-hover guideline-card relative overflow-hidden p-6 md:p-8 reveal reveal-delay-${(index % 3) + 1}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white lightsaber-title">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">{item.subtitle}</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">{item.description}</p>
              {item.bullets && item.bullets.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet, bIndex) => (
                    <li
                      key={bIndex}
                      className="flex items-start gap-2 text-white/60 text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
