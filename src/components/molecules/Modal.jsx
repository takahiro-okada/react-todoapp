import styled from "styled-components";
import { ModalCloseButton } from "../atoms/ModalCloseButton";

export const Modal = (props) => {
	const {
		todoText,
		setTodoText,
		incompleteTodos,
		setIncompleteTodos,
		setShow,
	} = props;
	const onClickAdd = () => {
		if (todoText.task === "" && todoText.category === "") return;
		console.log(todoText.task);
		console.log(todoText.category);
		const newTodos = [...incompleteTodos, todoText];
		setIncompleteTodos(newTodos);
		setTodoText("");
		setShow(false);
	};
	if (props.show) {
		return (
			<>
				<ModalOverray>
					<ModalContent>
						<ModalCloseButton setShow={setShow} />
						<ModalBox>
							<ModalItem>
								<ModalTitle>TODO</ModalTitle>
								<ModalInput
									value={todoText.task}
									onChange={(e) =>
										setTodoText({ ...todoText, task: e.target.value })
									}
								/>
							</ModalItem>
							<ModalItem>
								<ModalTitle>CATEGORY</ModalTitle>
								<ModalInput
									value={todoText.category}
									onChange={(e) =>
										setTodoText({ ...todoText, category: e.target.value })
									}
								/>
							</ModalItem>
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
