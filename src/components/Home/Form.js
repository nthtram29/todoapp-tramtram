import React,{useEffect} from "react";
import {v4 as uuidv4} from "uuid";


const Form =({input, setInput, todos, setTodos, editTodo, setEditTodo}) =>{
    const updateTodo=(title,id, completed)=>{
        
        const newTodo = todos.map((todo)=>
            todo.id ===id ? {title,id, completed}: todo
        );
        setEditTodo("");
        setTodos(newTodo);
    };
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        }else{
            setInput("");
        }
    }, [setInput,editTodo]);
    const onInputChange=(event)=>{
        setInput(event.target.value);
    };
    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!editTodo){
            setTodos([{id: uuidv4(),title:input, completed:false},...todos]);
            setInput("");
            alert('Add success! ' );
        }
        else{
            updateTodo(input, editTodo.id, editTodo.completed)
            alert('Update success! ' );

        }
       
    };
    return(
        <form onSubmit={onFormSubmit}>
            <div className="form_input">
            <input type="text" 
            placeholder="Enter a Todo..." 
            className="task-input" 
            value={ input}  
            required
            onChange={onInputChange}
            />
        
            <button className="button-add" type="submit" >
                {editTodo ? "OK" : "Add"}
                
            </button>
            </div>
        </form>
    );
    
    };
    export default Form;