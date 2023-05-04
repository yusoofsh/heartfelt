import "dotenv/config"
import { type Config } from "drizzle-kit"

const config: Config = {
	out: "./.drizzle",
	schema: "./src/server/database/schema.ts",
	connectionString: process.env.DATABASE_URL,
}

export default config
