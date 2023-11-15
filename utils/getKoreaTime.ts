export function getKoreanTime(date: string) {
	const koreanDate = new Date(date);
	const year = koreanDate.getFullYear();
	const month = koreanDate.getMonth() + 1;
	const day = koreanDate.getDate();
	const hours = koreanDate.getHours();
	const minutes = koreanDate.getMinutes();
	const seconds = koreanDate.getSeconds();
	return [
		`${year}년 ${month}월 ${day}일`,
		`${hours}시 ${minutes}분 ${seconds}초`,
	];
}
