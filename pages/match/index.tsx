import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { fetchUserInformation } from "@/api";

export default function Match({ accessId }: { accessId: number }) {
	const router = useRouter();
	const { nickName } = router.query;
	return (
		<div>
			{nickName}, {accessId}
		</div>
	);
}

export const getServerSideProps = (async context => {
	const { nickName } = context.query;

	let accessId;
	if (typeof nickName === "string") {
		accessId = await fetchUserInformation(nickName);
	}
	return {
		props: {
			accessId,
		},
	};
}) satisfies GetServerSideProps;
