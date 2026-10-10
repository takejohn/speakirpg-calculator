export type GearType = 'weapon' | 'armor';

export function getUnitGold(gearType: GearType): number {
	switch (gearType) {
		case 'weapon': {
			return 3000;
		}
		case 'armor': {
			return 1500;
		}
	}
}
