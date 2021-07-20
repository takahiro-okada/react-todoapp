import styled from "styled-components";
import IconModalClose from "../../images/icon-modalclose.png";

export const Modal = (props) => {
	const closeModal = () => {
		props.setShow(false);
	};
	const { todoText, setTodoText, incompleteTodos, setIncompleteTodos } = props;
	const onChangeTodoText = (event) => setTodoText(event.target.value);
	const onClickAdd = () => {
		const newTodos = [...incompleteTodos, todoText];
		setIncompleteTodos(newTodos);
	};
	if (props.show) {
		return (
			<>
				<ModalOverray>
					<ModalContent>
						<ModalCloseButton onClick={closeModal}>
							<img src={IconModalClose} alt="" />
						</ModalCloseButton>
						<ModalBox>
							<ModalItem>
								<ModalTitle>TODO</ModalTitle>
								<ModalInput value={todoText} onChange={onChangeTodoText} />
							</ModalItem>
							{/* <ModalItem>
								<ModalTitle>CATEGORY</ModalTitle>
								<ModalInput value={todoText.category} />
							</ModalItem> */}
							<ModalSend onClick={onClickAdd}>POST</ModalSend>
						</ModalBox>
					</ModalContent>
				</ModalOverray>
			</>
		);
	} else {
		return null;
	}
};
const ModalContent = styled.div`
	position: relative;
	z-index: 2;
	width: 70%;
	height: 80%;
	padding: 1em;
	background: #fff;
`;
const ModalOverray = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
`;
const ModalCloseButton = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
`;
const ModalBox = styled.div`
	padding: 60px 30px;
`;
const ModalItem = styled.div`
	margin-top: 20px;
`;
const ModalTitle = styled.p`
	font-family: "Staatliches", cursive;
	font-size: 40px;
	font-weight: bold;
	letter-spacing: 0.1em; ;
`;
const ModalInput = styled.input`
	font-weight: bold;
	background-color: #c4c4c4;
	font-size: 32px;
	line-height: 2;
	width: 100%;
	padding: 2px 10px;
`;
const ModalSend = styled.button`
	display: block;
	margin-top: 30px;
	margin-left: auto;
	max-width: 200px;
	text-align: center;
	font-weight: bold;
	background-color: orange;
	font-size: 32px;
	line-height: 2;
	width: 100%;
	padding: 2px 10px;
	:hover {
		opacity: 0.7;
	}
`;
