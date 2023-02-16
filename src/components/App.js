import React, {useState, useEffect} from 'react';
import Form from './Form';
import TodoList from './TodoList';

function App() {

  const [inputText,setInputText] = useState("");
  const [todoList,setTodoList] = useState([]);
  const [currentFilter,setCurrFilter] = useState("all");

  useEffect(() => {
    if (localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify([]));
    } else {
      setTodoList(JSON.parse(localStorage.getItem("todoList")));
    };    
  }, []);
  
  useEffect(() => {   
    localStorage.setItem("todoList", JSON.stringify(todoList));
  },[todoList]);
  
  return (    
    <div>
      <header>
        <h1>To-do list</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todoList={todoList} 
        setTodoList={setTodoList} 
        setCurrFilter={setCurrFilter}           
      />
      <TodoList 
        todoList={todoList} 
        setTodoList={setTodoList}
        currentFilter={currentFilter}          
      />
    </div>
  );
};

export default App;