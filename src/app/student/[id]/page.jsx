'use client';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getStudent } from '@/app/GlobalRedux/Actions/ActionCreators';

function  selectedStudent({params}) {
  const [name, setName]=useState('')
  console.log(name)

  const student=useSelector(state=>state.student)
  console.log(student)

  const dispatch=useDispatch()
  console.log(params)
  const {id}=params
  const getstudent=async()=>{
    try{
      const res=await fetch(`http://localhost:3001/api/students/${id}`)
      const data=await res.json()
      console.log(data)
      dispatch(getStudent(data[0]))

    }
    catch(error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    if(id && id!='') getstudent()
  },[id])


   
  const updateStudent=async(e)=>{
    e.preventDefault()
    try{
      const res=await fetch(`http://localhost:3001/api/students/${id}`,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          name:name
        })
      })
      const data=await res.json()
      console.log(data)

    }catch(error){
      console.log(error.message)
    }

  }



  return (
    <div>
      <form onSubmit={updateStudent}>
      <input type="text" placeholder="enter students name" onChange={(e)=>setName(e.target.value)}></input>
      <input type='submit' value="Edit"/>
     </form>
     
      {student.name}
    </div>
  )
}

export default  selectedStudent
