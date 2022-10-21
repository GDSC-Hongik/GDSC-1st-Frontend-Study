import tw from "twin.macro"

import List from "./List"

const ListContainerComponent = tw.div`flex h-full gap-10 p-10 content-start bg-zinc-200`

function ListContainer() {
	return (
		<ListContainerComponent>
			<List />
		</ListContainerComponent>
	)
}

export default ListContainer
