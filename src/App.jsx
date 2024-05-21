import { useState, useEffect } from "react";
import "./styles.css";

import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem("ITEMS");
		if (localValue == null) return [];
		return JSON.parse(localValue);
	});

	useEffect(() => {
		localStorage.setItem("ITEM", JSON.stringify(todos));
	}, [todos]);

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
					// return (...todo, completed )
				}
				return todo;
			});
		});
	}

	function deleteTodo(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== id);
		});
	}
	function addTodo(title) {
		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{ id: crypto.randomUUID(), title, completed: false },
			];
		});
	}

	return (
		<>
			<NewTodoForm onSubmit={addTodo} />
			<h1 className="header">Todo List</h1>
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

			{/* <div>
         <li>
					<label>
						<input type="checkbox" />
						Item 1
					</label>
					<button className="btn btn-danger">Delete</button>
				</li>
				<li>
					<label>
						<input type="checkbox" />
						Item 2
					</label>
					<button className="btn btn-danger">Delete</button>
				</li>
			</div> */}
		</>
	);
}
