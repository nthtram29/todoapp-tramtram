import React from 'react';
class App extends React.Component {
    state={
      curTime : new Date().toLocaleString(),
    }
    render(){
      return (
        <div className="Date_time">
             {this.state.curTime}
        </div>
      );
    }
  }
const TodosList = ({todos, setTodos, setEditTodo}) => {
   
    const handleComplete =(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return {...item, completed: !item.completed};
                }
                return item;
            })
        );
    };
    const handleEdit=({id})=>{
        const findTodo =todos.find((todo)=>todo.id ===id);
        setEditTodo(findTodo);
    };
    const handleDelete =({id})=>{
        setTodos(todos.filter((todo)=> todo.id !==id));
        alert('Delete success! ' );
        
    };
      
   
    return(
        <div>
           
    <section className='timeline'>
        <ul>
            {todos.map((todo)=>(
                <li  key={todo.id}>
                 <div className='nnn'>
                 TODO:
                 <input 
                  type="text"  
                  value={todo.title} 
                  className={`list ${todo.completed ? "complete" : ""}`} 
                  onChange={(event)=> event.preventDefault()}
                  />
                 <p className='list-item-li'> Work status: {todo.completed  ? "DONE" : "IN-PROGRESS"} </p>
                <time><App></App></time>
                    <button className='button-complete task-button'onClick={()=>handleComplete(todo)}>  
                        <i className='fa fa-check-circle'></i>
                    </button>
                    <button className='button-edit task-button'onClick={()=>handleEdit(todo)}> 
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='button-delete task-button' onClick={()=>handleDelete(todo)}> 
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
                </li>
            )
            )}
            </ul>
            </section>
        </div>);

    
};

export default TodosList;
