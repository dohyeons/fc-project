import { fetchMatchDetails, fetchUserMatchIds } from "@/api";
import MatchData from "./MatchData";
import { useState } from "react";
import UserDivisions from "./UserDivisions";
import { MatchDetailType, UserInformationProps } from "@/type";
import ClassicMatch from "./ClassicMatch";

export default function UserInformation({
	nickname,
	accessId,
	userMaxDivisionData,
	matchDetail,
}: UserInformationProps) {
	const [matchDetailArr, setMatchDetailArr] = useState(matchDetail);
	const [classicMatchDetailArr, setClassicMatchDetailArr] =
		useState<MatchDetailType>([]);
	const [isClassic, setIsClassic] = useState(false);
	const [opponent, setOpponent] = useState("");

	const initialMatchDetailArr = matchDetailArr;

	async function handleTierListClick(matchType: number) {
		const matchIds = await fetchUserMatchIds(accessId, matchType);
		const matchDetail = await fetchMatchDetails(matchIds);
		setMatchDetailArr(matchDetail);
		if (matchType === 40) {
			setClassicMatchDetailArr(matchDetail);
			setIsClassic(true);
		} else {
			setIsClassic(false);
		}
	}

	function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setOpponent(e.target.value);
	}
	function searchHeadToHeadRecord() {
		// 닉네임 검색창을 비워뒀을 경우
		// 클래식 매치 전체 기록을 조회
		if (!opponent) {
			handleTierListClick(40);
		} else {
			// 비워두지 않았을 경우
			// 클래식 매치 기록에서 opponent를 닉네임으로 가진 상대와의 전적만을 남김
			console.log(initialMatchDetailArr);
			const filteredMatchDetailArr = classicMatchDetailArr.filter(
				matchDetail => {
					return (
						matchDetail.nickname1 === opponent ||
						matchDetail.nickname2 === opponent
					);
				}
			);
			setMatchDetailArr(filteredMatchDetailArr);
		}
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
				<ClassicMatch handleTierListClick={handleTierListClick} />
			</div>
			{isClassic && (
				<form
					onSubmit={e => {
						e.preventDefault();
						searchHeadToHeadRecord();
					}}
					className="w-full flex justify-center"
				>
					<input
						id="nickName"
						onChange={inputChange}
						className="outline outline-black outline-1 w-full max-w-xs"
						placeholder="닉네임을 입력하세요"
					/>
					<button>검색</button>
				</form>
			)}
			<div className="flex flex-col border border-black gap-2 items-center">
				{matchDetailArr.length ? (
					<MatchData matchDetail={matchDetailArr} nickname={nickname} />
				) : (
					<div>최근 경기 정보가 존재하지 않습니다!</div>
				)}
			</div>
		</div>
	);
}
