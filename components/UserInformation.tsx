import { fetchMatchDetails, fetchUserMatchIds } from "@/api";
import MatchData from "./MatchData";
import { useState } from "react";
import UserDivisions from "./UserDivisions";

interface DivisionData {
	matchType: number;
	division: number;
	achievementDate: string;
}
interface UserInformationProps {
	accessId: string;
	userMaxDivisionData: DivisionData[];
	matchDetail: {
		matchDate: string[];
		nickname1: string;
		matchResult1: string;
		nickname2: string;
		matchResult2: string;
	}[];
}
export default function UserInformation({
	accessId,
	userMaxDivisionData,
	matchDetail,
}: UserInformationProps) {
	const [matchDetailArr, setMatchDetailArr] = useState(matchDetail);

	async function handleTierListClick(matchType: number) {
		const matchData = await fetchUserMatchIds(accessId, matchType);
		const matchDetail = await fetchMatchDetails(matchData);
		setMatchDetailArr(matchDetail);
	}
	return (
		<div className="flex flex-col gap-10">
			<div className="border border-black 1px solid flex gap-5 animate-fadeIn justify-center">
				{userMaxDivisionData.length ? (
					userMaxDivisionData.map(userDivisionData => (
						<UserDivisions
							key={
								userDivisionData.achievementDate[0] +
								userDivisionData.achievementDate[1]
							}
							userDivisionData={userDivisionData}
							handleTierListClick={handleTierListClick}
						/>
					))
				) : (
					<div>유저의 등급 정보가 존재하지 않습니다!</div>
				)}
			</div>
			<div className="flex flex-col border border-black gap-2 items-center">
				{matchDetailArr.length ? (
					<MatchData matchDetail={matchDetailArr} />
				) : (
					<div>최근 경기 정보가 존재하지 않습니다!</div>
				)}
			</div>
		</div>
	);
}
