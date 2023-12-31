import { division, matchType } from "@/constant";
import { UserDivisionsProps } from "@/type";

export default function UserDivisions({
	userDivisionData,
	handleTierListClick,
}: UserDivisionsProps) {
	return (
		<div
			className="border 1px border-red-400 solid flex flex-col items-center gap-2 px-2 py-3 shadow-md hover:cursor-pointer rounded-lg transition duration-300 hover:-translate-y-1"
			onClick={() => {
				handleTierListClick(userDivisionData.matchType);
			}}
		>
			<h4 className="text-lg font-bold">
				{matchType[userDivisionData.matchType]}
			</h4>
			<div
				className={`${
					division[userDivisionData.division][1]
				} w-[100px] h-24 rounded-xl flex justify-center items-center font-semibold`}
			>
				{division[userDivisionData.division][0]}
			</div>
			<div className="text-center">
				<p>{userDivisionData.achievementDate[0]}</p>
			</div>
		</div>
	);
}
