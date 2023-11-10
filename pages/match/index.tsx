import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
	fetchMatchDetails,
	fetchUserInformation,
	fetchUserMatchData,
	fetchUserMaxDivision,
} from "@/api";
import UserMaximumDivision from "@/components/UserMaximumDivision";
import MatchData from "@/components/MatchData";
export default function Match({
	accessId,
	nickname,
	userMaxDivisionData,
	matchData,
	matchDetail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	if (!accessId) {
		return (
			<div>
				<b>{nickname}</b> 유저의 정보를 찾을 수 없습니다. 닉네임을 확인해주세요.
			</div>
		);
	}
	return (
		<div className="flex flex-col items-center">
			<h1 className=" text-3xl font-extrabold animate-fadeIn">{nickname}</h1>
			<div>
				<b>유저 정보</b>
				<UserMaximumDivision userMaxDivisionData={userMaxDivisionData} />
				<b>공식 경기 id</b>
				<MatchData matchData={matchData} matchDetail={matchDetail} />
			</div>
		</div>
	);
}

export const getServerSideProps = (async context => {
	const { nickname } = context.query;

	let accessId, userMaxDivisionData, matchData, matchDetail;
	if (typeof nickname === "string") {
		accessId = await fetchUserInformation(nickname);
	}
	if (accessId) {
		userMaxDivisionData = await fetchUserMaxDivision(accessId);
		matchData = await fetchUserMatchData(accessId);
		if (matchData.length !== 0) {
			matchDetail = await fetchMatchDetails(matchData);
		}
	}
	return {
		props: {
			accessId,
			nickname,
			userMaxDivisionData: userMaxDivisionData || null,
			matchData: matchData || null,
			matchDetail: matchDetail || null,
		},
	};
}) satisfies GetServerSideProps;
