
function TodoForm({setInputText,todos, setTodos,inputText}){
    function handleInput(e) {
       // setInputText(e.target.value);
        setInputText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos,{text: inputText, completed: false}])
        setInputText('')
    }

    return ( 
    
      <form onSubmit={handleSubmit}>
        <input type="text" className="todo-input" onChange={handleInput} value={inputText}/>
	    <button type="submit" className="todo-button">Add</button>
      </form>
    
    );

}

export default TodoForm;

