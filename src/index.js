import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<Auth0Provider
		domain="dev-9jp-2yxk.jp.auth0.com"
		clientId="guhIXOHryY6O9zuNSeXmdwpZhQ6oEMc6"
		redirectUri="https://main.dgyapkr61jdu7.amplifyapp.com/"
	>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Auth0Provider>,
	document.getElementById("root")
);
reportWebVitals();
