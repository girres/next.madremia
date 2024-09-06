// Dictionary.
import { getDictionary } from '@/app/dictionaries';

// Component.
import {
  BlockUsHeading,
  BlockText,
  BlockProfiles,
  BlockServices,
} from '@/components/Blocks';

export default async function Page({ params: { lang = 'es' } }) {
  const dict = await getDictionary(lang);
  const data = dict?.us || {};
  const dataBlock = dict?.blocks?.us || {};
  const dataBlock2 = dict?.blocks?.us2 || {};
  const dataBlock3 = dict?.blocks?.us3 || {};
  const dataServices = dict?.blocks?.services || {};

  return (
    <main className='mm-container py-10'>
      <h1 className='hidden'>{data?.title}</h1>
      <BlockUsHeading data={dataBlock} />
      <BlockText data={dataBlock2} />
      <BlockProfiles data={dataBlock3} />
      <BlockServices data={dataServices} />
    </main>
  );
}
