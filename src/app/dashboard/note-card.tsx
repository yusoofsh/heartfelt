"use client"

import { useRouter } from "next/navigation"

import { api } from "~/lib/api/client"
import { type RouterOutputs } from "~/lib/api/types"
import { Icons } from "~/components/icons"
import { H3 } from "~/components/typography"
import { Button } from "~/components/ui/button"
import EditNote from "./edit-note"

type Props = Pick<
	RouterOutputs["database"]["getCurrentUserNotes"][0],
	"id" | "title" | "text"
>

export default function NoteCard({ id, title, text }: Props) {
	const router = useRouter()
	const { mutate: deleteNote, isLoading: isDeleting } =
		api.database.deleteNote.useMutation({ onSuccess: () => router.refresh() })
	return (
		<div className="grid md:flex md:items-center gap-5 md:justify-between border dark:border-stone-700 rounded p-4">
			<div className="">
				<H3>{title}</H3>
				<p className="line-clamp-2">{text}</p>
			</div>
			<div className="grid grid-cols-2 md:flex gap-4">
				<EditNote id={id} title={title} text={text} />
				<Button
					disabled={isDeleting}
					variation="destructive"
					onClick={() => deleteNote({ id })}
				>
					Delete
					{isDeleting && <Icons.loader className="animate-spin ml-2 w-4" />}
				</Button>
			</div>
		</div>
	)
}
