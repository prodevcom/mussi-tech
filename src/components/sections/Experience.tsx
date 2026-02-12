import {useTranslations} from 'next-intl';

const COLORS = [
  '#3b82f6',
  '#74b062',
  '#a855f7',
  '#f59e0b',
  '#f87171',
  '#06b6d4',
  '#74b062',
  '#3b82f6',
];

function simpleHash(str: string): string {
  const num = str
    .slice(0, 7)
    .split('')
    .reduce((a, c) => ((a << 5) - a + c.charCodeAt(0)) | 0, 0);
  return Math.abs(num).toString(16).slice(-7).padStart(7, '0');
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export default function Experience() {
  const t = useTranslations('portfolio');
  const experiences = t.raw('experiences') as Experience[];

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 glow-primary opacity-20 pointer-events-none" />
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {t('sections.experience')}
          </span>
          <h2 className="section-title">
            {t('experience_title')}{' '}
            <span className="gradient-text">{t('experience_title_gradient')}</span>
          </h2>
        </div>

        <div className="git-log">
          {/* Git log header */}
          <div className="git-log-header reveal">
            <span className="git-log-cmd">
              <span className="text-primary">$</span> git log --oneline --graph career
            </span>
          </div>

          {experiences.map((exp, index) => {
            const hash = simpleHash(exp.company);
            const color = COLORS[index] ?? '#3b82f6';
            const nextColor = COLORS[index + 1] ?? '#3b82f6';
            const isLast = index === experiences.length - 1;

            return (
              <div
                key={exp.company}
                className="git-commit reveal"
                style={{transitionDelay: `${index * 0.08}s`}}
              >
                {/* Git line connector */}
                <div className="git-line">
                  <div
                    className="git-node"
                    style={{
                      background: color,
                      boxShadow: `0 0 10px ${color}40`,
                    }}
                  />
                  {!isLast && (
                    <div
                      className="git-connector"
                      style={{
                        background: `linear-gradient(to bottom, ${color}40, ${nextColor}40)`,
                      }}
                    />
                  )}
                </div>

                {/* Card */}
                <div className="card card-hover relative overflow-hidden group p-6 md:p-8 flex-1">
                  {/* Git hash */}
                  <div className="flex items-center gap-2 mb-4">
                    <code className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-white/30">
                      {hash}
                    </code>
                    <span className="text-xs font-mono text-white/20">|</span>
                    <span className="text-xs font-mono text-white/30">{exp.period}</span>
                  </div>

                  {/* Header */}
                  <div className="exp-header flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-1 sm:gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                      <p className="font-semibold" style={{color}}>
                        {exp.role}
                      </p>
                    </div>
                    <div className="exp-meta text-white/50 text-sm sm:text-right flex-shrink-0">
                      <div className="flex items-center gap-1.5 sm:justify-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/60">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mt-0.5 flex-shrink-0"
                          style={{color}}
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
