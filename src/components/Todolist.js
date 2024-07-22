import React, { useState } from 'react'
import { useSelector} from 'react-redux'
import Todoitem from './Todoitem';
import Addtodo from './Addtodo';


const Todolist = () => {
    const todos=useSelector(state=>state.todo.todolist);
    const[showdone,setshowdone]=useState(false);
  return (
    
    <div className='todo-list'><Addtodo/>
    <button onClick={()=>setshowdone(!setshowdone)}>{showdone?"show done":"show undone"}</button>
    {todos.filter((todo)=>todo.isDone===showdone).map((todo)=>(
    
    <Todoitem todo={todo} />
    ))}
    </div>
  );
}

export default Todolist