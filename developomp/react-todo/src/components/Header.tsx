import tw from "twin.macro"

const HeaderComponent = tw.header`flex w-full h-28 items-center px-8 bg-gray-700 text-gray-400 font-bold text-3xl`

function Header() {
	return <HeaderComponent>pomp's todo</HeaderComponent>
}

export default Header
