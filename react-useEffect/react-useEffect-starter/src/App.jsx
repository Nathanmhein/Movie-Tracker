import React, {useState, useEffect} from 'react';
import './App.css';
import { TodoForm, TodoList } from './components';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status,setStatus] = useState(['all']);

function filterHandler() {
  if (status === "completed") {
    setFilteredTodos(todos.filter((todo) => todo.completed === true));
  } else if (status === "incompleted") {
    setFilteredTodos(todos.filter((todo) => todo.completed === false));
  } else {
    setFilteredTodos(todos);
  }
}

  useEffect(()=> filterHandler(),[todos, status])

  return (
    <div>
      <header>Sarah's Todo List</header>
      <TodoForm inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
      <TodoList todos={todos} filteredTodos={filteredTodos} setTodos ={setTodos} />
    </div>
  );
}

export default App;
