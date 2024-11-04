import {createSlice} from "@reduxjs/toolkit";

const initialState  = [];

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers : {
    addSkills : (state, action) =>{
        state.push(action.payload)
    },
    removeSkills : (state, action) =>{
         state.splice(action.payload, 1)
    },
    updateSkills : (state, action) =>{
        const {index, addedSkills} = action.payload;
        state[index] = { ...state[index], ...addedSkills }
    }
  }
})

export const { addSkills, removeSkills, updateSkills} = skillsSlice.actions;
export default skillsSlice.reducer;