interface MatchDataProps {
	matchData: string[];
	matchDetail:
		| {
				matchDate: string;
				nickname1: string;
				matchResult1: string;
				nickname2: string;
				matchResult2: string;
		  }[]
		| null;
}

export default function MatchData({ matchData, matchDetail }: MatchDataProps) {
	return (
		<>
			{matchData.length ? (
				matchData?.map((matchId: string) => <div key={matchId}>{matchId}</div>)
			) : (
				<div>최근 공식 경기 정보가 존재하지 않습니다!</div>
			)}
			{matchDetail?.map(el => (
				<div key={el.matchDate}>
					{`${el.nickname1}   ${el.matchResult1} vs ${el.nickname2}   ${el.matchResult2}`}
				</div>
			))}
		</>
	);
}
