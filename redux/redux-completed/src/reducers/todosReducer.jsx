const initialState = {
    todos: []
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
        default:
          return state;
    }
}

export default todosReducer;