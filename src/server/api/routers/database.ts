import { desc, eq } from "drizzle-orm"
import { z } from "zod"

import { slugify } from "~/lib/utils"
import { createNoteSchema } from "~/app/dashboard/create-note"
import { editNoteSchema } from "~/app/dashboard/edit-note"
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc"
import { notes } from "~/server/database/schema"

export const databaseRouter = createTRPCRouter({
	getCurrentUserNotes: protectedProcedure.query(
		({ ctx: { auth, database } }) => {
			const data = database
				.select()
				.from(notes)
				.where(eq(notes.user_id, auth.userId))
				.orderBy(desc(notes.created_at))
			return data
		}
	),
	createNote: protectedProcedure
		.input(createNoteSchema)
		.mutation(async ({ input, ctx: { auth, database } }) => {
			const result = await database.insert(notes).values({
				user_id: auth.userId,
				title: input.title,
				text: input.text,
				slug: slugify(input.title),
			})
			return result
		}),
	deleteNote: protectedProcedure
		.input(
			z.object({
				id: z.number(),
			})
		)
		.mutation(async ({ input, ctx: { database } }) => {
			const result = await database.delete(notes).where(eq(notes.id, input.id))
			return result
		}),
	editNote: protectedProcedure
		.input(editNoteSchema)
		.mutation(async ({ input, ctx: { database } }) => {
			const result = await database
				.update(notes)
				.set({
					title: input.title,
					text: input.text,
				})
				.where(eq(notes.id, input.id))
			return result
		}),
})
