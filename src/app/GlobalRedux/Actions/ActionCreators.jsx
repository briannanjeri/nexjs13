'use client';
import { ActionTypes } from "./ActionType";

export const addStudents=(student)=>{
    return{
        type:ActionTypes.ADD_STUDENT,
        payload:student
    }
}

export const addNewStudent=(student)=>{
    return{
        type:ActionTypes.ADD_NEW_STUDENT,
        payload:student
    }
}


export const getStudent=(student)=>{
    return{
        type:ActionTypes.GET_STUDENT,
        payload:student
    }
}

export const updateStudent=(id, updatedstudent)=>{
    return{
        type:ActionTypes.UPDATE_STUDENT,
        payload:{
            id,
            updatedstudent
        }
    }
}

export const DeleteStudent=(id)=>{
    return{
        type:ActionTypes.DELETE_STUDENT,
        payload:id
    }
}