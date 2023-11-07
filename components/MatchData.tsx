interface MatchDataProps {
	matchData: string[];
}

export default function MatchData({ matchData }: MatchDataProps) {
	return (
		<>
			{matchData.length ? (
				matchData?.map((matchId: string) => <div key={matchId}>{matchId}</div>)
			) : (
				<div>최근 공식 경기 정보가 존재하지 않습니다!</div>
			)}
		</>
	);
}
