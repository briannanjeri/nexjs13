'use-client';
import { combineReducers } from "redux";
import { selectedStudentReducer, studentReducer } from "./studentReducer";

export const reducers=combineReducers({
   allstudents:studentReducer,
   student:selectedStudentReducer
})