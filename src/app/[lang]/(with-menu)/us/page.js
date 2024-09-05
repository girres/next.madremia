// Dictionary.
import { getDictionary } from '@/dictionaries';

export default async function Page({ params: { lang = 'es' } }) {
  const dict = await getDictionary(lang);

  return (
    <main className='mm-container h-screen'>
      <h1>{dict?.us?.title}</h1>
    </main>
  );
}
