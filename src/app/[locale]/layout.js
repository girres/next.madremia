// CSS
import '@/styles/globals.scss';

// Utils.
import dictionary from '@/dictionary.json';

export async function generateMetadata({ params: { locale = 'es' } }) {
  return {
    title: dictionary[locale].seo.title,
    description: dictionary[locale].seo.description,
    openGraph: {
      images: 'https://smartrent-src.s3.amazonaws.com/logos/reteki_seo.png',
    },
    alternates: {
      canonical:
        (process.env?.SITE_URL || 'http://localhost:3000') + `/${locale}`,
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

export default function RootLayout({ children, params: { locale = 'es' } }) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
