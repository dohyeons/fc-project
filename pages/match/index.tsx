import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { fetchUserInformation, fetchUserMaxDivision } from "@/api";
import { division, matchType } from "@/constant";
export default function Match({
	accessId,
	nickname,
	userMaxDivisionData,
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
			</div>
		</>
	);
}

export const getServerSideProps = (async context => {
	const { nickname } = context.query;

	let accessId, userMaxDivisionData;
	if (typeof nickname === "string") {
		accessId = await fetchUserInformation(nickname);
	}
	userMaxDivisionData = await fetchUserMaxDivision(accessId);
	return {
		props: {
			accessId,
			nickname,
			userMaxDivisionData,
		},
	};
}) satisfies GetServerSideProps;
