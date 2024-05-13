export const addTodos = (text) => {
    return (dispatch) => {
        dispatch({
          type: "ADD_TODO",
          payload: text,
        });
    };
}

export const deleteTodos = (todo) => {
    return (dispatch) => {
        dispatch({
          type: "DELETE_TODO",
          payload: todo,
        });
    };
}

export const completeTodos = (todo) => {
    return (dispatch) => {
        dispatch({
          type: "COMPLETE_TODO",
          payload: todo,
        });
    };
}

export const filterTodos = () => {
    return (dispatch) => {
        dispatch({
          type: "FILTER_TODO"
        });
    };
}

export const toggleStatus = (status) => {
    return (dispatch) => {
        dispatch({
          type: "TOGGLE_STATUS",
          payload: status
        });
    };
}

export const setInput = (inputText) => {
    return (dispatch) => {
        dispatch({
          type: "SET_INPUT",
          payload: inputText
        });
    };
}