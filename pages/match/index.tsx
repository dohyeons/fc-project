import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
	fetchMatchDetails,
	fetchUserInformation,
	fetchUserMatchIds,
	fetchUserMaxDivision,
} from "@/api";
import UserInformation from "@/components/UserInformation";
import SubLayout from "@/components/SubLayout";
import UserNotFound from "@/components/UserNotFound";
import { MatchDetailType } from "@/type";
export default function Match({
	accessId,
	nickname,
	userMaxDivisionData,
	matchDetail,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	if (!accessId) {
		return <UserNotFound nickname={nickname} />;
	}
	return (
		<div className="flex flex-col items-center gap-10">
			<h1 className=" text-3xl font-extrabold animate-fadeIn">{nickname}</h1>
			<UserInformation
				nickname={nickname}
				accessId={accessId}
				userMaxDivisionData={userMaxDivisionData}
				matchDetail={matchDetail}
			/>
		</div>
	);
}

export const getServerSideProps = (async context => {
	let { nickname } = context.query;
	nickname = nickname as string;

	let accessId, userMaxDivisionData, matchIds;
	let matchDetail: MatchDetailType = [];
	accessId = await fetchUserInformation(nickname);

	if (accessId) {
		userMaxDivisionData = await fetchUserMaxDivision(accessId);
		matchIds = await fetchUserMatchIds(accessId, 50);
		if (matchIds.length !== 0) {
			matchDetail = await fetchMatchDetails(matchIds);
		}
	}
	return {
		props: {
			accessId,
			nickname,
			userMaxDivisionData: userMaxDivisionData || null,
			matchDetail: matchDetail,
		},
	};
}) satisfies GetServerSideProps;

Match.Layout = SubLayout;
