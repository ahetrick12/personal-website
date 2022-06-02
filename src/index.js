import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bulma/css/bulma.min.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
		<div className="buttons">
			<button class="button is-primary">Primary</button>
			<button class="button is-link">Link</button>
			<button class="button is-info">Info</button>
			<button class="button is-success">Success</button>
			<button class="button is-warning">Warning</button>
			<button class="button is-danger">Danger</button>
			<button class="button is-black">Black</button>
			<button class="button is-white">White</button>
			<button class="button is-dark">Dark</button>
			<button class="button is-light">Light</button>
		</div>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
