// @ts-check
import { defineConfig } from 'astro/config';
import { DEFAULT_LOCALE, LOCALES } from '@/scripts/locales.js';

// https://astro.build/config
export default defineConfig({
	site: 'https://takejohn.github.io',
	base: '/speakirpg-calculator',
	i18n: {
		locales: [...LOCALES],
		defaultLocale: DEFAULT_LOCALE,
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
