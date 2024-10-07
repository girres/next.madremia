import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

// Blocks components.
import { BlockHero, BlockProjects, BlockClients } from '@/components/Blocks';

export default function Page({ params: { locale = 'es' } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('home');
  return (
    <main className='main min-h-screen'>
      <h1 className='hidden'>{t('title')}</h1>
      <BlockHero />
      <BlockProjects />
      <BlockClients />
    </main>
  );
}
