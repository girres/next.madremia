'use client';

import Image from 'next/image';
import { clsx } from 'clsx';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon } from '@heroicons/react/20/solid';

import { useMessages } from 'next-intl';
import { Link } from '@/i18n/routing';

const Comp = () => {
  const messages = useMessages();
  const items = messages.menu;
  // Ref for sticky header
  const navRef = useRef(null);

  const pathname = usePathname();
  const [, lang = 'es', pageName = '/'] = pathname.split('/');

  // Add "/" in the pageName as prefix if not exists.
  let finalPageName = pageName;
  if (pageName.charAt(0) !== '/') {
    finalPageName = `/${pageName}`;
  }

  useEffect(() => {
    const isSticky = () => {
      if (navRef?.current) {
        const { offsetHeight = 0 } = navRef?.current || {};
        navRef.current.style.minHeight = `${offsetHeight}px`;
        // Validate the scroll position
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > offsetHeight + 50) {
          document.body.classList.add('is-sticky');
        } else {
          document.body.classList.remove('is-sticky');
          navRef.current.style.minHeight = `auto`;
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

  const MenuLinks = () => (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.path}
            className={clsx(finalPageName === item.path && 'active')}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <header
      ref={navRef}
      className={clsx(finalPageName && finalPageName !== '/' && 'light')}
    >
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
          <ul className='main-menu hidden uppercase lg:flex space-x-4'>
            <MenuLinks />
          </ul>
          <div className='language-switch space-x-3 flex items-center'>
            <Link href={'/es'} className={clsx(lang === 'es' && 'active')}>
              ESP
            </Link>
            <Link href={'/en'} className={clsx(lang === 'en' && 'active')}>
              ENG
            </Link>
            <div className='mobile-menu block lg:hidden'>
              <div className='dropdown dropdown-end'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div className='icon'>
                    <Bars3Icon />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content bg-mm-beige rounded-box z-[1] mt-3 w-52 p-2 shadow'
                >
                  <MenuLinks />
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Comp;
