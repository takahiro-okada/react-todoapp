import styled from "styled-components";
import { BoxTitle } from "../atoms/BoxTitle";
import IconCompleteImage from "../../images/icon-complete.png";
import IconReturnImage from "../../images/icon-return.png";
import { STATUS } from "../../const";

export const Box = (props) => {
	const {
		title,
		color,
		status,
		taskList,
		onClickComplete,
		onClickReturn,
		onClickCompleteDelete,
		onClickIncompleteDelete,
	} = props;
	// タスク数
	const taskLength = taskList.length;
	const todoList = taskList.map((todo, index) => (
		<SItem key={index}>
			<SItemContent>
				<SItemTitle>{todo.task}</SItemTitle>
				<SItemTags>
					<SItemTag>{todo.category}</SItemTag>
				</SItemTags>
			</SItemContent>
			<SItemSubcontent>
				{status === STATUS.complete ? (
					<SItemComplete onClick={() => onClickComplete(index)}>
						<img src={IconCompleteImage} alt="Complete" />
					</SItemComplete>
				) : (
					<SItemComplete onClick={() => onClickReturn(index)}>
						<img src={IconReturnImage} alt="Return" />
					</SItemComplete>
				)}
				{status === STATUS.complete ? (
					<SItemDelete onClick={() => onClickIncompleteDelete(index)}>
						delete...
					</SItemDelete>
				) : (
					<SItemDelete onClick={() => onClickCompleteDelete(index)}>
						delete...
					</SItemDelete>
				)}
			</SItemSubcontent>
		</SItem>
	));
	return (
		<SBox>
			<BoxTitle title={title} color={color} taskLength={taskLength} />
			<SList>{todoList}</SList>
		</SBox>
	);
};
const SBox = styled.div``;
const SList = styled.ul`
	margin-top: 30px;
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
