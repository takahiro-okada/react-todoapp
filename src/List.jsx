import "./App.css";
import styled from "styled-components";
import { Modal } from "./components/molecules/Modal";
import { Box } from "./components/organisms/Box";
import { ModalButton } from "./components/atoms/ModalButton";
import IconReturnImage from "./images/icon-return.png";
import IconCompleteImage from "./images/icon-complete.png";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const List = () => {
	// モーダル用
	const [show, setShow] = useState();
	const openModal = () => {
		setShow(true);
	};
	// 状態管理
	const [todoText, setTodoText] = useState({
		task: "",
		category: "",
	});
	const [incompleteTodos, setIncompleteTodos] = useState([
		{ task: "メール処理", category: "お仕事" },
		{ task: "掃除", category: "お家" },
		{ task: "散歩", category: "お家" },
	]);
	const [completeTodos, setCompleteTodos] = useState([
		{ task: "遊び", category: "お家" },
		{ task: "買い物", category: "お家" },
	]);
	// タスク数
	const incompleteTodosLength = incompleteTodos.length;
	const completeTodosLength = completeTodos.length;
	// 完了ボタン
	const onClickComplete = (index) => {
		toast("GOOD JOB!!!!!!!!!!");
		const newIncompleteTodos = [...incompleteTodos];
		newIncompleteTodos.splice(index, 1);
		const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
		setIncompleteTodos(newIncompleteTodos);
		setCompleteTodos(newCompleteTodos);
	};
	// 戻るボタン
	const onClickReturn = (index) => {
		const newCompleteTodos = [...completeTodos];
		newCompleteTodos.splice(index, 1);
		const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
		setCompleteTodos(newCompleteTodos);
		setIncompleteTodos(newInCompleteTodos);
	};
	// 削除ボタン
	const onClickIncompleteDelete = (index) => {
		toast("SEE YOU FOREVER");
		const newTodos = [...incompleteTodos];
		newTodos.splice(index, 1);
		setIncompleteTodos(newTodos);
	};
	const onClickCompleteDelete = (index) => {
		toast("SEE YOU FOREVER");
		const newTodos = [...completeTodos];
		newTodos.splice(index, 1);
		setCompleteTodos(newTodos);
	};
	// 未完了タスクのテーブル
	const incompleteList = incompleteTodos.map((todo, index) => (
		<SItem key={index}>
			<SItemContent>
				<SItemTitle>{todo.task}</SItemTitle>
				<SItemTags>
					<SItemTag>{todo.category}</SItemTag>
				</SItemTags>
			</SItemContent>
			<SItemSubcontent>
				<SItemComplete onClick={() => onClickComplete(index)}>
					<img src={IconCompleteImage} alt="Complete" />
				</SItemComplete>
				<SItemDelete onClick={() => onClickIncompleteDelete(index)}>
					delete...
				</SItemDelete>
			</SItemSubcontent>
		</SItem>
	));
	// 完了タスクのテーブル
	const completeTodosList = completeTodos.map((todo, index) => (
		<SItem key={index}>
			<SItemContent>
				<SItemTitle>{todo.task}</SItemTitle>
				<SItemTags>
					<SItemTag>{todo.category}</SItemTag>
				</SItemTags>
			</SItemContent>
			<SItemSubcontent>
				<SItemComplete>
					<img
						src={IconReturnImage}
						alt="Return"
						onClick={() => onClickReturn(index)}
					/>
				</SItemComplete>
				<Toaster />
				<SItemDelete onClick={() => onClickCompleteDelete(index)}>
					delete...
				</SItemDelete>
			</SItemSubcontent>
		</SItem>
	));
	return (
		<>
			<SWrapper>
				<Box
					title="Todo"
					color="#CEFFED"
					todoList={incompleteList}
					incompleteTodos={incompleteTodos}
					taskLength={incompleteTodosLength}
				/>
				<Box
					title="Complete"
					color="#FFCA99"
					completeTodos={completeTodos}
					todoList={completeTodosList}
					taskLength={completeTodosLength}
				/>
			</SWrapper>
			<ModalButton openModal={openModal} setShow={setShow} />
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
const SWrapper = styled.div`
	display: grid;
	gap: 30px;
	grid-template-columns: 1fr 1fr 1fr;
`;
const SItemComplete = styled.div`
	width: 30px;
	height: 30px;
	transition: 1s all;
	&:active {
		background-color: red;
		border-radius: 100px;
	}
`;
const SItem = styled.li`
	display: flex;
	padding: 10px;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
const SItemContent = styled.div`
	width: 80%;
`;
const SItemSubcontent = styled.div`
	width: 20%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
const SItemTitle = styled.div`
	font-size: 18px;
	font-weight: bold;
`;
const SItemTags = styled.div`
	margin-top: 10px;
`;
const SItemTag = styled.div`
	background-color: #1d8ac7;
	font-weight: bold;
	font-size: 12px;
	color: #fff;
	padding: 8px 15px;
	border-radius: 20px;
	width: fit-content;
`;
const SItemDelete = styled.div`
	color: red;
`;

// 今は使わないので一旦ここにおいておく
// const [progressTodos, setProgressTodos] = useState([
// 	{ task: "開発中", category: "React" },
// 	{ task: "ドラッグアンドドロップで", category: "React" },
// 	{ task: "動かしたいぜ", category: "React" },
// ]);
// {/* <Box2
//   title="Progress"
//   color="#F4FFB1"
//   progressTodos={progressTodos}
//   setProgressTodos={setProgressTodos}
// /> */}
