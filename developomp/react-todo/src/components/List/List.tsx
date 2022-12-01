import { useContext } from "react"
import { ActionsEnum, globalContext, listID } from "../../globalContext"
import tw from "twin.macro"

import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import AddItemButton from "./AddItemButton"
import ToDoItem from "./ToDoItem"

const ListTitle = tw.h2`text-white font-bold text-2xl mb-3`
const RemoveListButton = tw.button`relative text-white hover:bg-opacity-50 hover:bg-gray-700 active:bg-gray-800`

const ListComponent = tw.div`
	flex flex-col min-w-[20rem] h-full rounded-xl pt-3 px-5
	whitespace-nowrap gap-2 overflow-y-scroll
	bg-zinc-900
`

interface Props {
	listID: listID
}

function List({ listID }: Props) {
	const { globalState, dispatch } = useContext(globalContext)

	return (
		<ListComponent>
			<ListTitle>TODO</ListTitle>
			<RemoveListButton
				onClick={() => {
					dispatch({
						type: ActionsEnum.DEL_LIST,
						payload: { listID },
					})
				}}
			>
				<FontAwesomeIcon icon={faX} />
			</RemoveListButton>

			{Object.keys(globalState.todo[listID]).map((itemID) => (
				<ToDoItem key={itemID} itemID={itemID} listID={listID} />
			))}

			<AddItemButton listID={listID} />
		</ListComponent>
	)
}

export default List
