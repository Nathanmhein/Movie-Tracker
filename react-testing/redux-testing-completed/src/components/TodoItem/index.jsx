import {useDispatch} from 'react-redux';
import {deleteTodo, completeTodo}from '../../reducers/todosReducer';

function TodoItem({ todo }) {
	const dispatch = useDispatch();

	return(
		<li className="todo">
			<span role="figure" className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
			<button className="trash-btn" onClick={() => dispatch(deleteTodo(todo))}>Delete</button>
			<button className="complete-btn" onClick={() => dispatch(completeTodo(todo))}>Complete</button>
		</li>
	)
	}

export default TodoItem;