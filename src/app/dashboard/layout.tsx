import Link from "next/link"
import { UserButton } from "@clerk/nextjs/app-beta"

import { Icons } from "~/components/icons"
import { ThemeToggle } from "~/components/theme-toggle"
import { buttonVariants } from "~/components/ui/button"

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className="container">
			<div className="mb-5 flex items-center justify-between py-4 border-b dark:border-b-stone-700">
				<span className="font-bold text-2xl">Dashboard</span>
				<div className="flex gap-4 items-center">
					<ThemeToggle />
					<Link
						href="/"
						className={buttonVariants({ variation: "ghost", size: "sm" })}
					>
						<Icons.home />
					</Link>
					<UserButton afterSignOutUrl="/" />
				</div>
			</div>
			{children}
		</div>
	)
}
