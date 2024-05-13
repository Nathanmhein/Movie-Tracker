import {useDispatch} from 'react-redux'
import {actionCreators} from '../../action-creators';
import {bindActionCreators} from 'redux';

function TodoItem({ todo }) {
	const dispatch = useDispatch();
	const {deleteTodos, completeTodos} = bindActionCreators(actionCreators, dispatch);
  
	return(
		<li className="todo">
			<span className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
			<button className="trash-btn" onClick={() => deleteTodos(todo)}>Delete</button>
			<button className="complete-btn" onClick={() => completeTodos(todo)}>Complete</button>
		</li>
	)
	}

export default TodoItem;