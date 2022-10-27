import React,{useState, useEffect} from 'react';
import './Home/Home.css';
import Header from './Home/Header';
import Form from './Home/Form';
import TodosList from './Home/TodoLists';


const Home=()=>{
  const initialStale =JSON.parse(localStorage.getItem("todos") )|| [];
  const [input, setInput] =useState("");
  const [todos, setTodos] =useState(initialStale);
  const [editTodo, setEditTodo]= useState(null);
  
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);
  return (
      <div className='o'>
        <div className='start'>
        <div>
          <Header />
        </div>
        <div>
          <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />

        </div>
        </div>
        <div>
        <TodosList todos={todos} 
        setTodos={setTodos} 
        setEditTodo={setEditTodo}/>
      </div>
       </div>
      
    // </div>
  );
}

export default Home;
