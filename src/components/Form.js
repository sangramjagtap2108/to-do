import React from 'react';

// Added font-awesome and googleapis in index.html

const Form = ({setInputText,todos,inputText,setTodos,setStatus}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false,id:Math.random()*1000}]);
        // if value={inputText} is not set in input tag then below code will make value as null but input will
        // not become empty
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;