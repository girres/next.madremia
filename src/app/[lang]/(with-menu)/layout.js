import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Dictionary.
import { getDictionary } from '@/app/dictionaries';

export default async function Layout({ params: { lang = 'en' }, children }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <Header dict={dict} />
      {children}
      <Footer dict={dict} />
    </>
  );
}
