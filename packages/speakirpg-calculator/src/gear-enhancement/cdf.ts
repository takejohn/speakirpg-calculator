import { getProbabilities } from './probabilities.js';
import { Table } from './table.js';

class State {
	#maxCost: number;

	#levelTo: number;

	#table: Table;

	constructor(maxCost: number, levelTo: number) {
		this.#maxCost = maxCost;
		this.#levelTo = levelTo;
		this.#table = new Table(maxCost + 1, levelTo + 1);
	}

	get(cost: number, level: number): number {
		return this.#table.get(cost, level);
	}

	set(cost: number, level: number, probability: number): void {
		this.#table.set(cost, level, probability);
	}

	update(cost: number, level: number, func: (oldProbability: number) => number): void {
		this.#table.update(cost, level, func);
	}

	get maxCost(): number {
		return this.#maxCost;
	}

	get levelTo(): number {
		return this.#levelTo;
	}

	levelSum(level: number): number {
		let result = 0.0;
		const maxCost = this.maxCost;
		for (let cost = 0 ; cost <= maxCost ; cost++) {
			result += this.get(cost, level);
		}
		return result;
	}
}

export function calculateCDF(levelFrom: number, levelTo: number, maxCost: number): { cost: number; probability: number; }[] {
	const iter = calculateCDFIter(levelFrom, levelTo, maxCost);

	const result: { cost: number; probability: number; }[] = [];

	let cost = 0;
	for (const probability of iter) {
		result.push({ cost, probability });
		cost++;
	}

	return result;
}

export function* calculateCDFIter(levelFrom: number, levelTo: number, maxCost: number): Generator<number, void, unknown> {
	let state = new State(maxCost, levelTo);

	// When the consumed cost is 0, the level is always the same as it was at the start.
	state.set(0, levelFrom, 1.0);
	yield state.levelSum(levelTo);

	for (let cost = 1 ; cost <= maxCost ; cost++) {
		transition(state, cost);
		yield state.levelSum(levelTo);
	}
}

function transition(state: State, currentCost: number) {
	const levelTo = state.levelTo;

	for (let level = 0 ; level < levelTo ; level++) {
		const nextLevel = level + 1;
		const prevCost = currentCost - nextLevel;
		if (prevCost < 0) {
			continue;
		}
		const upgradeProbabilities = getProbabilities(nextLevel);
		const prevProbability = state.get(prevCost, level);
		state.set(prevCost, level, 0);
		// upgrade
		state.update(currentCost, nextLevel, (x) => x + prevProbability * upgradeProbabilities.success);
		// keep
		state.update(currentCost, level, (x) => x + prevProbability * upgradeProbabilities.keep);
		if (level > 0) {
			// drop
			state.update(currentCost, level - 1, (x) => x + prevProbability * upgradeProbabilities.drop);
		}
	}
}
