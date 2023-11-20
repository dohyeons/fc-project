import { ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div>
			<main className="mx-5 mt-10">{children}</main>
		</div>
	);
}
