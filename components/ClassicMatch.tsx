import { division } from "@/constant";

export default function ClassicMatch({
	handleTierListClick,
}: {
	handleTierListClick: (matchType: number) => Promise<void>;
}) {
	return (
		<div
			className="border 1px border-red-400 solid flex flex-col items-center gap-2 px-2 py-3 shadow-md hover:cursor-pointer rounded-lg transition duration-300 hover:-translate-y-1"
			onClick={() => {
				handleTierListClick(40);
			}}
		>
			<h4 className="text-lg font-bold">클래식 매치</h4>
			<div className="bg-gray-600 w-[100px] h-24 rounded-xl flex justify-center items-center font-semibold">
				클래식 매치
			</div>
			<div className="text-center">
				<p>클래식 매치</p>
			</div>
		</div>
	);
}
