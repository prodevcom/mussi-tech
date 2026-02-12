import {useTranslations} from 'next-intl';

interface StackGroup {
  title: string;
  items: string[];
}

const STACK_ICONS = ['\u{1F4F1}', '\u2699\uFE0F', '\u{1F916}', '\u{1F5C4}\uFE0F'];
const STACK_COLORS = ['#3b82f6', '#74b062', '#a855f7', '#06b6d4'];

export default function Stack() {
  const t = useTranslations('portfolio');
  const stackGroups = t.raw('stack_groups') as StackGroup[];

  return (
    <section
      id="stack"
      className="py-20 md:py-32 bg-dark-paper relative overflow-hidden"
    >
      <div className="absolute inset-0 glow-purple opacity-30 pointer-events-none" />

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
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            {t('sections.stack')}
          </span>
          <h2 className="section-title">
            {t('stack_title')}{' '}
            <span className="gradient-text">{t('stack_title_gradient')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackGroups.map((group, index) => {
            const color = STACK_COLORS[index] ?? '#3b82f6';
            const icon = STACK_ICONS[index] ?? '\u{1F4E6}';
            return (
              <div
                key={index}
                className={`card card-hover relative overflow-hidden p-6 md:p-8 reveal reveal-delay-${(index % 4) + 1}`}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{background: color}}
                />
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="text-xl font-bold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, iIndex) => (
                    <span
                      key={iIndex}
                      className="px-4 py-2 rounded-lg text-sm"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}30`,
                        color,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
