import type { Messages } from '@/scripts/locales.js';

export const en = {
	$language: 'English',

	$app: 'Speaki RPG Calculator',

	language: 'Language',
	gearEnhancement: 'Gear Enhancement',
	calculationSettings: 'Calculation settings',
	startingEnhancementLevel: 'Starting enhancement level',
	targetEnhancementLevel: 'Target enhancement level',
	gearType: 'Gear type',
	weapon: 'Weapon',
	armor: 'Armor',
	maximumSpendingGold: 'Maximum gold to spend',
	calculate: 'Calculate',
	targetLevelReachingProbability: 'Probability of reaching the target level',
	targetLevelReachingPercentiles: 'Target level reaching percentiles',
	reachingProbability: 'Probability of reaching',
	requiredGold: 'Required gold',
	aboutSpentGoldHeading: 'About gold costs',
	aboutSpentGoldDescription: 'The gold cost for each enhancement is calculated as 3000 × (enhancement level) G for weapons and 1500 × (enhancement level) G for armor.',
	source: 'Source',
	speakirpg: 'Speaki RPG',
	spentGold: 'Gold spent',
	calculating: 'Calculating...',
	calculationCompleted: 'Calculation completed',
	errorInvalidLevel: 'The enhancement level must be an integer between 0 and 20',
	errorGoldNegativeOrNotInteger: 'The maximum gold to spend must be a non-negative integer',
	errorTargetLevelNotMoreThanStart: 'The target enhancement level must be higher than the starting enhancement level',
} satisfies Messages;
