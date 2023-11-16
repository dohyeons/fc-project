interface MatchDataProps {
	matchDetail: {
		matchDate: string[];
		nickname1: string;
		matchResult1: string;
		nickname2: string;
		matchResult2: string;
	}[];
}

export default function MatchData({ matchDetail }: MatchDataProps) {
	return (
		<>
			{matchDetail.map(el => (
				<div key={el.matchDate[1]}>
					<p>{el.matchDate}</p>
					{`${el.nickname1}   ${el.matchResult1} vs ${el.nickname2}   ${el.matchResult2}`}
				</div>
			))}
		</>
	);
}
