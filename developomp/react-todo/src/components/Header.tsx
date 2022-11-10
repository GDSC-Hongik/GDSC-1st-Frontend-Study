import tw from "twin.macro"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear, faHome } from "@fortawesome/free-solid-svg-icons"

import { globalContext } from "../globalContext"

const HeaderComponent = tw.header`flex w-full h-28 items-center justify-between px-8 bg-gray-700 text-gray-400 font-bold text-3xl`
const NavIconContainer = tw.div`flex gap-3 `
const NavLink = tw(Link)`hover:text-zinc-100`

function Header() {
	const { globalState } = useContext(globalContext)

	return (
		<HeaderComponent>
			pomp's todo | {globalState.pageTitle}
			<NavIconContainer>
				{globalState.weatherData.hourly.temperature_2m.at(-1) || ""}
				{globalState.weatherData.hourly_units.temperature_2m}
				<NavLink to="/">
					<FontAwesomeIcon icon={faHome} />
				</NavLink>
				<NavLink to="/settings">
					<FontAwesomeIcon icon={faGear} />
				</NavLink>
			</NavIconContainer>
		</HeaderComponent>
	)
}

export default Header
