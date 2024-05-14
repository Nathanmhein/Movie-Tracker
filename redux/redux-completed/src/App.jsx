import React, {useState, useEffect} from 'react';
import './App.css';
import { TodoForm, TodoList } from './components';
import {useSelector} from 'react-redux'
import {actionCreators} from './action-creators';
import {bindActionCreators} from 'redux';

function App() {
  const todos = useSelector(state => state.todos)
  const [inputText, setInputText] = useState('');
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
    filterHandler()
  }, [status, todos])

  function filterHandler() {
    if(status === 'completed') {
      setFilteredTodos(todos.filter(todo => todo.completed === true))
    } else if (status === 'uncompleted') {
      setFilteredTodos(todos.filter(todo => todo.completed === false))
    } else {
      setFilteredTodos(todos);
    }
  }
  
  return (
    <div>
      <header>Sarah's Todo List</header>
      <TodoForm inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
      <TodoList filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
