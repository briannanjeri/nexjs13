'use client';
import Image from 'next/image'
import styles from './page.module.css'
 import { useDispatch, useSelector } from 'react-redux'
 import { addStudents } from './GlobalRedux/Actions/ActionCreators';
 import Student from './students/page';
 import { useEffect, useState } from 'react';
import { addNewStudent } from './GlobalRedux/Actions/ActionCreators';

export default function Home() {
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [age, setAge]=useState('')
  const [dob, setDob]=useState('')

  const students=useSelector(state=>state.allstudents.students)
  console.log(students)
  const dispatch=useDispatch()

  const fetchStudents=async()=>{
    try{
      const res=await fetch("http://localhost:3001/api/students")
      const data= await res.json()
      console.log(data)
      dispatch(addStudents(data))
    }catch(error){
      console.log(error.message)
    }

     
  }
 
  useEffect(()=>{
   fetchStudents();
  },[])
 
const AddStudent=async(e)=>{
  try{
    e.preventDefault()
    const res=await fetch(`http://localhost:3001/api/students`,{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name,
      email,
      age,
      dob
    })
    })
    console.log(res)
    
  if(res.ok){
    const newdata=await res.json()
    console.log(newdata)

  }
  dispatch(addNewStudent(newdata))

  }catch(error){
    console.error(error.message)
  }

}

   return (
    <main>
      <form onSubmit={AddStudent}>
        <input type='text' value={name} placeholder='enter student name' onChange={(e)=>setName(e.target.value)} ></input>
        <input type='text' value={email} placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} ></input>
        <input type='text' value={age} placeholder='enter age' onChange={(e)=>setAge(e.target.value)} ></input>
        <input type='text' value={dob} placeholder='enter dob' onChange={(e)=>setDob(e.target.value)}></input>
        <input type='submit' value="Add student"></input>
      </form>

     <div>
      {students.map((student)=>(
           <Student  key={student.id} student={student}/>
      ))}
     </div>
    </main>
  )
}
