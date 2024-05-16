import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

const todoSlice = createSlice({
    // A name 
    name: 'todos',
    // The initial state for the reducer 
    initialState: initialState, 
    // An object of "case reducers". Key names will be used to generate actions.
    reducers: {
        // All case reducers 
        addTodo: (state, action) => {
            state.todos.push({text: action.payload, completed: false})
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.text !== action.payload.text)
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map((item) => {
                if(item.text === action.payload.text) {
                    return {
                        ...item, completed: !item.completed
                    }
                }
                return item;
            })
        }
    }
})

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;