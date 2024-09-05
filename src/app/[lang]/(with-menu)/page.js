// Dictionary.
import { getDictionary } from '@/app/dictionaries';

export default async function Page({ params: { lang = 'es' } }) {
  const dict = await getDictionary(lang);
  return (
    <main className='mm-container h-screen'>
      <h1>{dict.home.title}</h1>
    </main>
  );
}
