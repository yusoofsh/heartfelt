import { SignUp } from "@clerk/nextjs/app-beta"

export default function Page() {
	return <SignUp afterSignUpUrl="/dashboard" signInUrl="/sign-in" />
}

export const runtime = "edge"
export const revalidate = 0
