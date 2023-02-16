import React from "react";

function Todo(props) {

    function completeTask() {
        const newList = props.todoList.map(item => {
            if (item.id === props.obj.id) {
                item.status = !item.status
            };
            return item;
        });
        props.setTodoList(newList);
    };

    function deleteTask() {
        const newList = props.todoList.filter(item => item.id !== props.obj.id);
        props.setTodoList(newList);
    };

    return (
        <div className="todo">
            <li className={props.obj.status ? "todo-item completed" : "todo-item"}>{props.obj.task}</li>
            <button onClick={completeTask} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteTask} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
};

export default Todo;