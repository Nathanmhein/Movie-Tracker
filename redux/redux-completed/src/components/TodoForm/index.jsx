import {useSelector, useDispatch} from 'react-redux'
import {actionCreators} from '../../action-creators';
import {bindActionCreators} from 'redux';

function TodoForm() {
  const dispatch = useDispatch();
  const inputText = useSelector(state => state.todosReducer.inputText)
  const {addTodos, toggleStatus, setInput} = bindActionCreators(actionCreators, dispatch);

  function handleSubmit(e) {
    e.preventDefault();
    addTodos(inputText)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputText} type="text" className="todo-input" onChange={(e) => setInput(e.target.value)} />
      <button type="submit" className="todo-button">Add</button>
      <div className="select">
        <select onChange={(e) => toggleStatus(e.target.value)}name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default TodoForm;