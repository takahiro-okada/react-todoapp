import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page404 = () => {
	return (
		<SImageWrapper>
			<SImage src="https://source.unsplash.com/random/" alt="OSYARE NA GAZOU" />
			<S404Box>
				<SText>SORRY, PAGE NOT FOUND</SText>
				<S404Button to="/">BACK TO TOP</S404Button>
			</S404Box>
		</SImageWrapper>
	);
};
const SImageWrapper = styled.div`
	overflow: hidden;
	position: relative;
	padding-top: 56.25%;
`;
const SImage = styled.img`
	position: absolute;
	top: 50%;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transform: translateY(-50%);
`;
const S404Box = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	text-align: center;
`;
const SText = styled.h2`
	font-family: "Staatliches", cursive;
	color: #fff;
	font-size: 64px;
	width: fit-content;
`;
const S404Button = styled(Link)`
	display: inline-block;
	font-family: "Staatliches", cursive;
	color: #fff;
	font-size: 64px;
	padding: 20px 50px;
	background-color: rgba(0, 0, 0, 0.6);
`;
