import "./src/env.mjs"

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	experimental: { appDir: true, typedRoutes: true },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "tailwindui.com",
				pathname: "/img/**",
			},
		],
	},
}

export default config
