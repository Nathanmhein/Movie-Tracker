import React, {useState, useEffect} from 'react';
import './App.css';
import { TodoForm, TodoList } from './components';
import {useSelector, useDispatch} from 'react-redux'
import {actionCreators} from './action-creators';
import {bindActionCreators} from 'redux';

function App() {
  const dispatch = useDispatch();
  const {filterTodos} = bindActionCreators(actionCreators, dispatch);
  const data = useSelector(state => state.todosReducer);
  
  useEffect(() => {
    filterTodos()
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
