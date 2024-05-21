import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
	// props.onSubmit
	const [newItem, setNewItem] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		// setTodos((currentTodos) => [
		// 	...currentTodos,
		// 	{ id: crypto.randomUUID, title: newItem, completed: false },
		// ]);
		if (newItem === "") return;

		// addTodo(newItem);
		// props.onSubmit(newItem);
		onSubmit(newItem);

		setNewItem("");
	}

	// console.log(todos);

	return (
		<form onSubmit={handleSubmit} className="new-item-form">
			<div className="form-row">
				<label htmlFor="item">New Item</label>
				<input
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
					type="text"
					id="text"
				/>
			</div>
			<button className="btn">Add</button>
		</form>
	);
}
