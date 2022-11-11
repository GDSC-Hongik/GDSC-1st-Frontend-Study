import { useContext, useEffect } from "react"
import { Switch, Route, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet-async"

import Header from "./components/Header"

import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import Settings from "./pages/Settings"
import { ActionsEnum, globalContext } from "./globalContext"

function App() {
	const { dispatch } = useContext(globalContext)

	let location = useLocation()

	useEffect(() => {
		dispatch({ type: ActionsEnum.UPDATE_WEATHER })
		// update weather every minute
		const interval = setInterval(
			() => dispatch({ type: ActionsEnum.UPDATE_WEATHER }),
			1000 * 60
		)

		return () => {
			clearInterval(interval)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		dispatch({
			type: ActionsEnum.UPDATE_PATHNAME,
			payload: location.pathname,
		})

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location])

	return (
		<>
			<Helmet>
				<title>TODO </title>
			</Helmet>

			<Header />

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/settings" component={Settings} />
				<Route path="*" component={PageNotFound} />
			</Switch>
		</>
	)
}

export default App
