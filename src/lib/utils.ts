import { clsx, type ClassValue } from "clsx"
import slugifyjs from "slugify"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
	const date = new Date(input)
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	})
}

export function slugify(string: string) {
	return slugifyjs(string, { lower: true })
}
