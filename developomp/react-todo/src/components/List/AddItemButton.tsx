import { useContext } from "react"
import { ActionsEnum, globalContext } from "../../globalContext"
import tw from "twin.macro"

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AddItemButtonComponent = tw.button`h-10 text-white hover:bg-opacity-50 hover:bg-gray-700 active:bg-gray-800`

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
