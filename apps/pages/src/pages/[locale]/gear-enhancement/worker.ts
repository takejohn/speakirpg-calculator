import { calculateCDFIter } from 'speakirpg-calculator/gear-enhancement';
import type { ResultPoint, SimulationParams } from './types.js';

self.addEventListener('message', (ev) => {
	const params: SimulationParams = ev.data;

	let cost = 0;
	for (const probability of calculateCDFIter(params.levelFrom, params.levelTo, params.maxCost)) {
		const message: ResultPoint = {
			done: false,
			data: { cost, probability },
		};
		self.postMessage(message);
		cost++;
	}

	const message: ResultPoint = {
		done: true,
		data: undefined,
	}
	self.postMessage(message);
});
