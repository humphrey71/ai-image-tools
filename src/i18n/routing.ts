import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = {en: 'English',zh: '中文'} as const;

export type Locale = keyof typeof locales;

export const routing = defineRouting({
    locales: Object.keys(locales),
    defaultLocale:  Object.keys(locales)[0]
});
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);