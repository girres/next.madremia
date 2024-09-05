import dictionary from '@/dictionary.json';

export default function Page({ params: { locale = 'es' } }) {
  return (
    <main className='mm-container h-screen'>
      <h1>{dictionary[locale].home.title}</h1>
    </main>
  );
}
