import "./index.css"
import "semantic-ui-css/semantic.min.css"

import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router-dom"
import { GlobalStore } from "./globalContext"

import App from "./App"

// 않이 대체 왜인지는 모르겠지만 strict모드를 사용하면 global state를 사용할 때 버그가 있다네요
// https://github.com/facebook/react/issues/16295#issuecomment-606843399
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<GlobalStore>
		<BrowserRouter>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</BrowserRouter>
	</GlobalStore>
)
