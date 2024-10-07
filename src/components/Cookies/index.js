'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const COOKIE_NAME = 'mm-cookie-accepted';

export const CookieBanner = () => {
  const t = useTranslations('cookies');
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Revisa si la cookie ya ha sido aceptada
    const cookieAccepted = Cookies.get(COOKIE_NAME);
    if (!cookieAccepted) {
      setShowBanner(true); // Muestra el banner si no hay cookie
    }
  }, []);

  const acceptCookies = () => {
    // Establece la cookie de aceptación
    Cookies.set(COOKIE_NAME, 'true', {
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    });
    setShowBanner(false); // Oculta el banner después de la aceptación
  };

  if (!showBanner) return null; // No renderiza nada si la cookie ya está aceptada

  return (
    <div className='fixed left-0 lg:left-auto bottom-0 lg:bottom-2 right-0 lg:right-2 w-full lg:w-[500px] bg-mm-orange text-mm-beige p-4 z-50 rounded-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className='text-sm'>
          {t('text1')}
          <Link
            href='/legal/data-policy#cookies'
            className='text-lg font-bold underline'
          >
            {t('text2')}
          </Link>
          {t('text3')}
        </p>
        <button
          onClick={acceptCookies}
          className='btn btn-link text-mm-beige font-bold'
        >
          {t('textButton')}
        </button>
      </div>
    </div>
  );
};
