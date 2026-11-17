import TodoItem from "../TodoItem";
function TodoList({todos,setTodos}) {

    function deleteTodo(todo){
        let filteredTodos = todos.filter((el) => el !== todo);
        setTodos(filteredTodos);

    }    

    return (
        <div className="todo-container">
            <ul className='todo-list'>
            {
                todos.map((todo,i) => (
                <TodoItem todo={todo}
                deleteTodo={deleteTodo} 
                key={i}
                />
                ))
            }
            </ul>
        </div>
    );
}

export default TodoList;