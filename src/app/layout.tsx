import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs/app-beta/client"

import "~/styles/globals.css"
import { siteConfig } from "~/config/site"
import { cn } from "~/lib/utils"
import { Analytics } from "~/components/analytics"
import { env } from "~/env.mjs"
import { ClientProviders } from "./providers"

const fontSans = Inter({
	weight: ["400", "500", "600", "800", "900"],
	subsets: ["latin"],
})

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ["Scratchpad", "Social"],
	authors: [
		{
			name: siteConfig.maker,
			url: "",
		},
	],
	creator: siteConfig.maker,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	openGraph: {
		type: "website",
		locale: "id_ID",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		creator: "@yusoofsh",
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
}

type RootLayoutProps = PropsWithChildren

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="id" suppressHydrationWarning>
			<head />
			<ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
				<body
					className={cn(
						"min-h-screen bg-background antialiased",
						fontSans.className
					)}
				>
					<ClientProviders>
						<main className="relative flex min-h-screen flex-col">
							<div className="flex-1">{children}</div>
						</main>
					</ClientProviders>
					<Analytics />
				</body>
			</ClerkProvider>
		</html>
	)
}
