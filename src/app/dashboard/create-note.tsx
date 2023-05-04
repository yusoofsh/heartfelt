"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { api } from "~/lib/api/client"
import { Icons } from "~/components/icons"
import { Button } from "~/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"

export const createNoteSchema = z.object({
	title: z.string().min(1),
	text: z.string(),
})

type CreateNoteSchema = z.infer<typeof createNoteSchema>

export default function CreateNote() {
	const [open, setOpen] = useState(false)

	const { register, handleSubmit, reset } = useForm<CreateNoteSchema>({
		resolver: zodResolver(createNoteSchema),
	})

	const router = useRouter()

	const { mutate: createNote, isLoading } = api.database.createNote.useMutation({
		onSuccess() {
			setOpen(false)
			reset()
			router.refresh()
		},
	})

	const handleCreate = (data: CreateNoteSchema) => {
		createNote(data)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>Create Note</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-2xl">
				<form onSubmit={handleSubmit(handleCreate)}>
					<DialogHeader>
						<DialogTitle>Create Note</DialogTitle>
						<DialogDescription>
							{`Write your note and click save when you're done.`}
						</DialogDescription>
					</DialogHeader>
					<div
						className="grid gap-4 py-4"
						onSubmit={handleSubmit(handleCreate)}
					>
						<div className="grid gap-3">
							<Label htmlFor="title">Title</Label>
							<Input id="title" {...register("title")} />
						</div>
						<div className="grid gap-3">
							<Label htmlFor="text">Note</Label>
							<Textarea
								id="text"
								{...register("text")}
								className="min-h-[300px]"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button type="submit">
							Save note
							{isLoading && <Icons.loader className="animate-spin ml-2 w-4" />}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}
