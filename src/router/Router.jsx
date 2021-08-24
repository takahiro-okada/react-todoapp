import { Route, Switch } from "react-router-dom";
import { Header } from "../components/organisms/Header";
import { Home } from "../components/pages/Home";
import { List } from "../components/pages/List";
import { Page } from "../components/pages/Page";
import { Page404 } from "../components/pages/Page404";
import styled from "styled-components";

export const Router = () => {
	return (
		<>
			<Header />
			<SContainer>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/list">
						<List />
					</Route>
					<Route
						path="/todo/:id"
						render={() => <Page title="Edit" color="#CEFFED" />}
					/>
					<Route path="/*">
						<Page404 />
					</Route>
				</Switch>
			</SContainer>
		</>
	);
};
const SContainer = styled.div`
	width: 1080px;
	max-width: 100%;
	margin: 60px auto 0;
`;
