import { useContext } from "react"
import { useDebouncedCallback } from "use-debounce"
import { ActionsEnum, globalContext, itemID, listID } from "../../globalContext"
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

interface Props {
	listID: listID
	itemID: itemID
}

function ToDoItem({ listID, itemID }: Props) {
	const { globalState, dispatch } = useContext(globalContext)
	const debounced = useDebouncedCallback((value) => {
		dispatch({
			type: ActionsEnum.UPDATE_ITEM,
			payload: { listID, itemID, content: value },
		})
	}, 500)

	return (
		<ToDoItemComponent>
			<TextArea
				defaultValue={globalState.todo[listID][itemID]}
				rows={1}
				onChange={(e) => debounced(e.target.value)}
			/>

			<RemoveItemButton
				onClick={() => {
					dispatch({
						type: ActionsEnum.DEL_ITEM,
						payload: { listID, itemID },
					})
				}}
			>
				<FontAwesomeIcon icon={faX} />
			</RemoveItemButton>
		</ToDoItemComponent>
	)
}

export default ToDoItem
