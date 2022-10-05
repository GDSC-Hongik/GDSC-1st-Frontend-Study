import "./index.css"

import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router-dom"
import { GlobalStore } from "./globalContext"

import App from "./App"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<GlobalStore>
			<BrowserRouter>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</BrowserRouter>
		</GlobalStore>
	</React.StrictMode>
)
