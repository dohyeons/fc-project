import { ReactNode } from "react";

export default function SubLayout({ children }: { children: ReactNode }) {
	return <div className="mt-10">{children}</div>;
}
