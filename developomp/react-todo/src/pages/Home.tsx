import { useContext } from "react"
import tw from "twin.macro"
import { globalContext } from "../globalContext"
import AddListButton from "../components/List/AddListButton"

import List from "../components/List/List"

const ListContainerComponent = tw.div`flex overflow-x-scroll h-full gap-10 p-10 content-start items-center`

function Home() {
	const { globalState } = useContext(globalContext)

	return (
		<ListContainerComponent>
			{Object.keys(globalState.todo).map((listID) => (
				<List key={listID} listID={listID} />
			))}
			<AddListButton />
		</ListContainerComponent>
	)
}

export default Home
