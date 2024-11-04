import {createSlice} from "@reduxjs/toolkit";

const initialState  = [];

const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers : {
    addTools : (state, action) =>{
        state.push(action.payload)
    },
    removeTools : (state, action) =>{
         state.splice(action.payload, 1)
    },
    updateTools : (state, action) =>{
        const {index, addedTools} = action.payload;
        state[index] = { ...state[index], ...addedTools }
    }
  }
})

export const { addTools, removeTools, updateTools} = toolsSlice.actions;
export default toolsSlice.reducer;