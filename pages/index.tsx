export default function Home() {
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
			}}
		>
			<label htmlFor="nickName">닉네임을 입력하세요</label>
			<input id="nickName" className="outline outline-black outline-1 p-1" />
		</form>
	);
}
