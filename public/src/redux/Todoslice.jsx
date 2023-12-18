import { createSlice } from '@reduxjs/toolkit'
const initVal = {
    Task: []
}
const TaskSlice = createSlice({
    name: "Task",
    initialState: initVal,
    reducers: {
        Add: (state, actions) => {
           state.Task.push(actions.payload.task)
        },
        Delete: (state, actions) => {
            state.Task = state.Task.filter((item) => {
                            return(actions.payload.id !== item.id)
                        });
        },
        Edit: (state, actions) => {
            
            state.Task.forEach(element => {
                if(element.id===actions.payload.task.id)
                {
                    element.titel=actions.payload.task.titel
                    element.content=actions.payload.task.content
                    element.time=actions.payload.task.time
                }
            });
         },
    }
})
export const { Add, Delete ,Edit} = TaskSlice.actions
export default TaskSlice.reducer