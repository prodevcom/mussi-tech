import {useTranslations} from 'next-intl';

const ICONS = ['\uD83C\uDF93', '\uD83D\uDCF1', '\uD83D\uDCBB'];

interface EducationItem {
  title: string;
  subtitle: string;
  institution: string;
  period: string;
}

export default function Education() {
  const t = useTranslations('portfolio');
  const items = t.raw('education_items') as EducationItem[];

  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 glow-purple opacity-20 pointer-events-none" />
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
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            {t('sections.education')}
          </span>
          <h2 className="section-title">
            {t('education_title')}{' '}
            <span className="gradient-text">{t('education_title_gradient')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((edu, index) => (
            <div
              key={index}
              className={`card card-hover p-6 md:p-8 reveal reveal-delay-${index + 1}`}
            >
              <div className="flex items-start gap-5">
                <span className="text-4xl">{ICONS[index]}</span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{edu.title}</h3>
                  <p className="text-primary text-sm mb-3">{edu.subtitle}</p>
                  <p className="text-white/60 text-sm">{edu.institution}</p>
                  <p className="text-white/60 text-sm mt-1">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
