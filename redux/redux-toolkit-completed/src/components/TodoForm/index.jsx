import {useSelector, useDispatch} from 'react-redux'
import {addTodos, toggleStatus, setInput} from '../../reducers/todosReducer';

function TodoForm() {
  const dispatch = useDispatch();
  const inputText = useSelector(state => state.todosReducer.inputText)

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodos(inputText))
    dispatch(setInput(''))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input role="input" value={inputText} type="text" className="todo-input" onChange={(e) => dispatch(setInput(e.target.value))} />
      <button type="submit" className="todo-button">Add</button>
      <div className="select">
        <select role="select" onChange={(e) => dispatch(toggleStatus(e.target.value))} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default TodoForm;