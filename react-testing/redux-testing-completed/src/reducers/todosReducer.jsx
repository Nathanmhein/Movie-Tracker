import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [], 
    filteredTodos: [], 
    status: 'all', 
    inputText: ''
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
      addTodos: (state, action) => {
        state.todos.push({text: action.payload, completed: false})
      },
      deleteTodos: (state, action) => {
        state.todos = state.todos.filter((item) => item.text !== action.payload.text)
      },
      completeTodos: (state, action) => {
        state.todos = state.todos.map((item) => {
            if(item.text === action.payload.text) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
      },
      filterTodos: (state) => {
        state.filteredTodos = state.todos.filter((todo) => {
            if (state.status === 'completed') {
                return todo.completed === true
            } else if (state.status === 'uncompleted') {
                return todo.completed === false
            } else {
                return state.todos
            }
        })
      },
      toggleStatus: (state, action) => {
        state.status = action.payload
      },
      setInput: (state, action) => {
        state.inputText = action.payload
      }
    }
})

export const { addTodos, deleteTodos, completeTodos, filterTodos, toggleStatus, setInput } = todoSlice.actions;
export default todoSlice.reducer;