import styled from "styled-components";
import IconReturnImage from "../../images/icon-return.png";
import { BoxTitle } from "../atoms/BoxTitle";

export const Box3 = (props) => {
	const {
		title,
		color,
		completeTodos,
		setCompleteTodos,
		incompleteTodos,
		setIncompleteTodos,
	} = props;
	// 削除ボタン
	const onClickDelete = (index) => {
		const newTodos = [...completeTodos];
		newTodos.splice(index, 1);
		setCompleteTodos(newTodos);
	};
	// 戻るボタン
	const onClickReturn = (index) => {
		const newCompleteTodos = [...completeTodos];
		newCompleteTodos.splice(index, 1);
		const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
		setCompleteTodos(newCompleteTodos);
		setIncompleteTodos(newInCompleteTodos);
	};
	const todoList = completeTodos.map((todo, index) => (
		<Item key={index}>
			<ItemContent>
				<ItemTitle>{todo.task}</ItemTitle>
				<ItemTags>
					<ItemTag>{todo.category}</ItemTag>
				</ItemTags>
			</ItemContent>
			<ItemSubcontent>
				<ItemComplete>
					<img
						src={IconReturnImage}
						alt="Return"
						onClick={() => onClickReturn(index)}
					/>
				</ItemComplete>
				<ItemDelete onClick={() => onClickDelete(index)}>delete...</ItemDelete>
			</ItemSubcontent>
		</Item>
	));
	return (
		<SBox>
			<BoxTitle title={title} color={color} />
			<List>{todoList}</List>
		</SBox>
	);
};
const SBox = styled.div``;
const ItemComplete = styled.div`
	width: 25px;
	height: 25px;
`;
const List = styled.ul`
	margin-top: 30px;
`;
const Item = styled.li`
	display: flex;
	padding: 10px;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
const ItemContent = styled.div`
	width: 80%;
`;
const ItemSubcontent = styled.div`
	width: 20%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
const ItemTitle = styled.div`
	font-size: 18px;
	font-weight: bold;
`;
const ItemTags = styled.div`
	margin-top: 10px;
`;
const ItemTag = styled.div`
	background-color: #1d8ac7;
	font-weight: bold;

	font-size: 12px;
	color: #fff;
	padding: 8px 15px;
	border-radius: 20px;
	width: fit-content;
`;
const ItemDelete = styled.div`
	color: red;
`;
