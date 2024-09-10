// Dictionary.
import { getDictionary } from '@/app/dictionaries';

// Components.
import { FormEmbed } from '@/components/TypeForm';
// import TypeFormClone from '@/components/TypeForm/Clone';

export async function generateMetadata({ params: { lang = 'es' } }) {
  const dict = await getDictionary(lang);
  const data = dict?.diagnosis || {};
  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default async function Page() {
  // const dict = await getDictionary(lang);

  return (
    <div className='pt-10 px-5 lg:px-10'>
      <FormEmbed />
      {/* <TypeFormClone /> */}
    </div>
  );
}
