import { Helmet } from "react-helmet-async"

import Header from "./components/Header"
import Toolbar from "./components/Toolbar"
import ListContainer from "./components/List/ListContainer"

function App() {
	return (
		<>
			<Helmet>
				<title>TODO</title>
			</Helmet>

			<Header />
			<Toolbar />
			<ListContainer />
		</>
	)
}

export default App
