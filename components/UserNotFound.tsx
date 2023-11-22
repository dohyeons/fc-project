export default function UserNotFound({
	nickname,
}: {
	nickname: string | string[] | undefined;
}) {
	return (
		<div>
			<b>{nickname}</b> 유저의 정보를 찾을 수 없습니다. 닉네임을 확인해주세요.
		</div>
	);
}
