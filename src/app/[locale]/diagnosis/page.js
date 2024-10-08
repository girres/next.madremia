import { getTranslations } from 'next-intl/server';

// Components.
import { FormEmbed } from '@/components/TypeForm';

export async function generateMetadata({ params: { locale = 'es' } }) {
  const t = await getTranslations({ locale, namespace: 'diagnosis.seo' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Page() {
  return (
    <div className='pt-10 px-5 lg:px-10'>
      <FormEmbed />
    </div>
  );
}
