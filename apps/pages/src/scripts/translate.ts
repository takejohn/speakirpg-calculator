import { LOCALES, type Locale, type TranslateKey } from './locales.js';

import { ja } from '@/locales/ja.js';
import { en } from '@/locales/en.js';
import { kr } from '@/locales/kr.js';

const messages = {
	ja,
	en,
	kr,
};

export function useMessages(locale: Locale): (key: TranslateKey) => string {
	return function $t(key: TranslateKey): string {
		const message = messages[locale][key];
		return message;
	}
}
