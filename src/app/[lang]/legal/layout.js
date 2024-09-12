import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

// Dictionary.
import { getDictionary } from '@/app/dictionaries';

export default async function Layout({ params: { lang = 'en' }, children }) {
  const dict = await getDictionary(lang);
  return (
    <>
      <main className='mm-container h-auto min-h-screen relative'>
        <div className='header p-5 flex items-center justify-center flex-col'>
          <div className='logo'>
            <Link href='/'>
              <Image
                src='/images/logo.png'
                alt='MadreMía logo'
                width={150}
                height={100}
                quality={100}
                priority
                className='max-h-[100px] max-w-[100px] lg:max-h-[100px] lg:max-w-[150px]'
              />
            </Link>
          </div>
        </div>
        <div className='py-20 text-sm min-h-screen max-w-[800px] mx-auto px-5'>
          {children}
        </div>
      </main>
      <Footer dict={dict} />
    </>
  );
}
