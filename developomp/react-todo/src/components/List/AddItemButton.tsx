import { useContext } from "react"
import { ActionsEnum, globalContext } from "../../globalContext"
import tw from "twin.macro"

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AddItemButtonComponent = tw.button`rounded-full`

function AddItemButton() {
	const { dispatch } = useContext(globalContext)

	return (
		<AddItemButtonComponent
			onClick={() => {
				dispatch({
					type: ActionsEnum.ADD_TODO,
				})
			}}
		>
			<FontAwesomeIcon icon={faPlus} />
		</AddItemButtonComponent>
	)
}

export default AddItemButton
