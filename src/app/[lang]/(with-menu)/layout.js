import Header from '@/components/Header';

// Dictionary.
import { getDictionary } from '@/app/dictionaries';

export default async function Layout({ params: { lang = 'en' }, children }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Header dict={dict} />
      {children}
    </>
  );
}
