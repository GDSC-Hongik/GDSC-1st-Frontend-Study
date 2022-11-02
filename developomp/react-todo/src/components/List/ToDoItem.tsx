import { useContext } from "react"
import { useDebouncedCallback } from "use-debounce"
import { ActionsEnum, globalContext } from "../../globalContext"
import tw from "twin.macro"

import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ToDoItemComponent = tw.div`
	flex content-between rounded-md bg-transparent
	hover:bg-gray-700 hover:bg-opacity-50`

const TextArea = tw.textarea`m-2 bg-transparent resize-none font-bold text-2xl text-white`

const RemoveItemButton = tw.button`
	w-9 text-white rounded-r-md opacity-50
	hover:opacity-80
	active:opacity-100`

type ItemProps = {
	todoKey: string
	content: string
}

function ToDoItem({ todoKey: key, content }: ItemProps) {
	const { dispatch } = useContext(globalContext)
	const debounced = useDebouncedCallback((value) => {
		dispatch({
			type: ActionsEnum.UPDATE_TODO,
			payload: { key, content: value },
		})
	}, 500)

	return (
		<ToDoItemComponent>
			<TextArea
				defaultValue={content}
				rows={1}
				onChange={(e) => debounced(e.target.value)}
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
