import { useContext } from "react"
import { globalContext } from "../../globalContext"
import tw from "twin.macro"

import AddItemButton from "./AddItemButton"
import ToDoItem from "./ToDoItem"

const ListTitle = tw.h2`text-white font-bold text-2xl mb-3`

const ListComponent = tw.div`
	flex flex-col w-80 rounded-xl pt-3 px-5
	whitespace-nowrap gap-2 overflow-y-scroll
	bg-zinc-900
`

function List() {
	const { globalState } = useContext(globalContext)

	return (
		<ListComponent>
			<ListTitle>TODO</ListTitle>

			{Object.keys(globalState.todo).map((key) => (
				<ToDoItem key={key} todoKey={key} content={globalState.todo[key]} />
			))}

			<AddItemButton />
		</ListComponent>
	)
}

export default List
