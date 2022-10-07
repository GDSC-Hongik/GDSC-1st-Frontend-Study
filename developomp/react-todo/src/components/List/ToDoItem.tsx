import "./ToDoItem.scss"

import { useContext } from "react"
import { ActionsEnum, globalContext } from "../../globalContext"

import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type ItemProps = {
	todoKey: string
	content: string
}

function ToDoItem({ todoKey: key, content }: ItemProps) {
	const { dispatch } = useContext(globalContext)

	return (
		<div className="todo-item">
			<textarea
				defaultValue={content}
				rows={1}
				onChange={(e) => {
					dispatch({
						type: ActionsEnum.UPDATE_TODO,
						payload: { key, content: e.target.value },
					})
				}}
			/>

			<button
				className="remove-item"
				onClick={() => {
					dispatch({
						type: ActionsEnum.REMOVE_TODO,
						payload: key,
					})
				}}
			>
				<FontAwesomeIcon icon={faX} />
			</button>
		</div>
	)
}

export default ToDoItem
