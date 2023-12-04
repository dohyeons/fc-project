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
