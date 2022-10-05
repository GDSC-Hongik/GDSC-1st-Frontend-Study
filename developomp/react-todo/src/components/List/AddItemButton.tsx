import "./AddItemButton.css"

import { useContext } from "react"
import { ActionsEnum, globalContext } from "../../globalContext"

function AddItemButton() {
	const { dispatch } = useContext(globalContext)

	return (
		<button
			className="add-item"
			onClick={() =>
				dispatch({
					type: ActionsEnum.ADD_TODO,
				})
			}
		>
			add item button
		</button>
	)
}

export default AddItemButton
