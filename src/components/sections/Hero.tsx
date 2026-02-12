'use client';

import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {useTypingAnimation} from '@/hooks/useTypingAnimation';

interface Metric {
  value: string;
  label: string;
}

export default function Hero() {
  const t = useTranslations('portfolio');
  const {text} = useTypingAnimation();
  const metrics = t.raw('metrics') as Metric[];

  return (
    <section
      id="about"
      className="relative pt-24 pb-20 md:min-h-screen md:flex md:items-center md:pt-20 md:pb-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(116,176,98,0.2),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Shooting Stars Effect */}
      <div className="shooting-stars">
        <div
          className="shooting-star"
          style={{top: '15%', width: '80px', animationDelay: '0s'}}
        />
        <div
          className="shooting-star"
          style={{top: '35%', width: '120px', animationDelay: '1.5s'}}
        />
        <div
          className="shooting-star"
          style={{top: '60%', width: '60px', animationDelay: '3s'}}
        />
        <div
          className="shooting-star"
          style={{top: '80%', width: '100px', animationDelay: '4.5s'}}
        />
        <div
          className="shooting-star vertical"
          style={{left: '20%', height: '80px', animationDelay: '0.5s'}}
        />
        <div
          className="shooting-star vertical"
          style={{left: '50%', height: '100px', animationDelay: '2s'}}
        />
        <div
          className="shooting-star vertical"
          style={{left: '75%', height: '70px', animationDelay: '3.5s'}}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              {t('data.badge')}
            </span>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-2">
              {t('data.name')}
            </h1>

            {/* Role (Typing Animation) */}
            <p className="text-xl sm:text-2xl font-semibold mb-8">
              <span className="text-primary-light">
                <span>{text}</span>
                <span className="typing-cursor">|</span>
              </span>
            </p>

            {/* Summary */}
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
              {t('data.summary')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <a href="mailto:mussi@prodev.com.br" className="btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {t('direct_email')}
              </a>
              <a
                href="https://www.linkedin.com/in/marcelo-mussi"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/prodevcom"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://medium.com/@marcelomussi"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
                Medium
              </a>
            </div>

            {/* Location + Languages */}
            <div className="flex items-center gap-4 justify-center lg:justify-start text-white/50 text-sm mb-12 lg:mb-0">
              <span className="flex items-center gap-1.5">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {t('data.location')}
              </span>
              <span className="flex items-center gap-1.5">
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
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                {t('data.languages')}
              </span>
            </div>
          </div>

          {/* Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/40 via-accent-blue/20 to-accent-purple/30 blur-2xl opacity-60" />
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl max-w-sm">
                <Image
                  src="/assets/portfolio/myself.jpeg"
                  alt="Marcelo Mussi"
                  width={384}
                  height={512}
                  className="w-full aspect-[3/4] object-cover"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="metrics-strip mt-16 lg:mt-20 reveal">
          {metrics.map((metric, index) => (
            <span key={index} className="contents">
              {index > 0 && <div className="metrics-divider" />}
              <div className="metrics-item">
                <span className="metrics-value">{metric.value}</span>
                <span className="metrics-label">{metric.label}</span>
              </div>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator (hidden on mobile) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <a
          href="#prodev"
          className="text-white/60 hover:text-white/70 transition-colors animate-bounce block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
