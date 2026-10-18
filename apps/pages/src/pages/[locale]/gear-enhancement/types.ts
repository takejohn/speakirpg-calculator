export type SimulationParams = {
	levelFrom: number;
	levelTo: number;
	maxCost: number;
};

export type ResultPoint = {
	done: false;
	data: {
		cost: number;
		probability: number;
	}
} | {
	done: true;
	data: undefined;
};

export type PageMessages = {
  spentGold: string;
  reachingProbability: string;
  calculating: string;
  calculationCompleted: string;
  errorInvalidLevel: string;
  errorGoldNegativeOrNotInteger: string;
  errorTargetLevelNotMoreThanStart: string;
};
