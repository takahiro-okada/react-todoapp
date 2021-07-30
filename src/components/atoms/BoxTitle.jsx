import styled from "styled-components";

export const BoxTitle = (props) => {
	const { taskLength } = props;
	return (
		<SBoxTitle>
			<STitleCircle color={props.color}></STitleCircle>
			<STitle>{props.title}</STitle>
			<STitleNumber>{taskLength}</STitleNumber>
		</SBoxTitle>
	);
};

const SBoxTitle = styled.div`
	position: relative;
	display: flex;
`;
const STitle = styled.h2`
	font-family: "Staatliches", cursive;
	font-size: 40px;
	font-weight: bold;
	padding-left: 20px;
	letter-spacing: 0.1em;
`;
const STitleCircle = styled.span`
	width: 55px;
	height: 55px;
	background-color: ${(props) => props.color};
	border-radius: 100%;
	display: block;
	position: absolute;
	z-index: -1;
	top: 50%;
	left: 0;
	transform: translate(0%, -50%);
`;
const STitleNumber = styled.span`
	font-size: 65px;
	position: absolute;
	top: 50%;
	right: 0;
	transform: translate(0, -50%);
	font-weight: bold;
	font-family: "Dancing Script", cursive;
`;
