import Script from 'next/script';

// CSS
import '@/styles/globals.scss';

// Dictionary.
import { getDictionary } from '@/app/dictionaries';

// GTag
import { GoogleAnalytics } from '@next/third-parties/google';
const GA_TAG = process.env.NEXT_PUBLIC_GA_TAG || null;

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export async function generateMetadata({ params: { lang = 'es' } }) {
  const dict = await getDictionary(lang);
  return {
    title: dict.seo.title,
    description: dict.seo.description,
    openGraph: {
      images: '/images/seo-mm.jpg',
      type: 'website',
      logo: '/images/logo.png',
    },
    alternates: {
      canonical:
        (process.env?.SITE_URL || 'http://localhost:3000') + `/${lang}`,
    },
    metadataBase: new URL(process.env?.SITE_URL || 'http://localhost:3000'),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default function RootLayout({ children, params: { lang = 'es' } }) {
  return (
    <html lang={lang}>
      <body>{children}</body>
      {GA_TAG && <GoogleAnalytics gaId={GA_TAG} />}
      <Script src='//madremia.s3.us-west-2.amazonaws.com/signature.js' />
    </html>
  );
}
