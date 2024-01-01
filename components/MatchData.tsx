import { MatchDataProps } from "@/type";

export default function MatchData({ matchDetail, nickname }: MatchDataProps) {
	return (
		<>
			{matchDetail.map((el, idx) => (
				<div
					key={el.matchDate[1] + el.matchDate[0]}
					className="border border-violet-600 p-5 w-full bg-red-300 flex items-center animate-fadeIn rounded-[10px] transition duration-300 hover:-translate-y-1"
				>
					<div>{idx + 1}</div>
					<div className="border border-green-600 flex flex-col items-center">
						<p>{`${el.matchDate[0]} ${el.matchDate[1]}`}</p>
						<p>
							{el.nickname1 === nickname
								? `${el.matchResult2} vs ${el.nickname2}`
								: `${el.matchResult1} vs ${el.nickname1}`}
						</p>
					</div>
				</div>
			))}
		</>
	);
}
