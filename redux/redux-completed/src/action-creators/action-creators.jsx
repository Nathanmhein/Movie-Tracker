export const addTodo = (text) => {
    return (dispatch) => {
      dispatch({
        type: "ADD_TODO",
        payload: text,
      });
    };
}

 export const deleteTodo = (todo) => {
    return (dispatch) => {
        dispatch({
          type: "DELETE_TODO",
          payload: todo,
        });
    };
}

export const completeTodo = (todo) => {
    return (dispatch) => {
        dispatch({
          type: "COMPLETE_TODO",
          payload: todo,
        });
    };
}