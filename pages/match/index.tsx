import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
	fetchUserInformation,
	fetchUserMatchData,
	fetchUserMaxDivision,
} from "@/api";
import { division, matchType } from "@/constant";
export default function Match({
	accessId,
	nickname,
	userMaxDivisionData,
	matchData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	if (!accessId) {
		return (
			<div>
				<b>{nickname}</b> 유저의 정보를 찾을 수 없습니다. 닉네임을 확인해주세요.
			</div>
		);
	}
	return (
		<>
			<div>
				{nickname}, {accessId},
			</div>
			<div>
				<b>경기 정보</b>
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
				<b>공식 경기 id</b>
				{matchData?.map((matchId: string) => (
					<div key={matchId}>{matchId}</div>
				))}
			</div>
		</>
	);
}

export const getServerSideProps = (async context => {
	const { nickname } = context.query;

	let accessId, userMaxDivisionData, matchData;
	if (typeof nickname === "string") {
		accessId = await fetchUserInformation(nickname);
	}
	userMaxDivisionData = await fetchUserMaxDivision(accessId);
	matchData = await fetchUserMatchData(accessId);
	return {
		props: {
			accessId,
			nickname,
			userMaxDivisionData,
			matchData,
		},
	};
}) satisfies GetServerSideProps;
