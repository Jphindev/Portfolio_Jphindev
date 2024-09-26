import type { Metadata } from "next";
import { ubuntu, ubuntu_mono, galindo } from "@/app/ui/fonts";
import "./globals.css";
import Header from "@/components/Header";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// METADATA
export const metadata: Metadata = {
	title: "Jphindev’s Portfolio",
	description:
		"Portfolio de Jean-Philippe Herfeld (Jphindev), dévelopeur intégrateur web Next.js, React.js, Typescript et TailwindCSS, basé à Metz 57000 ou télétravail.",
	keywords: [
		"portfolio",
		"Jean-Philippe Herfeld",
		"jphindev",
		"developeur web",
		"intégrateur web",
		"next.js",
		"react.js",
		"typescript",
		"tailwindcss",
		"Metz",
		"télétravail",
	],
	creator: "Jphindev",
	metadataBase: new URL("https://jphindev.com/"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Jphindev’s portfolio",
		description:
			"Portfolio de Jean-Philippe Herfeld (Jphindev), dévelopeur intégrateur web Next.js, React.js, Typescript et TailwindCSS, basé à Metz ou télétravail.",
		url: "https://jphindev.com/",
		type: "website",
		siteName: "Jphindev’s portfolio",
		images: [
			{
				url: "/photos/jphindevOG.webp",
				width: 1280,
				height: 720,
				alt: "jphindev’s preview",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="fr"
			className={`${ubuntu.variable} ${ubuntu_mono.variable} ${galindo.variable}`}
		>
			<GoogleAnalytics />
			<body className="h-screen mx-auto font-ubuntu text-lg text-light bg-dark dark:text-dark dark:bg-light">
				<div className="bg-light/25 dark:bg-highdark/25 absolute top-[50rem] -z-10 right-0 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
				<div className="bg-light/25 dark:bg-highdark/25 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]"></div>

				<Header />
				<main className="pb-40">{children}</main>
			</body>
		</html>
	);
}
