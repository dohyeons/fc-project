import { getKoreanTime } from "./utils/getKoreaTime";

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
				const koreanDate = getKoreanTime(obj.achievementDate);
				return { ...obj, achievementDate: koreanDate };
			}
		);
	} catch {
		return null;
	}
}

export async function fetchUserMatchData(accessId: string) {
	try {
		const matchData = await fetch(
			`https://public.api.nexon.com/openapi/fconline/v1.0/users/${accessId}/matches?matchtype=50&offset=0&limit=10`,
			{ headers: { Authorization: `${process.env.NEXT_PUBLIC_API_MAIN_KEY}` } }
		).then(res => res.json());

		return matchData || null;
	} catch {
		return null;
	}
}

export async function fetchMatchDetails(matchIds: string[]) {
	const requests = matchIds.map(async id => {
		return await fetch(
			`https://public.api.nexon.com/openapi/fconline/v1.0/matches/${id}`,
			{
				headers: {
					Authorization: `${process.env.NEXT_PUBLIC_API_MAIN_KEY}`,
				},
			}
		);
	});
	const matchDetails: {
		matchDate: string;
		nickname1: string;
		matchResult1: string;
		nickname2: string;
		matchResult2: string;
	}[] = [];
	await Promise.all(requests)
		.then(responses => Promise.all(responses.map(r => r.json())))
		.then(response => {
			response.forEach(res => {
				const {
					matchDate,
					matchInfo: [
						{
							nickname: nickname1,
							matchDetail: { matchResult: matchResult1 },
						},
						{
							nickname: nickname2,
							matchDetail: { matchResult: matchResult2 },
						},
					],
				} = res;
				matchDetails.push({
					matchDate: getKoreanTime(matchDate),
					nickname1,
					matchResult1,
					nickname2,
					matchResult2,
				});
			});
		});
	return matchDetails;
}

// 챗 gpt가 작성해준 코드
// export async function fetchMatchDetails(matchIds: string[]) {
// 	try {
// 		const results = await Promise.all(
// 			matchIds.map(async matchId => {
// 				try {
// 					const response = await fetch(
// 						`https://public.api.nexon.com/openapi/fconline/v1.0/matches/${matchId}`,
// 						{
// 							headers: {
// 								Authorization: `${process.env.NEXT_PUBLIC_API_MAIN_KEY}`,
// 							},
// 						}
// 					);
// 					const {
// 						matchDate,
// 						matchInfo: [
// 							{
// 								nickname: nickname1,
// 								matchDetail: { matchResult: matchResult1 },
// 							},
// 							{
// 								nickname: nickname2,
// 								matchDetail: { matchResult: matchResult2 },
// 							},
// 						],
// 					} = await response.json();
// 					return {
// 						matchDate,
// 						nickname1,
// 						matchResult1,
// 						nickname2,
// 						matchResult2,
// 					};
// 				} catch {
// 					return null;
// 				}
// 			})
// 		);

// 		return results;
// 	} catch {
// 		return null;
// 	}
// }
