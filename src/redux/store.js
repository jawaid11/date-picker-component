
import { configureStore } from '@reduxjs/toolkit';
import personalDetailsReducer from './personalDetailsSlice';
import eductionDetailsReducer from './educationDetailsSlice';
import experienceReducer from './exprienceSlice';
import skillsReducer from './skillsSlice';
import toolsReducer from './toolsSlice'


const store = configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
    educationDetails: eductionDetailsReducer,
    experienceDetails : experienceReducer,
    skills: skillsReducer,
    tools:toolsReducer
  },
});

export default store;
