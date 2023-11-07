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
		<>
			{userMaxDivisionData?.map(
				(obj: {
					matchType: number;
					division: number;
					achievementDate: string;
				}) => (
					<div key={obj.matchType}>
						{matchType[obj.matchType]}
						<div>{division[obj.division]}</div>
						<div>{obj.achievementDate}</div>
					</div>
				)
			)}
		</>
	);
}