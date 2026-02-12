import {useTranslations} from 'next-intl';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface EngagementModel {
  title: string;
  description: string;
}

export default function Freelancer() {
  const t = useTranslations('portfolio');
  const services = t.raw('freelancer.services') as Service[];
  const models = t.raw('freelancer.models') as EngagementModel[];

  return (
    <section
      id="freelancer"
      className="py-20 md:py-32 bg-dark-paper relative overflow-hidden"
    >
      <div className="absolute inset-0 glow-primary opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          {/* Status Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t('freelancer.status')}
          </span>

          <h2 className="section-title">
            {t('freelancer.title')}{' '}
            <span className="gradient-text">{t('freelancer.title_gradient')}</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto mt-4">
            {t('freelancer.description')}
          </p>
        </div>

        {/* Code Editor + Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
          {/* Code Editor Mockup */}
          <div className="code-editor reveal reveal-left">
            <div className="code-editor-header">
              <div className="code-editor-dots">
                <span className="code-dot code-dot-red" />
                <span className="code-dot code-dot-yellow" />
                <span className="code-dot code-dot-green" />
              </div>
              <span className="code-editor-title">developer.ts</span>
              <div className="code-editor-dots" style={{visibility: 'hidden'}}>
                <span className="code-dot" />
              </div>
            </div>
            <div className="code-editor-body">
              <pre className="code-content">
                <code>
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">developer</span>
                  {' = {\n'}
                  {'  '}
                  <span className="code-property">name</span>:{' '}
                  <span className="code-string">&quot;Marcelo Mussi&quot;</span>,{'\n'}
                  {'  '}
                  <span className="code-property">role</span>:{' '}
                  <span className="code-string">&quot;Full Stack Engineer&quot;</span>,{'\n'}
                  {'  '}
                  <span className="code-property">location</span>:{' '}
                  <span className="code-string">&quot;Dubai, UAE&quot;</span>,{'\n'}
                  {'  '}
                  <span className="code-property">stack</span>: [{'\n'}
                  {'    '}
                  <span className="code-string">&quot;Flutter&quot;</span>,{' '}
                  <span className="code-string">&quot;Laravel&quot;</span>,{'\n'}
                  {'    '}
                  <span className="code-string">&quot;Next.js&quot;</span>,{' '}
                  <span className="code-string">&quot;AI&quot;</span>
                  {'\n'}
                  {'  ],\n'}
                  {'  '}
                  <span className="code-property">available</span>:{' '}
                  <span className="code-boolean">true</span>,{'\n'}
                  {'  '}
                  <span className="code-property">yearsOfExp</span>:{' '}
                  <span className="code-number">17</span>,{'\n'}
                  {'  '}
                  <span className="code-property">focus</span>:{' '}
                  <span className="code-string">&quot;End-to-end delivery&quot;</span>,{'\n'}
                  {'\n'}
                  {'  '}
                  <span className="code-method">hire</span>(
                  <span className="code-param">project</span>:{' '}
                  <span className="code-type">Project</span>) {'{'}
                  {'\n'}
                  {'    '}
                  <span className="code-keyword">return</span>{' '}
                  <span className="code-variable">this</span>.
                  <span className="code-method">buildSomethingGreat</span>({'\n'}
                  {'      '}
                  <span className="code-param">project</span>
                  {'\n'}
                  {'    );\n'}
                  {'  }\n'}
                  {'};'}
                </code>
              </pre>
            </div>
          </div>

          {/* Services Cards */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-dark/50 hover:border-white/10 transition-all duration-300 reveal reveal-delay-${index + 1}`}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{service.icon}</span>
                <div>
                  <h3 className="text-white font-bold mb-1">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          {models.map((model, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-dark/50 reveal-delay-${index + 1}`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
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
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">{model.title}</h4>
                <p className="text-white/40 text-xs mt-0.5">{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
