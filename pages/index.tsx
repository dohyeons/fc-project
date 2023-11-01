import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
	const [nickName, setNickname] = useState("");
	const router = useRouter();

	function handleSubmit() {
		router.push(`/match?nickName=${nickName}`);
	}

	function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
		setNickname(e.target.value);
	}
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				handleSubmit();
				// router.push("/match");
			}}
		>
			<label htmlFor="nickName">닉네임을 입력하세요</label>
			<input
				id="nickName"
				onChange={e => {
					handleInput(e);
				}}
				className="outline outline-black outline-1 p-1"
			/>
		</form>
	);
}
