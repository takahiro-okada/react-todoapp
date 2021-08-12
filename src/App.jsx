import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

export const App = () => {
	return (
		<Auth0Provider
			domain="dev-9jp-2yxk.jp.auth0.com"
			clientId="guhIXOHryY6O9zuNSeXmdwpZhQ6oEMc6"
			redirectUri="http://localhost:3000/"
		>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Auth0Provider>
	);
};
