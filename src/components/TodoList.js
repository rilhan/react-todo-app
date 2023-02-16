import React from "react";
import Todo from "./Todo";

function TodoList({todoList,setTodoList,currentFilter}) {    
    
    let newList;
    switch(currentFilter) {
        case "completed":
            newList = todoList.filter(item => item.status === true); break;
        case "uncompleted":
            newList = todoList.filter(item => item.status === false); break;
        default:
            newList = todoList;
    };

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {newList.map(item => (
                    <Todo 
                        key={item.id} 
                        obj={item} 
                        todoList={todoList} 
                        setTodoList={setTodoList}                     
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;