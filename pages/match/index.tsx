import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { fetchUserInformation } from "@/api";

export default function Match({
	accessId,
	nickname,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	if (!accessId) {
		return (
			<div>
				<b>{nickname}</b> 유저의 정보를 찾을 수 없습니다. 닉네임을 확인해주세요.
			</div>
		);
	}
	return (
		<div>
			{nickname}, {accessId}
		</div>
	);
}

export const getServerSideProps = (async context => {
	const { nickname } = context.query;

	let accessId;
	if (typeof nickname === "string") {
		accessId = await fetchUserInformation(nickname);
	}
	return {
		props: {
			accessId,
			nickname,
		},
	};
}) satisfies GetServerSideProps;
