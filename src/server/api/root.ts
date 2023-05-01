import { databaseRouter } from "~/server/api/routers/database"
import { createTRPCRouter } from "~/server/api/trpc"

export const appRouter = createTRPCRouter({
	database: databaseRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
