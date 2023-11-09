import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
	const [nickName, setNickname] = useState("");
	const router = useRouter();

	function handleSubmit() {
		router.push(`/match?nickname=${nickName}`);
	}

	function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
		setNickname(e.target.value);
	}
	return (
		<div className="flex flex-col items-center justify-center h-screen w-screen gap-4">
			<h1 className="text-2xl font-semibold">너 X 못하잖아~</h1>
			<form
				onSubmit={e => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<input
					id="nickName"
					onChange={e => {
						handleInput(e);
					}}
					className="outline outline-black outline-1"
					required
					placeholder="닉네임을 입력하세요"
				/>
			</form>
		</div>
	);
}
