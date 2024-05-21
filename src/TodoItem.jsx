export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
	// const checkboxChangeValue = (e) => {
	// 	toggleTodo(todo.id, e.target.checked);
	// };

	return (
		<li>
			<label>
				<input
					type="checkbox"
					checked={completed}
					onChange={(e) => toggleTodo(id, e.target.checked)}
				/>
				{title}
			</label>
			<button
				className="btn btn-danger"
				// onClick={deleteTodo(todo.id)} // wont work, automatically runs the function and delete
				onClick={() => deleteTodo(id)}
			>
				Delete
			</button>
		</li>
	);
}
