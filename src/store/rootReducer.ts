import { combineReducers } from '@reduxjs/toolkit';
import { reducer as settingsReducer } from 'src/slices/settings' 

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default rootReducer;
