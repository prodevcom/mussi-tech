import { useState, useEffect } from 'react';

const NAV_SECTIONS = [
  'about',
  'architecture',
  'highlights',
  'experience',
  'testimonials',
  'freelancer',
  'contact',
];

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    // Map a non-nav section to the nearest preceding nav section
    const mapToNavSection = (id: string): string => {
      if (NAV_SECTIONS.includes(id)) return id;

      // Find all section elements in DOM order and locate the preceding nav section
      const allSections = Array.from(document.querySelectorAll('section[id]'));
      let lastNavSection = NAV_SECTIONS[0];

      for (const section of allSections) {
        const sectionId = section.getAttribute('id') || '';
        if (NAV_SECTIONS.includes(sectionId)) {
          lastNavSection = sectionId;
        }
        if (sectionId === id) {
          return lastNavSection;
        }
      }

      return lastNavSection;
    };

    const handleScroll = () => {
      // Special case: near bottom of page, activate contact
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 80
      ) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        // Check bottom-of-page first
        if (
          window.innerHeight + window.scrollY >=
          document.body.scrollHeight - 80
        ) {
          setActiveSection('contact');
          return;
        }

        // Find the most relevant intersecting section
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          // Pick the entry with the highest intersection ratio
          const best = intersecting.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev,
          );
          const id = best.target.getAttribute('id') || '';
          setActiveSection(mapToNavSection(id));
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '-10% 0px -40% 0px',
      },
    );

    // Observe all section[id] elements
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Initial check
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
