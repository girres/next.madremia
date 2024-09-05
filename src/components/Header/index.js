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
    <header className='bg-mm-black'>
      <nav className='mm-container flex items-center justify-between p-4'>
        <div className='logo'>
          <Link href='/'>
            <Image
              src='/images/logo.png'
              alt='MadreMía logo'
              width={100}
              height={100}
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
        <div className=''>
          <Link
            href={'/es'}
            className={clsx(
              'text-white hover:text-gray-300',
              lang === 'es' && 'fontExtraB text-mm-orange'
            )}
          >
            ESP
          </Link>
          <Link
            href={'/en'}
            className={clsx(
              'text-white hover:text-gray-300',
              lang === 'en' && 'fontExtraB text-mm-orange'
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
