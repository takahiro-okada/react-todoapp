import styled from "styled-components";

export const Home = () => {
	return (
		<SImageWrapper>
			<SImage src="https://source.unsplash.com/random/" alt="OSYARE NA GAZOU" />
			<SText>ENJOY TO MANAGE YOUR LIFE</SText>
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

const SText = styled.h2`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	font-family: "Staatliches", cursive;
	color: #fff;
	font-size: 64px;
	width: fit-content;
`;
