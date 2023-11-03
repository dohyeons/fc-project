export async function fetchUserInformation(nickName: string) {
	try {
		const { accessId } = await fetch(
			`https://public.api.nexon.com/openapi/fconline/v1.0/users?nickname=${nickName}`,
			{ headers: { Authorization: `${process.env.NEXT_PUBLIC_API_MAIN_KEY}` } }
		).then(res => res.json());
		return accessId || null;
	} catch {
		return null;
	}
}
