import "./App.css";
import styled from "styled-components";
import { Header } from "./components/organisms/Header";
import { Box1 } from "./components/organisms/Box1";
import { Box2 } from "./components/organisms/Box2";
import { Box3 } from "./components/organisms/Box3";
import React, { useState } from "react";
import IconModalClose from "./images/icon-modalclose.png";

function App() {
	const [show, setShow] = useState();
	const openModal = () => {
		setShow(true);
	};
	const [todoText, setTodoText] = useState("");
	const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "bbbbbb"]);
	const [progressTodos, setProgressTodos] = useState([
		"開発中のため",
		"動きません",
		"Drag and Drop させたい",
	]);
	const [completeTodos, setCompleteTodos] = useState(["eee", "fff"]);
	const closeModal = () => {
		setShow(false);
	};
	const onChangeTodoText = (event) => setTodoText(event.target.value);
	// 追加ボタン
	const onClickAdd = () => {
		if (todoText === "") return;
		const newTodos = [...incompleteTodos, todoText];
		setIncompleteTodos(newTodos);
		setTodoText("");
	};

	return (
		<>
			<Header />
			<Container>
				<Wrapper>
					<Box1
						title="Todo"
						color="#CEFFED"
						incompleteTodos={incompleteTodos}
						setIncompleteTodos={setIncompleteTodos}
						setCompleteTodos={setCompleteTodos}
					/>
					<Box2
						title="Progress"
						color="#F4FFB1"
						progressTodos={progressTodos}
						setProgressTodos={setProgressTodos}
					/>
					<Box3
						title="Complete"
						color="#FFCA99"
						completeTodos={completeTodos}
						setCompleteTodos={setCompleteTodos}
					/>
				</Wrapper>
			</Container>
			<ModalButton onClick={openModal}>＋</ModalButton>
			{show ? (
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
			) : (
				console.log("test")
			)}
		</>
	);
}
export default App;

const Container = styled.div`
	width: 1080px;
	max-width: 100%;
	margin: 60px auto 0;
`;
const Wrapper = styled.div`
	display: grid;
	gap: 30px;
	grid-template-columns: 1fr 1fr 1fr;
`;

const ModalButton = styled.button`
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
