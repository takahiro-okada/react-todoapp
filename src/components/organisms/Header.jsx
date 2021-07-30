import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

export const Header = (props) => {
	const test = ["aa", "bbb", "ccc"];
	const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
		useAuth0();

	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Oops... {error.message}</div>;
	}
	if (isAuthenticated) {
		return (
			<SHeader>
				<HeaderInner>
					<HeaderLogo to={{ pathname: "/", state: { test } }}>
						Osyare Na ToDo App
					</HeaderLogo>
					<HeaderNav>
						<HeaderItem>
							<HeaderLink to={{ pathname: "/list", state: { test } }}>
								LIST
							</HeaderLink>
						</HeaderItem>
						<HeaderItem>
							<HeaderLink to="/trash">TRASH</HeaderLink>
						</HeaderItem>
						<HeaderItem>
							<HeaderButton
								onClick={() => logout({ returnTo: window.location.origin })}
							>
								LOGOUT
							</HeaderButton>
						</HeaderItem>
						<HeaderItem>
							<LoginIcon src={user.picture}></LoginIcon>
						</HeaderItem>
					</HeaderNav>
				</HeaderInner>
			</SHeader>
		);
	} else {
		return (
			<SHeader>
				<HeaderInner>
					<HeaderLogo to="/">Osyare Na ToDo App</HeaderLogo>
					<HeaderNav>
						<HeaderItem>
							<HeaderButton onClick={loginWithRedirect}>LOGIN</HeaderButton>
						</HeaderItem>
					</HeaderNav>
				</HeaderInner>
			</SHeader>
		);
	}
};

const SHeader = styled.div`
	background-color: #031d7c;
	padding: 10px 60px;
`;
const HeaderInner = styled.div`
	display: flex;
	justify-content: space-between;
`;
const HeaderLogo = styled(Link)`
	font-family: "Staatliches", cursive;
	color: #fff;
	font-size: 32px;
`;
const HeaderNav = styled.ul`
	display: flex;
`;
const HeaderItem = styled.li``;

const HeaderLink = styled(Link)`
	font-family: "Staatliches", cursive;
	color: #fff;
	font-size: 32px;
	padding: 0 20px;
`;
const HeaderButton = styled.button`
	font-family: "Staatliches", cursive;
	color: #fff;
	font-size: 32px;
	padding: 0 20px;
`;
const LoginIcon = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
`;
