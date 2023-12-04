export type DivisionAndMatchType = Record<string, string[] | string>;

// match/index.tsx
export type MatchDetailType = {
	matchDate: string[];
	nickname1: string;
	matchResult1: string;
	nickname2: string;
	matchResult2: string;
}[];

export interface MatchDataProps {
	matchDetail: MatchDetailType;
}

interface UserMaxDivisionData {
	matchType: number;
	division: number;
	achievementDate: string;
}

export interface UserDivisionsProps {
	userDivisionData: UserMaxDivisionData;
	handleTierListClick(matchType: number): Promise<void>;
}

export interface UserInformationProps {
	accessId: string;
	userMaxDivisionData: UserMaxDivisionData[];
	matchDetail: MatchDetailType;
}
