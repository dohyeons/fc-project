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
			{matchDetail.map((el, idx) => (
				<div
					key={el.matchDate[1] + el.matchDate[0]}
					className="border border-violet-600 p-5 w-full flex items-center animate-fadeIn"
				>
					<div>{idx + 1}</div>
					<div className="border border-green-600 flex flex-col items-center">
						<p>{`${el.matchDate[0]} ${el.matchDate[1]}`}</p>
						<p>{`${el.nickname1}   ${el.matchResult1} vs ${el.nickname2}   ${el.matchResult2}`}</p>
					</div>
				</div>
			))}
		</>
	);
}
