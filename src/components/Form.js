import React from "react";

function Form({inputText, setInputText, todoList, setTodoList, setCurrFilter}) {
    
    function inputTextHandler(e) {
        setInputText(e.target.value);
    };

    function todoListHandler(e) {
        const maxId = () => {
            if (todoList.length === 0) {
                return 0;
            } else {
                return todoList[todoList.length-1].id+1;
            };
        };
        e.preventDefault();
        setTodoList([
            ...todoList,
            {id: maxId(), task: inputText, status: false }
        ]);        
        setInputText("");
    };

    function setCurrFilterState(e) {
        setCurrFilter(e.target.value);
    };

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={todoListHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onClick={setCurrFilterState} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;