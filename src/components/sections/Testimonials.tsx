import {useTranslations} from 'next-intl';

const COLORS = ['#3b82f6', '#74b062', '#a855f7', '#06b6d4'];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w.charAt(0))
    .slice(0, 2)
    .join('');
}

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  relationship: string;
}

export default function Testimonials() {
  const t = useTranslations('portfolio');
  const items = t.raw('testimonials.items') as TestimonialItem[];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-dark-paper relative overflow-hidden"
    >
      <div className="absolute inset-0 glow-blue opacity-20 pointer-events-none" />

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
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            {t('sections.testimonials')}
          </span>
          <h2 className="section-title">
            {t('testimonials.title')}{' '}
            <span className="gradient-text">{t('testimonials.title_gradient')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const color = COLORS[index] ?? '#3b82f6';
            const initials = getInitials(item.name);

            return (
              <div
                key={index}
                className={`testimonial-card reveal reveal-delay-${(index % 4) + 1}`}
                style={{'--testimonial-color': color} as React.CSSProperties}
              >
                {/* Quote icon */}
                <div className="testimonial-quote-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote text */}
                <blockquote className="testimonial-text">{item.quote}</blockquote>

                {/* Author */}
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{initials}</div>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.name}</p>
                    <p className="text-sm" style={{color: 'var(--testimonial-color)'}}>
                      {item.role}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">{item.relationship}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
