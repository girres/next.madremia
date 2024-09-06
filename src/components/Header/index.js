'use client';

import Image from 'next/image';
import Link from 'next/link';
import { clsx } from 'clsx';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { setLocaleCookie } from '@/app/dictionaries';

const Comp = ({ dict = {} }) => {
  // Ref for sticky header
  const navRef = useRef(null);

  const pathname = usePathname();
  const lang = pathname.split('/')[1];

  // Set the locale cookie on first render.
  useEffect(() => {
    setLocaleCookie(lang ?? 'en');
  }, [lang]);

  useEffect(() => {
    const isSticky = () => {
      if (navRef?.current) {
        const { offsetHeight = 0 } = navRef?.current || {};
        // Set min-height to header dom element
        navRef.current.style.minHeight = `${offsetHeight}px`;

        // Validate the scroll position
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > offsetHeight + 20) {
          document.body.classList.add('is-sticky');
        } else {
          document.body.classList.remove('is-sticky');
        }
      }
    };

    function watchScroll() {
      window.addEventListener('scroll', isSticky);
    }

    watchScroll();

    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  return (
    <header ref={navRef} className=''>
      <div className='nav-wrapper bg-mm-black py-0 px-0 lg:p-5'>
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
              <Link
                href='/diagnosis'
                className='text-white hover:text-gray-300'
              >
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
      </div>
    </header>
  );
};

export default Comp;
