import React from 'react';
import TodoItem from "../TodoItem";
import { useSelector } from 'react-redux'

function TodoList() {
	const filteredTodos = useSelector(state => state.todosReducer.filteredTodos);

	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map((todo, i) => <TodoItem todo={todo} key={i} role="figure"/>)}
			</ul>
		</div>
	)
}

export default TodoList;