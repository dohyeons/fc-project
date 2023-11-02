import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { fetchUserInformation } from "@/api";

export default function Match({
	accessId,
	nickname,
}: {
	accessId: number;
	nickname: string;
}) {
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
	if (!accessId) {
		return { notFound: true };
	}
	return {
		props: {
			accessId,
			nickname,
		},
	};
}) satisfies GetServerSideProps;
