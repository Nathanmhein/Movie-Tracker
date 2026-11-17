function TodoItem({todo,deleteTodo}) {
    return (
        <li className="todo">
            <span className="todo-item">{todo.text}</span>
            <button className="trash-btn" onClick={()=>deleteTodo(todo)}>Delete</button>
        </li>
    );
}

export default TodoItem;