import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wantedJobTitle: "",
  summary: "",
  fName: "",
  lName: "",
  mName: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  address: "",
  postalCode: "",
};

const personalDetailsSlice = createSlice({
  name: 'personalDetails',
  initialState,
  reducers: {
    updatePersonalDetails: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetPersonalDetails: () => initialState,
  },
});

export const { updatePersonalDetails, resetPersonalDetails } = personalDetailsSlice.actions;
export default personalDetailsSlice.reducer;
