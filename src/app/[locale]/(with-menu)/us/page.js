import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';

// Component.
import {
  BlockUsHeading,
  BlockText,
  BlockProfiles,
  BlockServices,
} from '@/components/Blocks';

export async function generateMetadata({ params: { locale = 'es' } }) {
  const t = await getTranslations({ locale, namespace: 'us.seo' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Page({ params: { locale = 'es' } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'us' });

  return (
    <main className='mm-container py-10'>
      <h1 className='hidden'>{t('title')}</h1>
      <BlockUsHeading />
      <BlockText />
      <BlockProfiles />
      <BlockServices />
    </main>
  );
}
