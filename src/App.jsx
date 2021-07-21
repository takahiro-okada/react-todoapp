import "./App.css";
import styled from "styled-components";
import { Header } from "./components/organisms/Header";
import { Modal } from "./components/molecules/Modal";
import { Box1 } from "./components/organisms/Box1";
import { Box2 } from "./components/organisms/Box2";
import { Box3 } from "./components/organisms/Box3";
import React, { useState } from "react";

export const App = () => {
	const [show, setShow] = useState();
	const openModal = () => {
		setShow(true);
	};
	const [todoText, setTodoText] = useState([
		{
			task: "",
			category: "",
		},
	]);
	const [incompleteTodos, setIncompleteTodos] = useState([
		{ task: "メール処理", category: "お仕事" },
		{ task: "掃除", category: "お家" },
		{ task: "散歩", category: "お家" },
	]);
	const [progressTodos, setProgressTodos] = useState([
		{ task: "開発中", category: "React" },
		{ task: "ドラッグアンドドロップで", category: "React" },
		{ task: "動かしたいぜ", category: "React" },
	]);
	const [completeTodos, setCompleteTodos] = useState([
		{ task: "遊び", category: "お家" },
		{ task: "買い物", category: "お家" },
	]);

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
						completeTodos={completeTodos}
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
						setIncompleteTodos={setIncompleteTodos}
						incompleteTodos={incompleteTodos}
						setCompleteTodos={setCompleteTodos}
					/>
				</Wrapper>
			</Container>
			<ModalButton onClick={openModal}>＋</ModalButton>
			<Modal
				setShow={setShow}
				todoText={todoText}
				show={show}
				setTodoText={setTodoText}
				incompleteTodos={incompleteTodos}
				setIncompleteTodos={setIncompleteTodos}
			/>
		</>
	);
};

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
