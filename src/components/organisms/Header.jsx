import styled from "styled-components";

export const Header = () => {
	return (
		<Heading>
			<div className="header__inner">
				<HeaderLogo>Osyare Na ToDo App</HeaderLogo>
			</div>
		</Heading>
	);
};

const Heading = styled.div`
	background-color: #031d7c;
	padding: 10px 30px;
`;
const HeaderLogo = styled.h1`
	font-family: "Staatliches", cursive;
	color: #fff;
	font-size: 32px;
`;
