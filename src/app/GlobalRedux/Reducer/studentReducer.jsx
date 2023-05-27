'use client';
import { ActionTypes } from "../Actions/ActionType"
const initialState={
    students:[]
}

export const studentReducer=(state=initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.ADD_STUDENT:
            return {...state, students:payload}
       
        case ActionTypes.ADD_NEW_STUDENT:
            return {...state, students:[...state.students, payload.student]}    
            
        case ActionTypes.UPDATE_STUDENT:
            const updatedStudent=state.students.map((student)=>{
                if(student.id==payload.id){
                    return {...student, ...payload.updatedstudent}
                } else{
                    return student
                }    
            })
            return{...state, student:updatedStudent}

        case ActionTypes.DELETE_STUDENT:
          const deletedstudent=state.students.filter(student=>student.id!=payload.id)
          return {...state, students:deletedstudent}
        default:
            return state
    }
}

export const selectedStudentReducer=(state={}, {type, payload})=>{
    switch(type){
        case ActionTypes.GET_STUDENT:
            return {...state, ...payload}
        default:
            return state    
    }
}
