// Dictionary.
import { getDictionary } from '@/app/dictionaries';

// Components.
import { FormEmbed } from '@/components/TypeForm';
// import TypeFormClone from '@/components/TypeForm/Clone';

export default async function Page({ params: { lang = 'es' } }) {
  // eslint-disable-next-line no-unused-vars
  const dict = await getDictionary(lang);

  return (
    <div className='pt-10 px-5 lg:px-10'>
      <FormEmbed />
      {/* <TypeFormClone /> */}
    </div>
  );
}
