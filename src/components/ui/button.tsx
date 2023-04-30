import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"
import { Icons } from "../icons"

const buttonVariants = cva(
	"active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 dark:hover:bg-stone-800 dark:hover:text-stone-100 disabled:opacity-50 dark:focus:ring-stone-400 disabled:pointer-events-none dark:focus:ring-offset-stone-900 data-[state=open]:bg-stone-100 dark:data-[state=open]:bg-stone-800",
	{
		variants: {
			variation: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "underline-offset-4 hover:underline text-primary",
			},
			size: {
				default: "h-10 py-2 px-4",
				sm: "h-9 px-2 rounded-md",
				lg: "h-11 px-8 rounded-md",
			},
		},
		defaultVariants: {
			variation: "default",
			size: "default",
		},
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	loading?: boolean
	loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variation, size, loading, loadingText, children, ...props },
		ref
	) => {
		return (
			<button
				className={cn(buttonVariants({ variation, size, className }))}
				ref={ref}
				{...props}
			>
				{loading && <Icons.loader className="mr-2 h-4 w-4 animate-spin" />}
				{loading && loadingText ? loadingText : children}
			</button>
		)
	}
)

Button.displayName = "Button"

export { Button, buttonVariants }
