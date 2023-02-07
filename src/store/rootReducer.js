import { combineReducers } from '@reduxjs/toolkit';
import { reducer as jobReducer } from 'src/slices/job';

const rootReducer = combineReducers({
  job: jobReducer,
});

export default rootReducer;
