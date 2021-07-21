import styled from "styled-components";

export const ModalButton = (props) => {
	const { openModal } = props;
	return <SModalButton onClick={openModal}>＋</SModalButton>;
};
const SModalButton = styled.button`
	font-size: 50px;
	text-align: center;
	color: #fff;
	background-color: #eb6100;
	border-radius: 50%;
	line-height: 100px;
	width: 100px;
	height: 100px;
	padding: 0;
	position: absolute;
	right: 50px;
	bottom: 50px;
	cursor: pointer;
	transition: opacity 0.3s;
	:hover {
		opacity: 0.7;
	}
`;
