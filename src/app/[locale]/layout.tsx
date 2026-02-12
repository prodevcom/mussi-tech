import type {Metadata} from 'next';
import {Figtree} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import '../globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'portfolio.meta'});

  return {
    metadataBase: new URL('https://mussi.tech'),
    title: t('title'),
    description: t('description'),
    robots: 'index, follow',
    keywords:
      'Marcelo Mussi, Full Stack Engineer, Flutter Developer, Laravel Developer, Next.js, AI Integration, Mobile App Developer, Freelance Developer, Dubai, Software Engineer, Tech Lead',
    authors: [{name: 'Marcelo Mussi'}],
    openGraph: {
      type: 'website',
      title: t('title'),
      description: t('description'),
      images: ['/assets/portfolio/myself.jpeg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/assets/portfolio/myself.jpeg'],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        pt: '/pt',
        'x-default': '/en',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Marcelo Mussi',
    jobTitle: 'Full Stack Engineer',
    url: `https://mussi.tech/${locale}`,
    image: 'https://mussi.tech/assets/portfolio/myself.jpeg',
    email: 'mussi@prodev.com.br',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    sameAs: [
      'https://www.linkedin.com/in/marcelo-mussi',
      'https://github.com/prodevcom',
      'https://medium.com/@marcelomussi',
    ],
    knowsAbout: [
      'Flutter',
      'Laravel',
      'Next.js',
      'AI Integration',
      'Mobile Development',
      'Full Stack Development',
    ],
    alumniOf: [
      {'@type': 'EducationalOrganization', name: 'FIAP'},
      {'@type': 'EducationalOrganization', name: 'UNIMONTE'},
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Prodev',
      url: 'https://prodev.com.br',
    },
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#1c1d1f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </head>
      <body
        className={`${figtree.variable} font-sans antialiased bg-dark text-gray-200`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
