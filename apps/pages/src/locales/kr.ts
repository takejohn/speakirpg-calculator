import type { Messages } from '@/scripts/locales.js';

export const kr = {
	$language: '한국어',

	$app: '스피키 키우기 계산기',

	language: '언어',
	gearEnhancement: '장비 간화',
	calculationSettings: '계산 설정',
	startingEnhancementLevel: '시작 강화 단계',
	targetEnhancementLevel: '목표 강화 단계',
	gearType: '장비 종류',
	weapon: '무기',
	armor: '방어구',
	maximumSpendingGold: '최대 소비 골드',
	calculate: '계산',
	targetLevelReachingProbability: '목표 단계 도달 확률',
	targetLevelReachingPercentiles: '목표 단계 도달 백분위',
	reachingProbability: '도달 확률',
	requiredGold: '필요 골드',
	aboutSpentGoldHeading: '소비 골드에 대하여',
	aboutSpentGoldDescription: '강화 시 소비되는 골드는 무기의 경우 3000 × (강화 레벨) G, 방어구의 경우 1500 × (강화 레벨) G로 계산합니다.',
	source: '소스',
	speakirpg: '스피키 키우기',
	spentGold: '소비 골드',
	calculating: '계산 중...',
	calculationCompleted: '계산 완료',
	errorInvalidLevel: '강화 단계는 0 이상 20 이하의 정수여야 합니다',
	errorGoldNegativeOrNotInteger: '최대 소비 골드 0 이상의 정수여야 합니다',
	errorTargetLevelNotMoreThanStart: '목표 강화 단계는 시작 강화 단계보다 커야 합니다',
} satisfies Partial<Messages>;
