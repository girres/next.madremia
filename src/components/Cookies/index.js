'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

// Dictionary.
import { getDictionary } from '@/app/dictionaries';

const COOKIE_NAME = 'mm-cookie-accepted';

export const CookieBanner = ({ lang = 'es' }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [dict, setDict] = useState(null);

  useEffect(() => {
    // Obtiene el diccionario de la página
    const fetchData = async () => {
      const data = await getDictionary(lang);
      setDict(data?.cookies ?? {});
    };
    fetchData();
  }, []);

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

  if (!showBanner || !dict?.text1) return null; // No renderiza nada si la cookie ya está aceptada

  return (
    <div className='fixed left-0 lg:left-auto bottom-0 lg:bottom-2 right-0 lg:right-2 w-full lg:w-[500px] bg-mm-orange text-mm-beige p-4 z-50 rounded-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className='text-sm'>
          {dict.text1}
          <Link
            href='/legal/data-policy#cookies'
            className='text-lg font-bold underline'
          >
            {dict.text2}
          </Link>
          {dict.text3}
        </p>
        <button
          onClick={acceptCookies}
          className='btn btn-link text-mm-beige font-bold'
        >
          {dict?.textButton ?? 'Aceptar'}
        </button>
      </div>
    </div>
  );
};
