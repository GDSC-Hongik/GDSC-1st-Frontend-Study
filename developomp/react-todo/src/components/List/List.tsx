import { useContext } from "react"
import { globalContext } from "../../globalContext"
import tw from "twin.macro"

import AddItemButton from "./AddItemButton"
import ToDoItem from "./ToDoItem"

const ListComponent = tw.div`
	flex flex-col w-80 rounded-xl pt-3 px-5
	whitespace-nowrap gap-2 overflow-y-scroll
	bg-zinc-900
`

function List() {
	const { globalState } = useContext(globalContext)

	return (
		<ListComponent>
			<h2>TODO</h2>

			{Object.keys(globalState.todo).map((key) => (
				<ToDoItem key={key} todoKey={key} content={globalState.todo[key]} />
			))}

			<AddItemButton />
		</ListComponent>
	)
}

export default List
