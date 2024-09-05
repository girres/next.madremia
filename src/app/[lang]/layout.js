// CSS
import '@/styles/globals.scss';

// Dictionary.
import { getDictionary } from '@/dictionaries';

export async function generateMetadata({ params: { lang = 'es' } }) {
  const dict = await getDictionary(lang);
  console.log('🚀 ~ generateMetadata ~ dict:', dict);
  return {
    title: 'Some',
    description: 'Some',
    openGraph: {
      images: 'https://smartrent-src.s3.amazonaws.com/logos/reteki_seo.png',
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
    </html>
  );
}
