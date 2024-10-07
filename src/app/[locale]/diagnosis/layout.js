import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
// import { clsx } from 'clsx';

export const metadata = {
  title: 'Diagnosis',
  description: 'Diagnosis page',
};

export default async function Layout({ params: { locale = 'es' }, children }) {
  const t = await getTranslations({ locale, namespace: 'diagnosis' });
  return (
    <main className='mm-container h-auto min-h-screen relative bg-mm-black'>
      <div className='absolute  w-full h-full z-20 left-0 right-0 top-0 bottom-0'>
        <h1 className='hidden'>{t('title')}</h1>
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
            {/* <div className='language-switch space-x-3'>
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
            </div> */}
          </div>
          <div className='content'>{children}</div>
        </div>
      </div>
    </main>
  );
}
