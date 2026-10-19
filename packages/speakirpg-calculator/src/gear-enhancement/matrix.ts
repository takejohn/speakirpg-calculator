import { assertIndex, assertNonNegativeInteger } from './utils.js';

export class Matrix {
	#shape: readonly [rows: number, columns: number];

	#data: Float64Array;

	constructor(shape: readonly [rows: number, columns: number], initializer: (row: number, column: number) => number) {
		const [rows, columns] = shape;
		assertNonNegativeInteger(rows);
		assertNonNegativeInteger(columns);
		const data = new Float64Array(rows * columns);
		for (let i = 0 ; i < rows ; i++) {
			for (let j = 0 ; j < columns ; j++) {
				data[i * columns + j] = initializer(i, j);
			}
		}
		this.#shape = [rows, columns];
		this.#data = data;
	}

	get shape(): readonly [rows: number, columns: number] {
		return this.#shape;
	}

	get(row: number, column: number): number {
		const [rows, columns] = this.#shape;
		assertIndex(row, rows);
		assertIndex(column, columns);
		return this.#data[row * columns + column];
	}
}
