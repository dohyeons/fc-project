import { fetchUserMatchData } from "@/api";
import { matchType, division } from "@/constant";

interface DivisionData {
	matchType: number;
	division: number;
	achievementDate: string;
}
interface UserMaximumDivisionProps {
	accessId: string;
	userMaxDivisionData: DivisionData[];
}
export default function UserMaximumDivision({
	accessId,
	userMaxDivisionData,
}: UserMaximumDivisionProps) {
	async function handleTierListClick(matchType: number) {
		const matchData = await fetchUserMatchData(accessId, matchType);
		console.log(matchData);
	}
	return (
		<div className="border border-black 1px solid flex gap-3 animate-fadeIn">
			{userMaxDivisionData.length ? (
				userMaxDivisionData.map(
					(obj: {
						matchType: number;
						division: number;
						achievementDate: string;
					}) => (
						<div
							key={obj.matchType}
							className="border 1px border-red-400 solid flex flex-col items-center gap-2 px-2 py-3 shadow-md hover:cursor-pointer"
							onClick={() => {
								handleTierListClick(obj.matchType);
							}}
						>
							<h4 className="text-lg font-bold">{matchType[obj.matchType]}</h4>
							<div
								className={`${
									division[obj.division][1]
								} w-[100px] h-24 rounded-xl flex justify-center items-center font-semibold`}
							>
								{division[obj.division][0]}
							</div>
							<div>{obj.achievementDate}</div>
						</div>
					)
				)
			) : (
				<div>등급 정보가 존재하지 않습니다!</div>
			)}
		</div>
	);
}
