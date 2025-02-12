import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import taskReducer from "./features/TodoSlice";
import alertReducer from "./features/alertSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: taskReducer, 
  alert: alertReducer,
});

export default rootReducer;
