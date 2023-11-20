import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
interface PageWithLayout {
	Layout?: React.ComponentType;
}
export default function App({ Component, pageProps }: AppProps) {
	const EmptyLayout = ({ children }: { children: ReactNode }) => (
		<>{children}</>
	);
	const SubLayout = (Component as PageWithLayout).Layout || EmptyLayout;

	return (
		<Layout>
			<SubLayout>
				<Component {...pageProps} />
			</SubLayout>
		</Layout>
	);
}
