import styled from "styled-components";

export const BoxTitle = (props) => {
	const SBoxTitle = styled.div`
		position: relative;
	`;
	const Title = styled.h2`
		font-family: "Staatliches", cursive;
		font-size: 40px;
		font-weight: bold;
		padding-left: 20px;
		letter-spacing: 0.1em;
	`;
	const TitleCircle = styled.span`
		width: 55px;
		height: 55px;
		background-color: ${props.color};
		border-radius: 100%;
		display: block;
		position: absolute;
		z-index: -1;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(0%, -50%);
	`;
	return (
		<SBoxTitle>
			<TitleCircle></TitleCircle>
			<Title>{props.title}</Title>
		</SBoxTitle>
	);
};
