'use client';

import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { setLocaleCookie } from '@/app/dictionaries';

const Comp = ({ dict = {} }) => {
  const pathname = usePathname();
  const lang = pathname.split('/')[1];

  // Set the locale cookie on first render.
  useEffect(() => {
    setLocaleCookie(lang ?? 'en');
  }, [lang]);

  return (
    <header className='bg-mm-black py-0 px-0 lg:p-5'>
      <nav className='mm-container flex items-center lg:items-start justify-between py-2'>
        <div className='logo'>
          <Link href='/'>
            <Image
              src='/images/logo.png'
              alt='MadreMía logo'
              width={150}
              height={100}
              quality={100}
              priority
              className='max-h-[80px] max-w-[80px] lg:max-h-[100px] lg:max-w-[150px]'
            />
          </Link>
        </div>
        <ul className='uppercase flex space-x-4'>
          <li>
            <Link href='/' className='text-white hover:text-gray-300'>
              {dict.menu.home}
            </Link>
          </li>
          <li>
            <Link href='/us' className='text-white hover:text-gray-300'>
              {dict.menu.us}
            </Link>
          </li>
          <li>
            <Link href='/diagnosis' className='text-white hover:text-gray-300'>
              {dict.menu.diagnosis}
            </Link>
          </li>
        </ul>
        <div className='language-switch space-x-3'>
          <Link
            href={'/es'}
            className={clsx(
              lang === 'es'
                ? 'fontExtraB text-mm-orange'
                : 'text-white hover:text-gray-300'
            )}
          >
            ESP
          </Link>
          <Link
            href={'/en'}
            className={clsx(
              lang === 'en'
                ? 'fontExtraB text-mm-orange'
                : 'text-white hover:text-gray-300'
            )}
          >
            ENG
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Comp;
