import styled from "styled-components";
import { BoxTitle } from "./../atoms/BoxTitle";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import React, { useState } from "react";

export const Page = (props) => {
	const { title, color } = props;
	const { id } = useParams();
	const [text, setText] = useState("");
	const location = useLocation();
	const { taskList } = location.state;

	const targetTodo = taskList.find((elm, index) => {
		return index == id;
	});
	const handleChange = (e) => {
		setText({ ...targetTodo, title: e.target.value });
		targetTodo.title = text.title;
	};
	return (
		<SBox>
			<BoxTitle title={title} color={color} />
			<Label key={id}>
				You can edit▼ ID:{id}
				<Input
					type="text"
					defaultValue={targetTodo.title}
					onChange={handleChange}
				/>
			</Label>
			<Link to={{ pathname: "/list", state: { taskList } }}>戻る</Link>
		</SBox>
	);
};
const SBox = styled.div``;
const Label = styled.label`
	font-family: "Staatliches", cursive;
	font-size: 40px;
	font-weight: bold;
	padding-left: 20px;
	letter-spacing: 0.1em;
`;
const Input = styled.input`
	display: block;
	padding: 0.5em;
	color: ${(props) => props.inputColor || "palevioletred"};
	background: papayawhip;
	border: none;
	border-radius: 3px;
`;
