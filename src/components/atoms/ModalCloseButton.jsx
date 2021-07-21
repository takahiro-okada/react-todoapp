import styled from "styled-components";
import IconModalClose from "../../images/icon-modalclose.png";

export const ModalCloseButton = (props) => {
	const closeModal = () => {
		props.setShow(false);
	};
	return (
		<SModalCloseButton onClick={closeModal}>
			<img src={IconModalClose} alt="Close" />
		</SModalCloseButton>
	);
};
const SModalCloseButton = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
`;
