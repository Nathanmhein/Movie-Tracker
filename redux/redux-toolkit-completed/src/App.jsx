import React, {useEffect} from 'react';
import './App.css';
import { TodoForm, TodoList } from './components';
import {useSelector, useDispatch} from 'react-redux'
import {filterTodos} from './reducers/todosReducer';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.todosReducer);
  
  useEffect(() => {
    dispatch(filterTodos())
  }, [data.status, data.todos])
  
  return (
    <div>
      <header>Sarah's Todo List</header>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
