export async function fetchUserInformation(nickName: string) {
	const requestHeaders: HeadersInit = new Headers();
	requestHeaders.set("Content-Type", "application/json");
	requestHeaders.set(
		"Authorization",
		`${process.env.NEXT_PUBLIC_API_MAIN_KEY}`
	);

	try {
		const { accessId } = await fetch(
			`https://public.api.nexon.com/openapi/fconline/v1.0/users?nickname=${nickName}`,
			{ headers: requestHeaders }
		).then(res => res.json());
		return accessId;
	} catch (error) {
		return null;
	}
}
