// Dictionary.
import { getDictionary } from '@/app/dictionaries';

// Blocks components.
import {
  BlockHero,
  BlockProjects,
  BlockClients,
  BlockDiagnosis,
} from '@/components/Blocks';

export default async function Page({ params: { lang = 'es' } }) {
  const dict = await getDictionary(lang);
  return (
    <main className='main min-h-screen'>
      <h1 className='hidden'>{dict.home.title}</h1>
      <BlockHero dict={dict} />
      <BlockProjects dict={dict} />
      <BlockClients dict={dict} />
      <BlockDiagnosis dict={dict} />
    </main>
  );
}
