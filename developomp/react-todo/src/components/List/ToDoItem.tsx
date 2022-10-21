import { useContext } from "react"
import { ActionsEnum, globalContext } from "../../globalContext"
import tw from "twin.macro"

import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ToDoItemComponent = tw.div`flex content-between rounded-md bg-zinc-500`
const TextArea = tw.textarea`m-2 bg-transparent resize-none`
const RemoveItemButton = tw.button`w-9 text-white rounded-md hover:bg-zinc-600`

type ItemProps = {
	todoKey: string
	content: string
}

function ToDoItem({ todoKey: key, content }: ItemProps) {
	const { dispatch } = useContext(globalContext)

	return (
		<ToDoItemComponent>
			<TextArea
				defaultValue={content}
				rows={1}
				onChange={(e) => {
					dispatch({
						type: ActionsEnum.UPDATE_TODO,
						payload: { key, content: e.target.value },
					})
				}}
			/>

			<RemoveItemButton
				onClick={() => {
					dispatch({
						type: ActionsEnum.REMOVE_TODO,
						payload: key,
					})
				}}
			>
				<FontAwesomeIcon icon={faX} />
			</RemoveItemButton>
		</ToDoItemComponent>
	)
}

export default ToDoItem
