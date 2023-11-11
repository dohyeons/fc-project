import { matchType, division } from "@/constant";

interface DivisionData {
	matchType: number;
	division: number;
	achievementDate: string;
}
interface UserMaximumDivisionProps {
	userMaxDivisionData: DivisionData[];
}
export default function UserMaximumDivision({
	userMaxDivisionData,
}: UserMaximumDivisionProps) {
	return (
		<div className="border border-black 1px solid flex gap-3 animate-fadeIn">
			{userMaxDivisionData?.map(
				(obj: {
					matchType: number;
					division: number;
					achievementDate: string;
				}) => (
					<div
						key={obj.matchType}
						className="border 1px border-red-400 solid flex flex-col items-center gap-2 px-2 py-3"
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
			)}
		</div>
	);
}
