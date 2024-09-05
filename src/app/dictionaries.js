'use server';

import { cookies } from 'next/headers';

const LOCALE_COOKIE_NAME = 'mm_locale';

export async function setLocaleCookie(locale = 'en') {
  cookies().set(LOCALE_COOKIE_NAME, locale, { secure: true });
}

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale = 'en') => dictionaries[locale]();
