import {useDispatch} from 'react-redux'
import {deleteTodos, completeTodos}from '../../reducers/todosReducer';

function TodoItem({ todo }) {
	const dispatch = useDispatch();

	return(
		<li className="todo">
			<span role="figure" className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
			<button className="trash-btn" onClick={() => dispatch(deleteTodos(todo))}>Delete</button>
			<button className="complete-btn" onClick={() => dispatch(completeTodos(todo))}>Complete</button>
		</li>
	)
	}

export default TodoItem;