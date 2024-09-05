'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { setLocaleCookie } from '@/app/dictionaries';

import Link from 'next/link';

const Comp = ({ dict = {} }) => {
  const pathname = usePathname();
  const lang = pathname.split('/')[1];

  // Set the locale cookie on first render.
  useEffect(() => {
    setLocaleCookie(lang ?? 'en');
  }, [lang]);

  return (
    <header className='bg-gray-800'>
      <nav className='container mx-auto flex items-center justify-between p-4'>
        <div className='text-white font-bold text-xl'>MadreMia</div>
        <ul className='flex space-x-4'>
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
          <li></li>
          <Link
            href={lang === 'es' ? '/en' : '/es'}
            className='text-white hover:text-gray-300'
          >
            {lang === 'es' ? 'ENG' : 'ESP'}
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Comp;
