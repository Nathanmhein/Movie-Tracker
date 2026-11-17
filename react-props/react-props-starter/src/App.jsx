import React, {useState} from 'react';
import './App.css';
import { TodoForm,TodoList } from './components';

function App() {
  const [inputText, setInputText] = useState(''); 
  const [todos,setTodos] = useState([]);

  return (
    <div>
      <header>Sarah's Todo List</header>
      <TodoForm 
        setInputText = {setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText}/>
      <TodoList 
        todos={todos} 
        setTodos={setTodos}/>
    </div>
  );
}

export default App;
