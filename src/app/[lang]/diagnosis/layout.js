import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx';

export const metadata = {
  title: 'Diagnosis',
  description: 'Diagnosis page',
};

// Dictionary.
import { getDictionary } from '@/app/dictionaries';

export default async function Layout({ params: { lang = 'es' }, children }) {
  const dict = await getDictionary(lang);
  return (
    <main className='mm-container h-auto min-h-screen relative bg-mm-black'>
      {/* <Image
        src='/images/bgs/1.jpg'
        alt={'D Hero'}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        sizes='100vw'
        priority
        quality={100}
        className='z-10'
      /> */}
      <div className='absolute  w-full h-full z-20 left-0 right-0 top-0 bottom-0'>
        <h1 className='hidden'>{dict?.diagnosis?.title}</h1>
        <div className='w-full'>
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
            <div className='language-switch space-x-3'>
              <Link
                href={'/es/diagnosis'}
                className={clsx(
                  lang === 'es'
                    ? 'fontExtraB active'
                    : 'text-white hover:text-gray-300'
                )}
              >
                ESP
              </Link>
              <Link
                href={'/en/diagnosis'}
                className={clsx(
                  lang === 'en'
                    ? 'fontExtraB active'
                    : 'text-white hover:text-gray-300'
                )}
              >
                ENG
              </Link>
            </div>
          </div>
          <div className='content'>{children}</div>
        </div>
      </div>
    </main>
  );
}
