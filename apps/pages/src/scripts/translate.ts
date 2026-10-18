import { DEFAULT_LOCALE, LOCALES, type Locale, type Messages, type TranslateKey } from './locales.js';

import { ja } from '@/locales/ja.js';
import { en } from '@/locales/en.js';
import { kr } from '@/locales/kr.js';

const messages = {
	ja,
	en,
	kr,
};

export function useMessages(locale: Locale): (key: TranslateKey) => string {
	if (!LOCALES.includes(locale)) {
		const expectedLocalesString = LOCALES.map((locale) => `"${locale}"`).join(', ');
		throw new TypeError(`Unknown locale: "${locale}" (${expectedLocalesString})`);
	}
	const localeMessages: Partial<Messages> = messages[locale];
	const defaultLocaleMessages: Messages = messages[DEFAULT_LOCALE];
	return function $t(key: TranslateKey): string {
		const message = localeMessages[key] ?? defaultLocaleMessages[key];
		return message;
	}
}
