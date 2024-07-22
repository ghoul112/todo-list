import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoSlice/TodoSlice';


const Addtodo = () => {
    const dispatch=useDispatch();
    const [task, settask] = useState({
        id:Math.random(),
        title:"",
        description:"",
        isDone:false,

    });
  return (
    <div className='add-task'>
        <input type='text' placeholder='enter task-title here' onChange={(e)=>{settask({...task,title:e.target.value});
    }}/>
        <input type='text' placeholder='enter task-description here' onChange={(e)=>{settask({...task,description:e.target.value});
    }}/>
        <button onClick={()=>dispatch(addTask(task))}>Add New Task</button>
    </div>
  )
}

export default Addtodo