import React from 'react'
import { useDispatch } from 'react-redux'
import { doneTask, removeTask } from '../redux/todoSlice/TodoSlice';

import Edittask from './Edittask';

const Todoitem = ({todo}) => {
    const dispatch = useDispatch();
  return (
    <div className='todo-item'>
        <div className='text'>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
        </div>
        <span onClick={()=>dispatch(doneTask({id:todo.id}))}>{todo.isDone?"Done":"Not Done"}</span>
        <Edittask id={todo.id}/>

        <button onClick={()=>dispatch(removeTask({id:todo.id}))}>Remove</button>
    </div>
  )
}

export default Todoitem