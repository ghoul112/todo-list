import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todolist:[
    {
        id:Math.random(),
        title:"todo item 1",
        description: "Description todo item 1",
        isDone: false,

    },
    {
        id:Math.random(),
        title:"todo item 2",
        description: "Description todo item 2",
        isDone: false,

    },
    {
        id:Math.random(),
        title:"todo item 3",
        description: "Description todo item 3",
        isDone: true,

    },
],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    addTask: (state, action) => {
    state.todolist.push(action.payload);
    },
    removeTask: (state, action) => {
        state.todolist=state.todolist.filter((el)=>el.id!==action.payload.id);
    },
    doneTask: (state, action) => {
        let i=state.todolist.findIndex((el)=>el.id===action.payload.id);

        state.todolist[i]={...state.todolist[i],isDone:!state.todolist[i].isDone};
    },
    editTask: (state, action) => {
        let i=state.todolist.findIndex((el)=>el.id===action.payload.id);

        state.todolist[i]={...state.todolist[i],
        title:action.payload.edited.title,
        description:action.payload.edited.description,
        };
    },
  },
})

// Action creators are generated for each case reducer function
export const {addTask ,removeTask,doneTask,editTask} = todoSlice.actions

export default todoSlice.reducer