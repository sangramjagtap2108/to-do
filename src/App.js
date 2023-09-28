import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

// ctrl+shift+p -> language mode -> javascript

function App() {
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);

  // if [] - useEffect will run initially once 
  // useEffect(() => {
  //   getLocalTodos();
  // },[]);

  // we want to run filterHandler when todo gets added or status changes
  useEffect(() => {
    filterHandler();
    // saveLocalTodos();
  },[status,todos]);
  
  const filterHandler = () => {    
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    };
  };

  // // save to local - to get the todos upon refresh
  // const saveLocalTodos = () => {
  //   localStorage.setItem("todos",JSON.stringify(todos));
  // };

  // const getLocalTodos = () => {
  //   let todoLocal = JSON.parse(localStorage.getItem("todos"));
  //   if(todoLocal) setTodos(todoLocal);
  // };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setInputText={setInputText} todos={todos} inputText={inputText} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
