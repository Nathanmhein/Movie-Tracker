const initialState = {
    todos: [], 
    filteredTodos: [], 
    status: 'all', 
    inputText: ''
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, {text: action.payload, completed: false}]
      }
    case "DELETE_TODO":
      return {...state, todos: state.todos.filter((item) => item !== action.payload)}
    case "COMPLETE_TODO":
      return {...state, todos: state.todos.map((item) => {
        if(item === action.payload) {
            return {
                ...item, completed: !item.completed
            }
        }
        return item;
      })}
    case "FILTER_TODO":
        if (state.status === 'completed') {
            return {...state, filteredTodos: state.todos.filter(todo => todo.completed === true)}
        } else if (state.status === 'uncompleted') {
            return {...state, filteredTodos: state.todos.filter(todo => todo.completed === false)}
        } else {
            return {...state, filteredTodos: state.todos}
        }
    case "TOGGLE_STATUS":
        return {...state, status: action.payload }
    case "SET_INPUT":
        return {...state, inputText: action.payload}
    default:
      return state;
  }
};

export default todosReducer;