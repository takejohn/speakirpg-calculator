export function joinPath(base: string, ...parts: string[]): string {
	let result = base;
	for (const part of parts) {
		if (!result.endsWith('/')) {
			result += '/';
		}
		result += part;
	}
	return result;
}

export function removePrefix(str: string, prefix: string): string {
	if (str.startsWith(prefix)) {
		return str.slice(prefix.length);
	} else {
		return str;
	}
}
