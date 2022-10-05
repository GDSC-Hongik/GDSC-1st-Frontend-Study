import "./List.css"

import { useContext } from "react"
import { globalContext } from "../../globalContext"

import AddItemButton from "./AddItemButton"
import ToDoItem from "./ToDoItem"

function List() {
	const { globalState } = useContext(globalContext)

	return (
		<div className="list">
			<h2>TODO</h2>

			{Object.keys(globalState.todo).map((key) => (
				<ToDoItem key={key} todoKey={key} content={globalState.todo[key]} />
			))}

			<AddItemButton />
		</div>
	)
}

export default List
