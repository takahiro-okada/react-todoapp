import "../../App.css";
import styled from "styled-components";
import { Modal } from "../../components/molecules/Modal";
import { useModal } from "../../hooks/useModal";
import { Box } from "../../components/organisms/Box";
import { ModalButton } from "../../components/atoms/ModalButton";
import React, { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { STATUS } from "../../const";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const List = () => {
	const { show, toggle } = useModal();
	const location = useLocation();
	const newTaskList = location.state;
	// 状態管理
	const [todoText, setTodoText] = useState("");
	useEffect(() => {
		// レスポンス受け取った後に判定してますが、リクエスト前に判定→必要ならリクエスト、とすれば余計な通信しなくて済みます
		axios
			.get("https://jsonplaceholder.typicode.com/todos")
			.then((res) => {
				if (!newTaskList) {
					const firstIncompletedTask = res.data.filter(
						(item) => item.completed === true
					);
					const firstCompletedTask = res.data.filter(
						(item) => item.completed === false
					);
					setIncompleteTodos(firstIncompletedTask);
					setCompleteTodos(firstCompletedTask);
				} else {
					let incompletedTask = newTaskList.taskList.filter(
						(item) => item.completed === true
					);
					let completedTask = newTaskList.taskList.filter(
						(item) => item.completed === false
					);
					// completedがfalseの要素のものだけ取得する
					incompleteTodos.current = incompletedTask;
					setIncompleteTodos(incompleteTodos.current);
					// completedがtrueの要素のものだけ取得する
					completeTodos.current = completedTask;
					setCompleteTodos(completeTodos.current);
				}
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
		toggle(false);
	}, [todoText, setTodoText, incompleteTodos]);
	return (
		<>
			<SWrapper>
				<Box
					title="Todo"
					color="#CEFFED"
					taskList={incompleteTodos}
					taskList2={completeTodos}
					status={STATUS.complete}
					onClickComplete={onClickComplete}
					onClickIncompleteDelete={onClickIncompleteDelete}
				/>
				<Box
					title="Complete"
					color="#FFCA99"
					taskList={completeTodos}
					taskList2={incompleteTodos}
					status={STATUS.incomplete}
					onClickReturn={onClickReturn}
					onClickCompleteDelete={onClickCompleteDelete}
				/>
			</SWrapper>
			<ModalButton toggle={toggle} />
			<Modal
				todoText={todoText}
				setTodoText={setTodoText}
				onClickAdd={onClickAdd}
				incompleteTodos={incompleteTodos}
				show={show}
				toggle={toggle}
			/>
		</>
	);
};
const SWrapper = styled.div`
	display: grid;
	gap: 30px;
	grid-template-columns: 1fr 1fr 1fr;
`;
