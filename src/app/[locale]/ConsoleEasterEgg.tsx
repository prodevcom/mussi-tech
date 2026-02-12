'use client';

import {useEffect} from 'react';

export default function ConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      '%c\n  __  __ __  __\n |  \\/  |  \\/  |\n | |\\/| | |\\/| |\n | |  | | |  | |\n |_|  |_|_|  |_|\n',
      'color: #74b062; font-size: 14px; font-weight: bold;',
    );
    console.log(
      '%c Hey dev! Inspecting my code? \uD83D\uDC40',
      'color: #fff; font-size: 16px; font-weight: bold; background: #1c1d1f; padding: 8px 16px; border-radius: 8px;',
    );
    console.log(
      "%c I build things with Flutter, Laravel, Next.js & AI.\n Let's build something great together!\n\n \uD83D\uDCE7 marcelo@mussi.tech\n \uD83D\uDD17 linkedin.com/in/marcelo-mussi\n",
      'color: #8bc97a; font-size: 12px; line-height: 1.8;',
    );
    console.log(
      '%c May the Force be with you. \u2694\uFE0F',
      'color: #60a5fa; font-size: 11px; font-style: italic;',
    );
  }, []);

  return null;
}
