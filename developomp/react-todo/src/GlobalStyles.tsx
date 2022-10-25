import * as styled from "styled-components"

import { GlobalStyles as BaseStyles } from "twin.macro"

const CustomStyles = styled.createGlobalStyle``

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
)

export default GlobalStyles
