import React from "react";

const Todo = ({text,todo,setTodos,todos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((Todo) => Todo.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(Todo => {
            if(Todo.id === todo.id){
                return {...Todo,completed:!Todo.completed} ;
            };
            return Todo;
        }));
    };

    return (
        <div className="todo">
            {/* <li className="todo-item">{text}</li> */}
            {/* Dynamic Styling */}
            {/* If completed = true then className="todo-item completed" else "todo-item" */}
            {/* check App.css for classes  */}
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                {/* font-awesome styles */}
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;