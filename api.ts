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

export async function fetchUserMaxDivision(accessId: string) {
	try {
		const divisionData = await fetch(
			`https://public.api.nexon.com/openapi/fconline/v1.0/users/${accessId}/maxdivision`,
			{ headers: { Authorization: `${process.env.NEXT_PUBLIC_API_MAIN_KEY}` } }
		).then(res => res.json());
		return divisionData.map(
			(obj: {
				matchType: number;
				division: number;
				achievementDate: string;
			}) => {
				const date = new Date(obj.achievementDate);
				const year = date.getFullYear();
				const month = date.getMonth() + 1;
				const day = date.getDate();
				return { ...obj, achievementDate: `${year}년 ${month}월 ${day}일` };
			}
		);
	} catch {
		return null;
	}
}
