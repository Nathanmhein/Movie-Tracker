import { useState } from "react";

export default function App(){
  //  // const el = document.createElement("h1");
  //   //el.textContent = "Hello, World!";
  //   //return el;


  //   const [counter,setCounter] = useState(0);
  //   //const someState = useState;
  //   //console.log(someState(20));

  //   const increaseCounter = () => setCounter(prevState => prevState +1)
  //   const decreseCounter = () => setCounter(prevState => prevState - 1)
    
  //   return (
  //   <>
  //   <h1>Counter: {counter} </h1>
  //   <button onClick={increaseCounter}>Increase</button>
  //   <button onClick={decreseCounter}>Decrease</button>
  //   </>
  // )

  const [inputText,setInputText] = useState('');
  const [submitValue,setSubmitValue] = useState('');

  function handleInput(e){
    setInputText(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    setSubmitValue(inputText);
  }

  return (
    <div>
    <header> Todo List</header>
    {submitValue}
    <form onSubmit={handleSubmit}>
      <input onChange={handleInput} type= "text"/>
      <button type = "submit"> Add</button>
    </form>
    </div>
  )
  
  
  }
