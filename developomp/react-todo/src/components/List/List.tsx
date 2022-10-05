import "./List.css"

import { useContext } from "react"
import { globalContext } from "../../globalContext"

function List() {
	const { globalState } = useContext(globalContext)

	return <div className="list">{globalState.todo.toString()}</div>
}

export default List
