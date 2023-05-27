'use-client'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteStudent } from '../GlobalRedux/Actions/ActionCreators'
function Student({student}) {
  const dispatch=useDispatch()
    const {id,email,age,dob}=student
   
    const deleteStudent=async(e, id)=>{
      e.preventDefault()
      try{
        const res=await fetch(`http://localhost:3001/api/students/${id}`,{
          method:'DELETE',
        })
        if(res.ok){
          const data= await res.json();
          console.log(data)
          console.log('student deleted')
        }
        dispatch( DeleteStudent(id))

        
      }catch(error){
        console.log(error.message)
      }
    }

  return (
    <div>
      <ul >
        <Link href={`/student/${id}`}>
        <li>{student.name}</li>
        </Link>
        <li>{email}</li>
        <li>{age}</li>
        <li>{dob}</li>
      </ul>
      <button onClick={(e)=>deleteStudent(e,id)}>Delete</button>
    </div>
  )
}

export default Student
