import type { GetStaticPaths } from 'astro';
import { ja } from '@/locales/ja.ts';

export type Locale = typeof LOCALES[number];

export type TranslateKey = keyof Messages;

export type Messages = typeof ja;

export const LOCALES = ['ja', 'en', 'kr'] as const;

export const DEFAULT_LOCALE = 'ja' satisfies Locale;

export const getStaticPaths = (() => 
	LOCALES.map((locale) => ({ params: { locale } }))
) satisfies GetStaticPaths;
