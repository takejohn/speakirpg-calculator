export function assertNumber(input: unknown): asserts input is number {
	if (typeof input != 'number') {
		throw new TypeError(`Expected a number: input = ${input}`);
	}
}

export function assertNonNegativeInteger(input: unknown): asserts input is number {
	assertNumber(input);
	if (input < 0 || !Number.isSafeInteger(input)) {
		throw new RangeError(`Expected a non-negative integer: input = ${input}`);
	}
}

export function assertIndex(input: unknown, length: number): asserts input is number {
	assertNumber(input);
	if (input < 0 || input >= length || !Number.isSafeInteger(input)) {
		throw new RangeError(`Index out of bounds: input = ${input}, length = ${length}`)
	}
}
