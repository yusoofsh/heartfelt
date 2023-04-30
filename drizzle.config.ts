import "dotenv/config"
import { type Config } from "drizzle-kit"

const config: Config = {
	out: "./.drizzle",
	schema: "./src/server/db/schema.ts",
	connectionString: process.env.DB_URL,
}

export default config
