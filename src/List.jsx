import "./App.css";
import styled from "styled-components";
import { Modal } from "./components/molecules/Modal";
import { Box } from "./components/organisms/Box";
import { ModalButton } from "./components/atoms/ModalButton";
import React, { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { STATUS } from "./const";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const List = () => {
	const location = useLocation();
	const newTaskList = location.state;
	// モーダル用
	const [show, setShow] = useState();
	const openModal = () => {
		setShow(true);
	};
	// 状態管理
	const [todoText, setTodoText] = useState("");
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos")
			.then((res) => {
        // もしincompleteTodosに値が入っていなければ
				if () {
          // APIの値を代入する。
					setIncompleteTodos(res.data);
				}
        // incompleteTodosに値が入っていれば返った値（newTaskList）を代入する
			})
			.catch((error) => console.log(error));
	}, []);
	const [incompleteTodos, setIncompleteTodos] = useState([]);
	const [completeTodos, setCompleteTodos] = useState([]);
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
	const onClickAdd = useCallback(() => {
		//ガード文
		if (!todoText.title || !todoText.userId) return;
		const newTodos = [...incompleteTodos, todoText];
		setIncompleteTodos(newTodos);
		setTodoText("");
		setShow(false);
	}, [todoText, setTodoText, incompleteTodos]);
	return (
		<>
			<SWrapper>
				<Box
					title="Todo"
					color="#CEFFED"
					taskList={incompleteTodos}
					status={STATUS.complete}
					onClickComplete={onClickComplete}
					onClickIncompleteDelete={onClickIncompleteDelete}
				/>
				<Box
					title="Complete"
					color="#FFCA99"
					taskList={completeTodos}
					status={STATUS.incomplete}
					onClickReturn={onClickReturn}
					onClickCompleteDelete={onClickCompleteDelete}
				/>
			</SWrapper>
			<ModalButton openModal={openModal} setShow={setShow} />
			<Modal
				setShow={setShow}
				setTodoText={setTodoText}
				onClickAdd={onClickAdd}
				todoText={todoText}
				show={show}
				incompleteTodos={incompleteTodos}
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
