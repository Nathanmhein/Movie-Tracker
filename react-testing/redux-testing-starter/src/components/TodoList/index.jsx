import TodoItem from "../TodoItem";

function TodoList({ filteredTodos }) {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map((todo, i) => <TodoItem todo={todo} key={i} />)}
			</ul>
		</div>
	)
}

export default TodoList;