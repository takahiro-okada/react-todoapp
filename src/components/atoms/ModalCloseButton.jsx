import styled from "styled-components";
import IconModalClose from "../../images/icon-modalclose.png";
import { useModal } from "../../hooks/useModal";

export const ModalCloseButton = (props) => {
	const { toggle } = props;
	console.log(toggle);
	return (
		<SModalCloseButton onClick={toggle}>
			<img src={IconModalClose} alt="Close" />
		</SModalCloseButton>
	);
};
const SModalCloseButton = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
`;
