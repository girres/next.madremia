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
  const [, lang = 'es', pageName = null] = pathname.split('/');

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
    <header ref={navRef} className={clsx(pageName && 'light')}>
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
          <ul className='main-menu uppercase flex space-x-4'>
            <li>
              <Link
                href='/'
                className={clsx(
                  (pathname === '/es' || pathname === '/en') && 'active'
                )}
              >
                {dict.menu.home}
              </Link>
            </li>
            <li>
              <Link
                className={clsx(pathname.includes('/us') && 'active')}
                href='/us'
              >
                {dict.menu.us}
              </Link>
            </li>
            <li>
              <Link
                className={clsx(pathname.includes('/diagnosis') && 'active')}
                href='/diagnosis'
              >
                {dict.menu.diagnosis}
              </Link>
            </li>
          </ul>
          <div className='language-switch space-x-3'>
            <Link href={'/es'} className={clsx(lang === 'es' && 'active')}>
              ESP
            </Link>
            <Link href={'/en'} className={clsx(lang === 'en' && 'active')}>
              ENG
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Comp;
