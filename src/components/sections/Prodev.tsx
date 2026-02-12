import {useTranslations, useLocale} from 'next-intl';

const BULLET_ICONS = ['\u{1F527}', '\u{1F4CA}', '\u2696\uFE0F', '\u{1F49A}'];

export default function Prodev() {
  const t = useTranslations('portfolio');
  const locale = useLocale();
  const bullets = t.raw('prodev_section.bullets') as string[];

  return (
    <section
      id="prodev"
      className="py-20 md:py-32 bg-dark-paper relative overflow-hidden"
    >
      <div className="absolute inset-0 glow-primary opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Text Content */}
        <div className="max-w-3xl mx-auto lg:mx-0 mb-16 reveal">
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
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            {t('prodev_section.overline')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {t('prodev_section.title')}
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            {t('prodev_section.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bullets.map((bullet, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 reveal reveal-delay-${(index % 4) + 1}`}
              >
                <span className="text-2xl">{BULLET_ICONS[index] ?? '\u2713'}</span>
                <span className="text-white/70">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Card */}
        <div className="flex justify-center reveal reveal-scale">
          <a
            href={`https://prodev.com.br/${locale}`}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="card p-10 bg-gradient-to-br from-dark-lighter to-dark border-primary/20 hover:border-primary/40 transition-all duration-300">
              <img
                src="/assets/prodev_logo.svg"
                alt="Prodev logo"
                className="h-16 w-full object-contain drop-shadow-lg"
              />
              <p className="text-center text-white/60 text-sm mt-4">
                {t('click_to_visit')}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
