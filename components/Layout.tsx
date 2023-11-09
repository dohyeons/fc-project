import { ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div>
			<main className="mx-5">{children}</main>
		</div>
	);
}
