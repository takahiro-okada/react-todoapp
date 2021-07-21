import styled from "styled-components";
import { BoxTitle } from "../atoms/BoxTitle";

export const Box = (props) => {
	const { title, color, todoList, taskLength } = props;
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
