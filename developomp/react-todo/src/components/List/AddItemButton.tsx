import "./AddItemButton.css"

import { useContext } from "react"
import { ActionsEnum, globalContext } from "../../globalContext"

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function AddItemButton() {
	const { dispatch } = useContext(globalContext)

	return (
		<button
			className="add-item"
			onClick={() => {
				dispatch({
					type: ActionsEnum.ADD_TODO,
				})
			}}
		>
			<FontAwesomeIcon icon={faPlus} />
		</button>
	)
}

export default AddItemButton
