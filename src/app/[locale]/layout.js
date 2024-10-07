import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import {
  getTranslations,
  getMessages,
  unstable_setRequestLocale,
} from 'next-intl/server';

// CSS
import '@/styles/globals.scss';

// GTag
import { GoogleAnalytics } from '@next/third-parties/google';
const GA_TAG = process.env.NEXT_PUBLIC_GA_TAG || null;

// Components
import { CookieBanner } from '@/components/Cookies';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale = 'es' } }) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'seo' });
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: '/images/seo-mm.jpg',
      type: 'website',
      logo: '/images/logo.png',
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

export default async function LocaleLayout({
  children,
  params: { locale = 'es' },
}) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body>{children}</body>
        <CookieBanner lang={locale} />
      </NextIntlClientProvider>
      {GA_TAG && <GoogleAnalytics gaId={GA_TAG} />}
      <Script src='//madremia.s3.us-west-2.amazonaws.com/signature.js' />
    </html>
  );
}
