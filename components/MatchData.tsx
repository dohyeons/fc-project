interface MatchDataProps {
	matchData: string[];
	matchDetail: {
		matchDate: string;
		nickname1: string;
		matchResult1: string;
		nickname2: string;
		matchResult2: string;
	}[];
}

export default function MatchData({ matchData, matchDetail }: MatchDataProps) {
	return (
		<>
			{matchDetail.map(el => (
				<div key={el.matchDate}>
					{`${el.nickname1}   ${el.matchResult1} vs ${el.nickname2}   ${el.matchResult2}`}
				</div>
			))}
		</>
	);
}
