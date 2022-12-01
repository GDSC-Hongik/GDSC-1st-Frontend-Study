import { useContext } from "react"
import { ActionsEnum, globalContext } from "../../globalContext"
import tw from "twin.macro"

import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AddListButtonComponent = tw.button`h-12 w-12 min-w-[3rem] rounded-full text-white bg-gray-700 hover:bg-opacity-50 hover:bg-gray-700 active:bg-gray-800`

function AddListButton() {
	const { dispatch } = useContext(globalContext)

	return (
		<AddListButtonComponent
			onClick={() => {
				dispatch({
					type: ActionsEnum.ADD_LIST,
				})
			}}
		>
			<FontAwesomeIcon icon={faPlus} />
		</AddListButtonComponent>
	)
}

export default AddListButton
