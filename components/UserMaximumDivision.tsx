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
		<div className="border border-black 1px solid flex gap-3">
			{userMaxDivisionData?.map(
				(obj: {
					matchType: number;
					division: number;
					achievementDate: string;
				}) => (
					<div
						key={obj.matchType}
						className="border 1px border-red-400 solid flex flex-col items-center gap-2"
					>
						<h4 className="text-lg font-bold">{matchType[obj.matchType]}</h4>
						<div>{division[obj.division]}</div>
						<div>{obj.achievementDate}</div>
					</div>
				)
			)}
		</div>
	);
}
