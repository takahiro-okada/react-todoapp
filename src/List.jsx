import "./App.css";
import styled from "styled-components";
import { Modal } from "./components/molecules/Modal";
import { Box } from "./components/organisms/Box";
import { ModalButton } from "./components/atoms/ModalButton";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { STATUS } from "./const";

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
	return (
		<>
			<SWrapper>
				<Box
					title="Todo"
					color="#CEFFED"
					taskList={incompleteTodos}
					taskLength={incompleteTodosLength}
					status={STATUS.complete}
					onClickComplete={onClickComplete}
					onClickIncompleteDelete={onClickIncompleteDelete}
					onClickCompleteDelete={onClickCompleteDelete}
				/>
				<Box
					title="Complete"
					color="#FFCA99"
					taskList={completeTodos}
					taskLength={completeTodosLength}
					status={STATUS.incomplete}
					onClickReturn={onClickReturn}
					onClickComplete={onClickComplete}
					onClickCompleteDelete={onClickCompleteDelete}
					onClickIncompleteDelete={onClickIncompleteDelete}
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
