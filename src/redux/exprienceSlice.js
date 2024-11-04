import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers : {
    addExperience : (state, action) =>{
       state.push(action.payload) 
    },
    removeExperience :(state, action) =>{
        state.splice(action.payload, 1);  
    },
    updateExperience : (state, action) =>{
        const { index, updatedDetails } = action.payload;
        state[index] = { ...state[index], ...updatedDetails };  // Updates a specific education entry
    },
    resetExperience: () => initialState, 
    }
})

export const { addExperience, removeExperience, updateExperience, resetExperience } = experienceSlice.actions;
export default experienceSlice.reducer;