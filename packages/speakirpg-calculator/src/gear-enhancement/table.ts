export class Table {
	#data: Float64Array;

	#rows: number;

	#columns: number;

	constructor(rows: number, columns: number) {
		validateLength(rows);
		validateLength(columns);
		this.#data = new Float64Array(rows * columns);
		this.#rows = rows;
		this.#columns = columns;
	}

	get rows(): number {
		return this.#rows;
	}

	get columns(): number {
		return this.#columns;
	}

	get(row: number, column: number): number {
		return this.#data[this.#toIndex(row, column)];
	}

	set(row: number, column: number, value: number): void {
		this.#data[this.#toIndex(row, column)] = value;
	}

	update(row: number, column: number, func: (oldValue: number) => number): void {
		const index = this.#toIndex(row, column);
		const oldValue = this.#data[index];
		const newValue = func(oldValue);
		this.#data[index] = newValue;
	}

	#toIndex(row: number, column: number): number {
		validateIndex(row, this.#rows);
		validateIndex(column, this.#columns);
		return this.#columns * row + column;
	}
}

function validateLength(length: number): void {
	if (length < 0) {
		throw new RangeError(`Invalid length: ${length}`)
	}
}

function validateIndex(value: number, length: number) {
	if (value < 0 || value >= length) {
		throw new RangeError(`Index ${value} out of bounds [0, ${length})`);
	}
}
