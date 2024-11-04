import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const educationDetailsSlice = createSlice({
  name: 'educationDetails',
  initialState,
  reducers: {
    addEducationDetail: (state, action) => {
      state.push(action.payload);  // Adds a new education entry to the array
    },
    updateEducationDetail: (state, action) => {
      const { index, updatedDetails } = action.payload;
      state[index] = { ...state[index], ...updatedDetails };  // Updates a specific education entry
    },
    removeEducationDetail: (state, action) => {
      state.splice(action.payload, 1);  // Removes an education entry by index
    },
    resetEducationDetails: () => initialState,  // Resets to the initial empty array
  }
});

export const { addEducationDetail, updateEducationDetail, removeEducationDetail, resetEducationDetails } = educationDetailsSlice.actions;
export default educationDetailsSlice.reducer;
