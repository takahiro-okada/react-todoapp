import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import React, { useState } from "react";

export const Page = () => {
	const { id } = useParams();
	const [text, setText] = useState("");

	const handleChange = (e) => {
		console.log(e);
		setText(() => e.target.value);
	};

	const { state } = useLocation();
	const todos = state.taskList;
	console.log(todos);

	return (
		<div>
			<h1>Pageページです</h1>
			<div>TODO:{id}です！！！！</div>
			{Object.keys(todos).map((item, index) => (
				<div key={item}>
					タスク番号{item}:
					<input
						type="text"
						defaultValue={todos[index].title}
						onChange={handleChange}
					/>
				</div>
			))}
			<Link to={{ pathname: "/list" }}>戻る</Link>
		</div>
	);
};
