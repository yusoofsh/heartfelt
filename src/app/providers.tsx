"use client"

import { ThemeProvider } from "next-themes"

import { api } from "~/lib/api/client"

export function ClientProviders({ children }: PropsWithChildren) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<api.Provider>{children}</api.Provider>
		</ThemeProvider>
	)
}
