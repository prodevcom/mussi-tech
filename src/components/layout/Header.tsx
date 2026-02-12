'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';

const NAV_SECTIONS = [
  'about',
  'architecture',
  'highlights',
  'experience',
  'testimonials',
  'freelancer',
  'contact',
] as const;

export default function Header() {
  const t = useTranslations('portfolio.nav');
  const locale = useLocale();
  const pathname = usePathname();
  const activeSection = useActiveSection([...NAV_SECTIONS]);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false);
    },
    [],
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 header-blur transition-all duration-300 ${
          scrolled ? 'scrolled' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
              aria-label="Scroll to top"
            >
              <img src="/assets/mm-logo.svg" alt="MM" width={32} height={32} />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/10">
                {NAV_SECTIONS.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`nav-link px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeSection === section
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {t(section)}
                  </button>
                ))}
              </div>
            </nav>

            {/* Right side: Language Toggle + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <div className="flex items-center rounded-full overflow-hidden border border-white/10">
                <Link
                  href={pathname}
                  locale="en"
                  className={`px-2.5 py-1 text-xs font-semibold uppercase transition-all duration-200 ${
                    locale === 'en'
                      ? 'bg-primary text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  EN
                </Link>
                <Link
                  href={pathname}
                  locale="pt"
                  className={`px-2.5 py-1 text-xs font-semibold uppercase transition-all duration-200 ${
                    locale === 'pt'
                      ? 'bg-primary text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  PT
                </Link>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    mobileOpen ? 'rotate-45 translate-y-[4px]' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                    mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />
        <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
          {NAV_SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`mobile-nav-link text-xl font-medium px-6 py-2 rounded-full transition-all duration-200 ${
                activeSection === section
                  ? 'bg-primary text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {t(section)}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
