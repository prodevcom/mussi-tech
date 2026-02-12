import { useState, useEffect } from 'react';

const ROLES = [
  'Flutter Developer',
  'Laravel Architect',
  'Next.js Builder',
  'AI Integrator',
  'Full Stack Engineer',
];

const TYPING_SPEED = 100;
const HOLD_DURATION = 2000;
const DELETE_SPEED = 50;
const PAUSE_BETWEEN = 400;

export function useTypingAnimation(): { text: string } {
  const [text, setText] = useState('');

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentRole = ROLES[roleIndex];

      if (!isDeleting) {
        // Typing forward
        charIndex++;
        setText(currentRole.slice(0, charIndex));

        if (charIndex === currentRole.length) {
          // Finished typing, hold then start deleting
          timeoutId = setTimeout(() => {
            isDeleting = true;
            tick();
          }, HOLD_DURATION);
          return;
        }

        timeoutId = setTimeout(tick, TYPING_SPEED);
      } else {
        // Deleting
        charIndex--;
        setText(currentRole.slice(0, charIndex));

        if (charIndex === 0) {
          // Finished deleting, move to next role
          isDeleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;

          timeoutId = setTimeout(tick, PAUSE_BETWEEN);
          return;
        }

        timeoutId = setTimeout(tick, DELETE_SPEED);
      }
    };

    timeoutId = setTimeout(tick, PAUSE_BETWEEN);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return { text };
}
